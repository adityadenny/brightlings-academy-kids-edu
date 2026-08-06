#!/usr/bin/env node
/*
 * Scans index.html / en.html for:
 *  - internal anchor links (href="#foo") that don't match any id="foo" on the page
 *  - local asset references (assets/...) that don't exist on disk
 * Writes a dated health-check report to reports/link-check.md.
 * Run daily by .github/workflows/link-check.yml.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES = ['index.html', 'en.html'];

function checkPage(file) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');

  const ids = new Set();
  for (const m of html.matchAll(/\bid="([^"]+)"/g)) ids.add(m[1]);

  const brokenAnchors = [];
  const seenAnchors = new Set();
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    const anchor = m[1];
    if (!anchor || seenAnchors.has(anchor)) continue;
    seenAnchors.add(anchor);
    if (!ids.has(anchor)) brokenAnchors.push(anchor);
  }

  const missingAssets = [];
  const seenAssets = new Set();
  for (const m of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) {
    const asset = m[1];
    if (seenAssets.has(asset)) continue;
    seenAssets.add(asset);
    if (!fs.existsSync(path.join(ROOT, asset))) missingAssets.push(asset);
  }

  return {
    file,
    anchorsChecked: seenAnchors.size,
    assetsChecked: seenAssets.size,
    brokenAnchors,
    missingAssets,
  };
}

const dateStr = new Date().toISOString().slice(0, 10);
const results = PAGES.map(checkPage);
const totalIssues = results.reduce((sum, r) => sum + r.brokenAnchors.length + r.missingAssets.length, 0);

let report = '# Link & Asset Health Check\n\n';
report += `Last checked: **${dateStr}** (UTC)\n\n`;
report += totalIssues === 0
  ? 'Status: ✅ All clear — no broken anchors or missing local assets found.\n\n'
  : `Status: ⚠️ ${totalIssues} issue(s) found — see details below.\n\n`;

for (const r of results) {
  report += `## ${r.file}\n`;
  report += `- Anchor links checked: ${r.anchorsChecked}\n`;
  report += `- Local assets checked: ${r.assetsChecked}\n`;
  if (r.brokenAnchors.length) {
    report += `- Broken anchors: ${r.brokenAnchors.map((a) => `\`#${a}\``).join(', ')}\n`;
  }
  if (r.missingAssets.length) {
    report += `- Missing assets: ${r.missingAssets.map((a) => `\`${a}\``).join(', ')}\n`;
  }
  report += '\n';
}

fs.mkdirSync(path.join(ROOT, 'reports'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'reports', 'link-check.md'), report);
console.log(`Link check complete for ${dateStr}: ${totalIssues} issue(s) found.`);

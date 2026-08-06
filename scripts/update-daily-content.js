#!/usr/bin/env node
/*
 * Regenerates assets/js/daily-content.js with a deterministic pick of
 * "quote of the day" + "featured testimonial" based on the current date.
 * Run daily by .github/workflows/daily-content.yml.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const quotes = require('../assets/js/quotes-data.js');

const now = new Date();
const dateStr = now.toISOString().slice(0, 10);

const startOfYear = new Date(now.getFullYear(), 0, 0);
const dayOfYear = Math.floor((now - startOfYear) / 86400000);

const quoteIndex = dayOfYear % quotes.length;
const featuredTestimonial = dayOfYear % 3;

const daily = { date: dateStr, quoteIndex, featuredTestimonial };

const output =
  '/*\n' +
  ' * Auto-generated daily by .github/workflows/daily-content.yml\n' +
  ' * via scripts/update-daily-content.js — do not edit by hand.\n' +
  ' */\n' +
  'window.BRIGHTLINGS_DAILY = ' + JSON.stringify(daily, null, 2) + ';\n';

const outPath = path.join(__dirname, '..', 'assets', 'js', 'daily-content.js');
fs.writeFileSync(outPath, output);

console.log(`Updated daily content for ${dateStr}: quoteIndex=${quoteIndex}, featuredTestimonial=${featuredTestimonial}`);

# Brightlings Academy Homepage

Situs web beranda premium untuk Brightlings Academy — Taman Kanak-Kanak / Pendidikan Anak Usia Dini (PAUD) berkualitas premium. Dibangun menggunakan arsitektur web modern yang bersih, modular, dan terorganisir secara profesional.

Desain visual mengutamakan estetika Scandinavian-inspired, tipografi ramah anak yang premium, dan animasi mikro interaktif yang memukau.

---

## 📁 Arsitektur Proyek Modern

Proyek ini telah direstrukturisasi dari berkas tunggal menjadi struktur direktori standar industri profesional:

```text
Kids-edu-web/
├── index.html          # Struktur utama markup HTML & konfigurasi Tailwind Play CDN
├── assets/             # Folder aset web terorganisir
│   ├── css/
│   │   └── style.css   # Gaya kustom, keyframes animasi, & kustomisasi scrollbar
│   ├── js/
│   │   └── app.js      # Logika interaktif, smooth scroll, & Intersection Observer
│   └── images/
│       └── .gitkeep    # Folder khusus untuk menampung gambar grafis lokal
├── README.md           # Dokumentasi proyek
└── LICENSE            # Lisensi proyek
```

---

## ✨ Fitur Utama

- **Struktur HTML Bersih**: Mengikuti kaidah SEO best practices, penggunaan HTML5 semantik lengkap dengan tag meta deskripsi dan Open Graph.
- **Tailwind CSS + Custom CSS**: Menggunakan Tailwind Play CDN untuk kelas utilitas modern berpadu dengan berkas kustom `style.css` untuk animasi transisi halus dan scrollbar kustom.
- **Intersection Observer**: Logika pemicu animasi scroll (`.fade-up`) yang berjalan mulus saat elemen masuk ke viewport pengguna.
- **Interaksi Mobile-Responsive**: Menu navigasi seluler (hamburger menu) yang adaptif dan responsif dengan transisi tinggi (*max-height*) yang mulus.
- **Formulir Quick Inquiry Dinamis**: Dilengkapi validasi bawaan peramban dan indikator sukses interaktif saat pengiriman berhasil.

---

## 🎨 Panduan Desain & Palet Warna

- **Tipografi**:
  - Headings: `Fredoka` (Playful, friendly, & bold)
  - Body Text: `Nunito` (Clean, highly legible)
- **Palet Warna Kustom**:
  - **Primary**: `#F97316` (Orange hangat penuh energi)
  - **Secondary**: `#22C55E` (Hijau daun menenangkan)
  - **Accent**: `#0EA5E9` (Biru langit cerah)
  - **Background**: `#FFFBF5` (Krem hangat ramah mata)
  - **Text**: `#1C1917` (Charcoal gelap premium)

---

## 🚀 Memulai Pengembangan

1. **Unduh Proyek**:
   ```bash
   git clone https://github.com/adityadenny/brightlings-academy-kids-edu.git
   cd brightlings-academy-kids-edu
   ```

2. **Jalankan Secara Lokal**:
   Anda tidak memerlukan build tool khusus. Cukup buka berkas `index.html` langsung di peramban web pilihan Anda, atau gunakan ekstensi seperti **Live Server** di VS Code untuk pengalaman pratinjau instan dengan *Hot Reload*.

---

## 📄 Lisensi
Proyek ini dilisensikan di bawah **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikan proyek ini.

# 📁 Project Documentation

## 📌 Project Overview
Ini adalah proyek berbasis **Preact.js + Vite** yang menggunakan **Tailwind CSS** untuk styling. Struktur proyek ini dirancang agar modular dengan pembagian komponen dan halaman yang rapi.

## 📂 Folder Structure
Berikut adalah struktur utama dari proyek ini:

```
📦 Project Root
├── 📁 dist               # Build hasil produksi
├── 📁 node_modules       # Dependencies dari npm
├── 📁 public             # Static assets
│   ├── 🖼️ background.png  # Gambar latar belakang
│   ├── 📄 klien.csv       # Data CSV klien
│   ├── 🖼️ logo.png        # Logo proyek
│   ├── 🎨 style.css       # File CSS statis
│   ├── 🔷 vite.svg        # Logo Vite
├── 📁 src                # Source code utama
│   ├── 📁 assets         # Folder untuk assets tambahan
│   ├── 📁 components     # Folder untuk komponen UI
│   │   ├── 🖼️ Carousel.jsx   # Komponen carousel
│   │   ├── 📅 Date.jsx       # Komponen tanggal
│   │   ├── 📜 Footer.jsx     # Footer
│   │   ├── 📌 Header.jsx     # Header utama
│   │   ├── 🔠 Heading.jsx    # Komponen heading
│   │   ├── 🔄 LogoMarquee.jsx # Animasi marquee logo
│   │   ├── 📂 Sidebar.jsx    # Sidebar navigasi
│   ├── 📁 pages          # Folder untuk halaman utama
│   │   ├── 🚫 _404.jsx      # Halaman error 404
│   │   ├── ℹ️ About.jsx      # Halaman tentang kami
│   │   ├── 👥 Clients.jsx    # Halaman klien
│   │   ├── 📞 Contact.jsx    # Halaman kontak
│   │   ├── 🖼️ Gallery.jsx    # Halaman galeri
│   │   ├── 🏠 Home.jsx       # Halaman utama
│   │   ├── 🛍️ Products.jsx   # Halaman produk
│   │   ├── 🚗 Sewa.jsx       # Halaman penyewaan
│   ├── 📁 types         # (Opsional) Folder untuk tipe data atau utilitas
│   ├── 📜 index.jsx     # Entry point utama
│   ├── 🎨 style.css     # File CSS global tambahan
├── 📄 .gitignore        # File untuk mengecualikan file tertentu dari Git
├── 📄 index.html        # HTML utama aplikasi
├── 📄 package.json      # File konfigurasi npm
├── 📄 package-lock.json # Lock file untuk dependencies
├── 📄 postcss.config.js # Konfigurasi PostCSS
├── 📄 tailwind.config.js# Konfigurasi Tailwind CSS
├── 📄 vite.config.js    # Konfigurasi Vite
└── 📄 README.md         # Dokumentasi proyek (file ini!)
```

## 🚀 Teknologi yang Digunakan
- **Preact.js** - Library untuk membangun UI
- **Vite** - Build tool untuk React
- **Tailwind CSS** - Framework CSS untuk styling cepat
- **PostCSS** - Pengelola CSS

## 🔧 Cara Menjalankan Proyek
1. **Clone repository ini**
   ```sh
   git clone https://github.com/username/repository-name.git
   cd repository-name
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Jalankan proyek dalam mode development**
   ```sh
   npm run dev
   ```
4. **Buka di browser**
   ```
   http://localhost:5173
   ```

_© 2025 PT SCARLET POWER INDONESIA


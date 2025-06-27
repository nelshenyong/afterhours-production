# Afterhours Production Website

Website resmi vendor jasa fotografi & videografi Palembang.

## Fitur

- Navbar minimalis: hanya logo dan nama di tengah atas
- Desain modern, responsif untuk desktop & HP
- Hero section dengan highlight Palembang
- Portofolio (thumbnail, nama acara, client, tanggal, link Drive & IG)
- Paket jasa dengan fitur checklist (icon Boxicons)
- Kontak WhatsApp & Instagram
- Semua data/config mudah diubah di `script.js`
- Warna dasar kuning #FFD625

## Struktur File

- `index.html` — Struktur utama website
- `style.css` — Styling & animasi (sudah responsif)
- `script.js` — Semua data/config & logic web
- `assets/` — Gambar logo, thumbnail portofolio, favicon, dsb

## Cara Edit Data

Semua data (about, layanan, portofolio, paket, kontak) ada di bagian atas `script.js`:

```js
const config = {
  about: '...',
  services: [ ... ],
  portfolio: [ ... ],
  paket: [ ... ],
  contact: { ... }
}
```

Edit/isi sesuai kebutuhan. Untuk portofolio, tambahkan objek baru di array `portfolio`.
Untuk paket, bisa tambah/ubah fitur, harga, dan link WhatsApp.

### Contoh Data Paket (di `script.js`):

```js
paket: [
  {
    nama: "Paket Foto Basic",
    harga: "Rp 500.000",
    fitur: [
      "2 jam dokumentasi",
      "1 fotografer profesional",
      "50+ foto edit HD",
      "Drive hasil",
    ],
    wa: "https://wa.me/6281273462705?...",
  },
  // dst
];
```

### Contoh Data Portofolio (di `script.js`):

```js
portfolio: [
  {
    thumb: "https://ik.imagekit.io/qttuwilgn/DSC00724.jpg?...",
    event: "Dokumentasi Acara Farewell ...",
    client: "SMP Tiara Nusantara ...",
    date: "16 Juni 2025",
    drive: "https://drive.google.com/...",
    ig: "https://www.instagram.com/reel/...",
  },
  // dst
];
```

## Icon Checklist Paket

Checklist pada fitur paket menggunakan [Boxicons](https://boxicons.com/) (class: `bx bx-check`).

## Deploy

- Upload ke GitHub Pages (hanya HTML/CSS/JS, tanpa backend)

## Kontak

- WhatsApp: 6281273462705
- Instagram: @afterhours_production

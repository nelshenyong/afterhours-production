// Konfigurasi utama website Afterhours Production
const config = {
  about: `Afterhours Production adalah vendor jasa fotografi dan videografi profesional di Palembang. Kami berfokus pada dokumentasi berbagai acara seperti pernikahan, wisuda, ulang tahun, dan event penting lainnya di Palembang dan sekitarnya. Dengan tim berpengalaman dan peralatan modern, kami siap mengabadikan momen terbaik Anda di Palembang.`,
  services: [
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="15" rx="3" fill="#FFD625" stroke="#222" stroke-width="1.5"/><circle cx="12" cy="14.5" r="4" fill="#fff" stroke="#222" stroke-width="1.5"/><rect x="7" y="2" width="10" height="5" rx="2" fill="#FFD625" stroke="#222" stroke-width="1.5"/></svg>`,
      title: "Fotografi Acara Palembang",
      desc: "Jasa dokumentasi foto profesional untuk berbagai acara di Palembang: wedding, wisuda, ulang tahun, gathering, dan event lainnya.",
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="3" fill="#FFD625" stroke="#222" stroke-width="1.5"/><polygon points="16,12 22,16 22,8" fill="#fff" stroke="#222" stroke-width="1.5"/></svg>`,
      title: "Videografi Acara Palembang",
      desc: "Jasa dokumentasi video profesional untuk berbagai acara di Palembang: cinematic wedding, highlight event, dan video kreatif lainnya.",
    },
  ],
  portfolio: [
    {
      thumb:
        "https://ik.imagekit.io/qttuwilgn/DSC00724.jpg?updatedAt=1751016052026",
      event:
        "Dokumentasi Acara Farewell SMP Tiara Nusantara & Palm KIds School",
      client: "SMP Tiara Nusantara & Palm KIds School",
      date: "16 Juni 2025",
      drive:
        "https://drive.google.com/drive/folders/15_cm39UijKaqCn24sfjjojYTPlAVBLAD",
      ig: "https://www.instagram.com/reel/DLRaFCDxhC2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      thumb:
        "https://ik.imagekit.io/qttuwilgn/DSC00921.jpg?updatedAt=1751015797131",
      event: "Sweet Seventeen Birthday Party Vincent",
      client: "Vincent",
      date: "22 Juni 2025",
      drive:
        "https://drive.google.com/drive/folders/1CL6mR1gWPF8zDRVV4dKh6GXQaBD1CWUE",
      ig: "https://www.instagram.com/p/DLX03aYSsZj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ],
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
      wa: "https://wa.me/6281273462705?text=Halo%20Afterhours%20Production%2C%20saya%20ingin%20pesan%20Paket%20Foto%20Basic",
    },
    {
      nama: "Paket Foto + Video",
      harga: "Rp 1.000.000",
      fitur: [
        "4 jam dokumentasi",
        "2 fotografer & 1 videografer",
        "100+ foto edit HD",
        "Video highlight 2-3 menit",
        "Drive hasil",
      ],
      wa: "https://wa.me/6281273462705?text=Halo%20Afterhours%20Production%2C%20saya%20ingin%20pesan%20Paket%20Foto%20%2B%20Video",
    },
    {
      nama: "Paket Acara Full",
      harga: "Rp 2.500.000",
      fitur: [
        "Full day dokumentasi",
        "2 fotografer & 2 videografer",
        "200+ foto edit HD",
        "Video cinematic acara",
        "Drive Hasil",
      ],
      wa: "https://wa.me/6281273462705?text=Halo%20Afterhours%20Production%2C%20saya%20ingin%20pesan%20Paket%20Acara%20Full",
    },
    {
      nama: "Paket Custom/Spesial",
      harga: "Hubungi Kami",
      fitur: [
        "Paket sesuai kebutuhan acara Anda",
        "Konsultasi gratis",
        "Penawaran fleksibel",
      ],
      wa: "https://wa.me/6281273462705?text=Halo%20Afterhours%20Production%2C%20saya%20ingin%20konsultasi%20Paket%20Custom",
      customCta: "Konsultasi Paket Custom",
    },
  ],
  contact: {
    whatsapp: "6281273462705",
    instagram: "afterhours_production",
  },
};

// Render About
const aboutDesc = document.getElementById("about-desc");
aboutDesc.textContent = config.about;

// Render Services
const servicesList = document.getElementById("services-list");
servicesList.innerHTML = config.services
  .map(
    (s) => `
  <div class="service-card">
    <div class="service-icon" style="font-size:2.2rem;">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>
`
  )
  .join("");

// Render Portfolio
const portfolioList = document.getElementById("portfolio-list");
portfolioList.innerHTML = config.portfolio
  .map(
    (p) => `
  <div class="portfolio-card">
    <img src="${p.thumb}" alt="${p.event}" class="portfolio-thumb">
    <div class="portfolio-meta">${p.event} <br> <b>${p.client}</b> <br> <span>${p.date}</span></div>
    <div class="portfolio-links">
      <a href="${p.drive}" target="_blank">Drive</a>
      <a href="${p.ig}" target="_blank">Instagram</a>
    </div>
  </div>
`
  )
  .join("");

// Render Paket
const paketList = document.getElementById("paket-list");
paketList.innerHTML = config.paket
  .map(
    (p) => `
      <div class="paket-card">
        <div class="paket-title">${p.nama}</div>
        <div class="paket-harga">${p.harga}</div>
        <ul class="paket-fitur">
          ${p.fitur
            .map((f) => `<li><i class='bx bx-check'></i> ${f}</li>`)
            .join("")}
        </ul>
        <a href="${p.wa}" target="_blank" class="paket-cta">${
      p.customCta ? p.customCta : "Pesan via WhatsApp"
    }</a>
      </div>
    `
  )
  .join("");

// Render Contact Info
const contactInfo = document.getElementById("contact-info");
contactInfo.innerHTML = `
  <p><b>WhatsApp:</b> <a href="https://wa.me/${config.contact.whatsapp}" target="_blank">${config.contact.whatsapp}</a></p>
  <p><b>Instagram:</b> <a href="https://instagram.com/${config.contact.instagram}" target="_blank">@${config.contact.instagram}</a></p>
`;

document.getElementById("year").textContent = new Date().getFullYear();

// Navbar mobile toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
// Tutup menu saat link diklik (mobile UX)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) navLinks.classList.remove("open");
  });
});

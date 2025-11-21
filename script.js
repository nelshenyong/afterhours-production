// Global variable untuk menyimpan data
let websiteData = null;

// Load data dari data.json
async function loadData() {
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    websiteData = await response.json();
    console.log("Data loaded successfully:", websiteData);
  } catch (error) {
    console.error("Gagal memuat data:", error);
  }
}

// Initialize website setelah data loaded
async function initWebsite() {
  await loadData();

  // Render content berdasarkan halaman
  const currentPage = getCurrentPage();

  switch (currentPage) {
    case "index":
      renderIndexPage();
      break;
    case "about":
      renderAboutPage();
      break;
    case "services":
      renderServicesPage();
      break;
    case "portfolio":
      renderPortfolioPage();
      break;
    case "team":
      renderTeamPage();
      break;
    case "contact":
      renderContactPage();
      break;
  }

  // Initialize common features
  initAnimations();
  initCounters();
  initFAQ();
  initContactForm();
}

// Get current page name
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html", "");
  return page || "index";
}

// Render Index Page
function renderIndexPage() {
  if (!websiteData) return;

  // Render about section
  const aboutDesc = document.getElementById("about-desc");
  if (aboutDesc && websiteData.about) {
    aboutDesc.textContent = websiteData.about.description;
  }

  // Render services
  renderServices();

  // Render packages
  renderPackages();

  // Render portfolio
  renderPortfolio();

  // Render contact info
  renderContactInfo();
}

// Render About Page
function renderAboutPage() {
  if (!websiteData || !websiteData.about) return;

  // Update hero content
  const heroTitle = document.querySelector(".about-hero-title");
  const heroSubtitle = document.querySelector(".about-hero-subtitle");
  const heroDesc = document.querySelector(".about-hero-desc");

  if (heroTitle) heroTitle.textContent = websiteData.about.title;
  if (heroSubtitle) heroSubtitle.innerHTML = websiteData.about.subtitle;
  if (heroDesc) heroDesc.textContent = websiteData.about.description;

  // Render stats
  renderStats();
}

// Render Services Page
function renderServicesPage() {
  if (!websiteData) return;

  // Render services
  renderServices();

  // Render packages
  renderPackages();
}

// Render Portfolio Page
function renderPortfolioPage() {
  if (!websiteData) return;

  // Render portfolio
  renderPortfolio();
}

// Render Team Page
function renderTeamPage() {
  if (!websiteData) return;

  // Render team
  renderTeam();
}

// Render Contact Page
function renderContactPage() {
  if (!websiteData) return;

  // Render contact info
  renderContactInfo();
}

// Render Services
function renderServices() {
  if (!websiteData || !websiteData.services) return;

  const servicesContainer = document.getElementById("services-list");
  if (!servicesContainer) return;

  servicesContainer.innerHTML = websiteData.services
    .map(
      (service) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="service-card animate-on-scroll">
        <div class="service-icon">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Render Packages
function renderPackages() {
  if (!websiteData || !websiteData.packages) return;

  const packagesContainer = document.getElementById("packages-list");
  if (!packagesContainer) return;

  packagesContainer.innerHTML = websiteData.packages
    .map(
      (pkg) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="package-card animate-on-scroll">
        <div class="package-header">
          <h3>${pkg.nama}</h3>
          <div class="package-price">${pkg.harga}</div>
        </div>
        <div class="package-features">
          <ul>
            ${pkg.fitur.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
        <div class="package-footer">
          <a href="${pkg.wa}" class="btn btn-primary" target="_blank">
            ${pkg.customCta}
          </a>
        </div>
      </div>
  </div>
`
    )
    .join("");
}

// Render Portfolio
function renderPortfolio() {
  if (!websiteData || !websiteData.portfolio) return;

  const portfolioContainer = document.getElementById("portfolio-list");
  if (!portfolioContainer) return;

  portfolioContainer.innerHTML = websiteData.portfolio
    .map(
      (item) => `
    <div class="col-lg-4 col-md-6 col-12 mb-4 portfolio-item animate-on-scroll" data-category="${item.category}">
  <div class="portfolio-card animate-on-scroll">
        <div class="portfolio-image">
          <img src="${item.thumb}" alt="${item.event}" class="img-fluid">
          <div class="portfolio-overlay">
            <div class="portfolio-actions">
              <a href="${item.overlay.drive}" class="btn btn-primary" target="_blank">
                <i class='bx bx-folder-open'></i> Drive
              </a>
              <a href="${item.overlay.instagram}" class="btn btn-outline" target="_blank">
                <i class='bx bxl-instagram'></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h4>${item.event}</h4>
          <p class="portfolio-client">${item.client}</p>
          <p class="portfolio-date">${item.date}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Initialize portfolio filter
  initPortfolioFilter();

  // Re-initialize animations for new portfolio cards
  setTimeout(() => {
    initAnimations();
  }, 100);
}

// Render Team
function renderTeam() {
  if (!websiteData || !websiteData.team) return;

  const teamContainer = document.getElementById("team-list");
  if (!teamContainer) return;

  teamContainer.innerHTML = websiteData.team
    .map(
      (member) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="team-card animate-on-scroll">
        <div class="team-photo">
          <img src="${member.photo}" alt="${member.name}" class="img-fluid">
        </div>
        <div class="team-info">
          <h4>${member.name}</h4>
          <p class="team-position">${member.position}</p>
          <div class="team-details">
            <p><strong>ID:</strong> ${member.employeeId}</p>
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
          </div>
        </div>
    </div>
  </div>
`
    )
    .join("");
}

// Render Stats
function renderStats() {
  if (!websiteData || !websiteData.about || !websiteData.about.stats) return;

  const statsContainer = document.querySelector(".stats-grid");
  if (!statsContainer) return;

  statsContainer.innerHTML = websiteData.about.stats
    .map(
      (stat) => `
    <div class="col-md-3 col-6">
      <div class="stat-item">
        <div class="stat-number" data-target="${stat.number}">0</div>
        <div class="stat-label">${stat.label}</div>
      </div>
      </div>
    `
    )
    .join("");
}

// Render Contact Info
function renderContactInfo() {
  if (!websiteData || !websiteData.contact) return;

  const contactContainer = document.getElementById("contact-info");
  if (!contactContainer) return;

  contactContainer.innerHTML = `
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="contact-item">
          <i class='bx bx-phone'></i>
          <div>
            <h4>Telepon</h4>
            <p>${websiteData.contact.phone}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="contact-item">
          <i class='bx bx-envelope'></i>
          <div>
            <h4>Email</h4>
            <p>${websiteData.contact.email}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="contact-item">
          <i class='bx bx-map'></i>
          <div>
            <h4>Alamat</h4>
            <p>${websiteData.contact.address}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="contact-item">
          <i class='bx bxl-instagram'></i>
          <div>
            <h4>Instagram</h4>
            <p><a href="${websiteData.contact.instagram}" target="_blank">@afterhours_production</a></p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize Portfolio Filter
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll(".portfolio-filter");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter items
      portfolioItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Initialize Animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        // Add staggered animation for multiple elements
        const siblings = Array.from(entry.target.parentNode.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Add loading animation to hero elements
  setTimeout(() => {
    document.querySelectorAll(".hero-content > *").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, 100);
}

// Initialize Counters
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-target"));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Initialize FAQ
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherAnswer) {
            otherAnswer.style.maxHeight = "0";
            otherAnswer.style.padding = "0 2rem";
          }
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        // Calculate scroll height first
        answer.style.maxHeight = "none";
        const scrollHeight = answer.scrollHeight;
        answer.style.maxHeight = "0";
        // Force reflow
        answer.offsetHeight;
        // Now animate to full height
        answer.style.maxHeight = scrollHeight + "px";
        answer.style.padding = "0 2rem 1.5rem 2rem";
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = "0";
        answer.style.padding = "0 2rem";
      }
    });
  });
}

// Initialize Contact Form
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate form
    if (!name || !email || !message) {
      alert("Mohon lengkapi semua field yang diperlukan.");
      return;
    }

    // Create WhatsApp message
    const waMessage = `Halo, saya ${name} (${email}). ${message}`;
    const waUrl = `https://wa.me/6281273462705?text=${encodeURIComponent(
      waMessage
    )}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");

    // Reset form
    form.reset();

    // Show success message
    alert("Terima kasih! Anda akan diarahkan ke WhatsApp.");
  });
}

// Add smooth scroll behavior
function initSmoothScroll() {
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Add loading animation
function initLoadingAnimation() {
  // Add loading class to body
  document.body.classList.add("loading");

  // Remove loading class after page load
  window.addEventListener("load", () => {
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
  });
}

// Initialize website when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  initSmoothScroll();
  initWebsite();
});

// Update year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// This functionality is already handled by initFAQ() function above

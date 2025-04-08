// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = scrolled * 0.5 + "px";
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll(".bread-item, .cave-entrance");

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial styles for fade elements
fadeElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition = "all 0.6s ease-out";
});

// Add scroll event listener
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Navigation background change on scroll
const nav = document.querySelector(".main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 248, 220, 0.95)";
    nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.background = "rgba(255, 248, 220, 0.9)";
    nav.style.boxShadow = "none";
  }
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Add fade-up animation to sections
const sections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.25,
  rootMargin: "0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  section.classList.add("fade-up");
  section.style.opacity = "0";
  sectionObserver.observe(section);
});

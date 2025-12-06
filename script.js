document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // ================================
  // GESTION DU MENU BURGER
  // ================================
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isActive = menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isActive);
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll(".nav-links li a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", false);
      });
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", false);
      }
    });
  }

  // ================================
  // GESTION DU SCROLL BLUR HEADER
  // ================================
  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 10;
    
    if (isScrolled) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ================================
  // ANIMATIONS AU SCROLL (Intersection Observer)
  // ================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer les sections
  document.querySelectorAll(".section-content").forEach(section => {
    observer.observe(section);
  });

  // ================================
  // SMOOTH SCROLL POUR LES LIENS
  // ================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ================================
  // INDICATEUR DE NAVIGATION ACTIF
  // ================================
  const navItems = document.querySelectorAll(".nav-links li a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href").slice(1) === current) {
        item.classList.add("active");
      }
    });
  });
});
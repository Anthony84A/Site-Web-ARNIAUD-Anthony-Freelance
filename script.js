document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backdropFilter = "blur(12px)";
      header.style.webkitBackdropFilter = "blur(12px)";
      header.style.background = "rgba(255, 255, 255, 0.15)";
    } else {
      header.style.backdropFilter = "blur(0px)";
      header.style.webkitBackdropFilter = "blur(0px)";
      header.style.background = "rgba(255, 255, 255, 0)";
    }
  });
});

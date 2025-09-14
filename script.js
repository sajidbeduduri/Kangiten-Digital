// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple form submission (demo only)
document.querySelector("form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
});

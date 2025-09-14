// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// Scroll to quote form button
document.querySelector('.btn-quote').addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector('#quote-form').scrollIntoView({behavior:"smooth"});
});

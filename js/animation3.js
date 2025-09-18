document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".sd3");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");    
      } else {
        entry.target.classList.remove("show"); 
      }
    });
  }, {
    threshold: 0.2  
  });

  targets.forEach(el => observer.observe(el));
});
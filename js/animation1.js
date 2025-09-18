document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".sd1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");    // 화면에 들어오면 보이기
      } else {
        entry.target.classList.remove("show"); // 화면에서 벗어나면 다시 숨기기
      }
    });
  }, {
    threshold: 0.2   // 요소가 20% 이상 보일 때 실행
  });

  targets.forEach(el => observer.observe(el));
});
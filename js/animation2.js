function observeAndReveal(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 보이면 show 추가 (올라옴)
        elements.forEach(el => el.classList.add('show'));
      } else {
        // 화면 벗어나면 다시 숨김
        elements.forEach(el => el.classList.remove('show'));
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

// sd2 + box1~4 모두 적용
observeAndReveal('.sd2');
observeAndReveal('.box1, .box2, .box3, .box4');
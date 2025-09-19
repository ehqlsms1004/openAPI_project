//   document.querySelectorAll('.qnabox ul li').forEach(function(item) {
//     item.addEventListener('click', function() {
//       this.classList.toggle('active');
//     });
//   });
//  // 모든 질문(Q)을 찾아서 이벤트 등록
//   document.querySelectorAll('.qnabox ul li .Q').forEach(function(q) {
//     q.addEventListener('click', function() {
//       const li = this.parentElement; // 클릭된 Q의 부모 li
//       li.classList.toggle('active');
//     });
//   });
document.querySelectorAll('.qnabox ul li .Q').forEach(function(q) {
  q.addEventListener('click', function() {
    const li = this.closest('li'); // Q의 부모 li 찾기
    li.classList.toggle('active');
  });
});
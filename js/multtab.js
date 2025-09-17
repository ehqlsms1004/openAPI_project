// const tabItems = document.querySelectorAll('.tab_item');
// const tabs = document.querySelectorAll('.audiobook-section');

// tabItems.forEach((tab, i) => {
//     tab.addEventListener('click', () => {
//         // toggle active
//         // if ( !클릭한 a에 class active 있다 ) {
//         //     // active 추가하기
//         // } else {
//         //     // 클릭한 a에 class active 없으면 active 추가
//         // 

       
//         // 탭에 해당하는 리스트 보이고, 나머지는 숨기기`
//         tabs.forEach((tab, j) => {
            
            
//             tab.style.display = (i === j) ? 'flex' : 'none';
//         });
//     });
// });



// const days = document.querySelectorAll('.tab_item');

// days.forEach(div => {
//   div.addEventListener('click', () => {
//     days.forEach(d => d.classList.remove('active'));
//     div.classList.add('active');
//   });
// });



const tabItems = document.querySelectorAll('.tab_item');
const tabs = document.querySelectorAll('.audiobook-section');

tabItems.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    // 모든 탭에서 active 제거
    tabItems.forEach(item => item.classList.remove('active'));
    // 현재 클릭한 탭에 active 추가
    tab.classList.add('active');

    // 탭에 해당하는 콘텐츠 보이고 나머지는 숨기기
    tabs.forEach((section, j) => {
      section.style.display = (i === j) ? 'grid' : 'none';
    });
  });
});
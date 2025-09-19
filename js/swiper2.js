// var swiper2 = new Swiper(".mySwiper.viewerswiper", {
//   pagination: {
//     el: ".sb88",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<button class="sb82' + className + '">' + (index + 1) + "</button>";
//     },
//   },
//   on: {
//     slideChange: function () {
//       let idx = this.activeIndex;
//       console.log(idx);
//       $('.swiper-text-wrap2.swiper-text').eq(idx).fadeIn().siblings().hide();
//     },
//   },
// });

// // 밀리뷰어 Swiper
// var viewerSwiper = new Swiper(".mySwiper.viewerswiper", {
//   pagination: {
//     el: ".sb88",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<button class="sb82 ' + className + '">' + (index + 1) + '</button>';
//     },
//   },
//   on: {
//     slideChange: function () {
//       let idx = this.activeIndex;
//       $(".swiper-text-wrap2 .swiper-text").eq(idx).fadeIn().siblings().hide();
//     },
//   },
// });

$(document).ready(function(){
  var viewerSwiper = new Swiper(".mySwiper.viewerswiper", {
    pagination: {
      el: ".sb88",
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class="sb82 ' + className + '">' + (index + 1) + '</button>';
      },
    },
    on: {
      slideChange: function () {
        let idx = this.activeIndex;
        $(".swiper-text-wrap2 .swiper-text").eq(idx).fadeIn().siblings().hide();
      },
    },
  });
});


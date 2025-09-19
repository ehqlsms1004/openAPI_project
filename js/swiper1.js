// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".sb8",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<button class="sb81 ' + className + '">' + (index + 1) + '</button>';
//     },
//   },
//   on: {
//     slideChange: function () {
//       let idx = this.activeIndex;
//       console.log(idx);
//       $('.swiper-text-wrap .swiper-text').eq(idx).fadeIn().siblings().hide();
//     },
//   },
// });
var audiobookSwiper = new Swiper(".mySwiper.audiobookswiper", {
  pagination: {
    el: ".sb8",
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="sb81 ' + className + '">' + (index + 1) + '</button>';
    },
  },
  on: {
    slideChange: function () {
      let idx = this.activeIndex;
      $(".swiper-text-wrap .swiper-text").eq(idx).fadeIn().siblings().hide();
    },
  },
});
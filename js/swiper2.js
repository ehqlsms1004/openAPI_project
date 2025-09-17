var swiper2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".sb88",
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="sb82' + className + '">' + (index + 1) + "</button>";
    },
  },
  on: {
    slideChange: function () {
      let idx = this.activeIndex;
      console.log(idx);
      $('.swiper-text-wrap2.swiper-text').eq(idx).fadeIn().siblings().hide();
    },
  },
});
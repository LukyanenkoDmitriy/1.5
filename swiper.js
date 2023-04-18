const swiper = new Swiper('.swiper', {

    direction: 'horizontal',

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesOffsetBefore: 15,

    slidesPerView: "auto",
    spaceBetween: 15,
    slidesToShow: 3,
});
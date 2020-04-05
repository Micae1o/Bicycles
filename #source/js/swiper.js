

$(document).ready(function () {
    let mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 100,
        autoHeight: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
})

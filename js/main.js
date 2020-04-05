


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

let burger = document.querySelector('.ham');
let burgerMain = document.querySelector('.burger');
let menu = document.querySelector('.menu__body');
const body = document.body;

let links = document.querySelectorAll('.menu__link');

// Бургер меню
burger.onclick = function () {
    burger.classList.toggle('active');
    burgerMain.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            burger.classList.remove('active');
            burgerMain.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        }
    }

}


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


let burger = document.querySelector('.ham');
let burgerMain = document.querySelector('.burger');
let menu = document.querySelector('.menu__body');
const body = document.body;

let links = document.querySelectorAll('.header__link');

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
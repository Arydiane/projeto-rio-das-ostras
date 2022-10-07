// exibe e oculta o menu hamburguer
const btnMenu = document.querySelector('.header__menu-hamburger')
const menu = document.querySelector('.header__navbar')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('header__navbar--ativo')
})

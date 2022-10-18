// exibe e oculta o menu hamburguer
const btnMenu = document.querySelector('.header__menu-hamburger')
const menu = document.querySelector('.header__navbar--menu-hamburguer')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('header__menu-hamburguer--ativo')
})

menu.addEventListener('click', () => {
    menu.classList.remove('header__menu-hamburguer--ativo')
})

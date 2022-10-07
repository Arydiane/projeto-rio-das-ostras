const btnMenu = document.querySelector('.header__menu-hamburger')
const btnTheme = document.querySelector('.header__button-theme')
const menu = document.querySelector('.header__navbar')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('header__navbar--ativo')
})

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})



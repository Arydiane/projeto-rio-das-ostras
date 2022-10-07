// faz a troca de tema da página
const btnTheme = document.querySelector('.header__button-theme')
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})
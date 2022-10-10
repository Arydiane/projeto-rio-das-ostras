// faz a troca de tema da página
const btnTheme = document.querySelector('.header__button-theme')
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    const imgBtnTheme =  btnTheme.firstElementChild.innerHTML
    //alterna a imagem do botão de tema
    if ( imgBtnTheme == "dark_mode") {
        btnTheme.firstElementChild.innerHTML = "light_mode"
    } else {
        btnTheme.firstElementChild.innerHTML = "dark_mode"
    }
})
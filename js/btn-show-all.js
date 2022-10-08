const btnShowAll = document.querySelector('.beaches__button--show-all') 
const sectionBeaches = document.querySelector('.section__beaches')

btnShowAll.addEventListener('click', () => {
    sectionBeaches.classList.toggle('section__beaches--show-all')
    if (btnShowAll.textContent == 'Ver tudo') {
        btnShowAll.textContent = 'Ocultar'
    } else {
        btnShowAll.textContent = 'Ver tudo'
    }
})
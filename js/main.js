import "./menu-hamburger.js";
import "./toggle-theme.js";
import "./back-top-top.js";

const beachContainer = document.querySelector('.beaches__container')
let beaches = []

//lê o arquivo json com dados
async function getListsBeaches(){
    const fetchResponse  =  await fetch("../listsBeaches.json")
    const results = await fetchResponse.json()
    return results
}

// carrega as imagens da seção praias dinamicamente
window.onload =  async function() {
    beaches = await getListsBeaches()
    beaches.forEach(beach => renderBeach(beach))
}

function renderBeach(beach) {

    const beachElement = document.createElement('figure')
    beachElement.classList.add('beach__container')
    beachContainer.appendChild(beachElement)

    const beachImage = document.createElement('img')
    beachImage.classList.add('beach__image')
    beachImage.src = `../images/${beach.imagem}`
    beachImage.alt = `Foto da ${beach.nome}`
    beachElement.appendChild(beachImage)

    const beachLegend = document.createElement('figcaption')
    beachLegend.classList.add('beach__legend')
    beachLegend.textContent = beach.nome
    beachElement.appendChild(beachLegend)

}

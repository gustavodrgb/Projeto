function toggleMode() {
    const html = document.documentElement
// Fazer a troca de tema
html.classList.toggle('light')

const Image = document.querySelector("#profile img")

if(html.classList.contains('light')) {
    // adicionar imagem de tema branco
    Image.setAttribute('src', './assets/avatar-light.png')
} else {
    // adicionar imagem de tema preto
    Image.setAttribute('src', './assets/avatar.png')
    }
}

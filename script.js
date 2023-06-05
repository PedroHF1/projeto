function toggleMode() {
    const html = document.documentElement
    //troca o modo
    html.classList.toggle('light')
    //pega a imagem
    const img = document.querySelector(".profile img")
    //troca a imagem 
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar2.png' )
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}
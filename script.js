function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //trocar imagem
    const img = document.querySelector('#profile img') 
     if(html.classList.contains('light')) {
        img.setAttribute('src', 'images/avatar-light.png')
     } else {
        img.setAttribute('src', 'images/avatar-dark.png')
     }
}
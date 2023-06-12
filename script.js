function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar img light
    img.setAttribute("src", "./assets/euulight.jpg")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/eu.jpg")
  }
}

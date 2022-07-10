const documento = document

documento.addEventListener("DOMContentLoaded", () => {
    const botonMenu = documento.querySelector(".btn-menu")

    botonMenu.addEventListener("click", e => {
        const elementos = documento.querySelector("ul")

        elementos.classList.toggle("show")
    })
})
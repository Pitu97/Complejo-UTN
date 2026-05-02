const imagenes=document.querySelector("#img-carrusel")
const botonAnterior=document.querySelector("#boton-anterior")
const botonSiguiente=document.querySelector("#boton-siguiente")
const total = imagenes.children.length;
const visibles = 3; 

let actual = 0;

function moverCarrusel() {
    const desplazamiento = actual * 600;
    imagenes.style.transform = `translateX(-${desplazamiento}px)`;
}

botonSiguiente.addEventListener("click", () => {
    if (actual < total - visibles) {
        actual++;
    } else {
        actual = 0;
    }
    moverCarrusel();
});

botonAnterior.addEventListener("click", () => {
    if (actual > 0) {
        actual--;
    } else {
        actual = total - visibles;
    }
    moverCarrusel();
});






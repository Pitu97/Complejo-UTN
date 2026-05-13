const imagenes=document.querySelector("#img-carrusel")
const botonAnterior=document.querySelector("#boton-anterior")
const botonSiguiente=document.querySelector("#boton-siguiente")
const total = imagenes.children.length;
const visibles = 3; 

let actual = 0;
function moverCarrusel() {
    // Obtenemos el ancho actual de la primera imagen
    const anchoImagen = imagenes.children[0].clientWidth;
    const gap = 20; // El gap que definiste en el CSS

    // Calculamos el desplazamiento dinámicamente
    const desplazamiento = actual * (anchoImagen + gap);

    imagenes.style.transform = `translateX(-${desplazamiento}px)`;
}
/*
function moverCarrusel() {
    const anchoImagen = imagenes.children[0].clientWidth;
    const gap = 20;

    const desplazamiento = actual * (anchoImagen + gap);

    imagenes.style.transform = `translateX(-${desplazamiento}px)`;
}
 */

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


const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach((pregunta) => {
    const item = pregunta.querySelector(".preg");
    const resp = pregunta.querySelector(".resp");

    item.addEventListener("click", () => {
        pregunta.classList.toggle("activo");

        if(pregunta.classList.contains("activo")) {
            resp.style.maxHeight = resp.scrollHeight + "px";
        } else {
            resp.style.maxHeight = 0;
        }
    });
});

const mode = document.getElementById("mode"); 

mode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modo", "dark-mode");
    }
    else{
        localStorage.setItem("modo", "light-mode");
    }
});

if(localStorage.getItem("modo") === "dark-mode"){
    document.body.classList.toggle("dark-mode")
}
else{
    document.body.classList.remove("dark-mode");
}

const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});





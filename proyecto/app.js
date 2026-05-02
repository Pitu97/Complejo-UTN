const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach((pregunta) => {
    const item = pregunta.querySelector(".preg");

    item.addEventListener("click", () => {
        pregunta.classList.toggle("activo");
    });
});
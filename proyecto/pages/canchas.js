window.addEventListener("load", () => {
    const carruseles = document.querySelectorAll(".carr");

    carruseles.forEach((carrusel) => {
        const track = carrusel.querySelector(".track");
        track.innerHTML += track.innerHTML;

        const images = track.querySelectorAll("img");

        let index = 0;
        const visibles = 3;

        const estilo = getComputedStyle(track);
        const gap = parseInt(estilo.gap) || 0;  

        const ancho = images[0].getBoundingClientRect().width

        function mover() {
            index++;

            const desplazamiento = index * (ancho + gap);

            track.style.transition = "transform 1s ease-in-out";
            track.style.transform = `translateX(-${desplazamiento}px)`;

            if (index >= images.length / 2) {
                setTimeout(() => {
                    track.style.transition = "none";
                    index = 0;
                    track.style.transform = `translateX(0px)`;
                }, 500);
            }
        }

        const delay = 6000 + Math.random() * 1000;

        setTimeout(() => {
            setInterval(mover, delay);
        }, Math.random() * 2000);
    });
});



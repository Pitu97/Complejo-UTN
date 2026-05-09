function cargarreservas() {
    document.querySelectorAll('.bloque-reserva').forEach(b => b.remove());

    const reservas = JSON.parse(localStorage.getItem('misreservas')) || [];

    reservas.forEach(res => {
        const contenedor = document.getElementById(`cancha-${res.canchaid}`);
        if (contenedor) {
            const bloque = document.createElement('div');
            bloque.className = 'bloque-reserva';
            
            const inicio = parseInt(res.hora) - 7;
            bloque.style.gridColumn = `${inicio} / span ${res.duracion}`;
                        
            contenedor.appendChild(bloque);
        }
    });
}

function confirmarreserva() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (!usuario) {
        alert("Debes iniciar sesión para reservar");
        window.location.href = 'registros.html';
        return; 
    }

    const canchaid = parseInt(document.getElementById('select-cancha').value);
    const horainicio = document.getElementById('select-hora').value;
    const duracion = parseInt(document.getElementById('select-duracion').value);

    let reservas = JSON.parse(localStorage.getItem('misreservas')) || [];

    const superposicion = reservas.find(res => 
        res.canchaid === canchaid && 
        res.hora === horainicio
    );

    if (superposicion) {
        alert("Error: Ese horario ya está ocupado");
        return;
    }

    const nuevaReserva = {
        canchaid: canchaid,
        hora: horainicio,
        duracion: duracion,
    };

    reservas.push(nuevaReserva);
    localStorage.setItem('misreservas', JSON.stringify(reservas));

    alert("Reserva guardada correctamente");
    cargarreservas();
}

window.onload = () => {
    cargarreservas();

    document.getElementById('btn-confirmar').addEventListener('click', confirmarreserva);
};

const mode = document.getElementById("mode");

mode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
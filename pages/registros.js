const modalOverlay = document.getElementById("modal-overlay");
const modalText = document.getElementById("modal-text");
const cerrarModal = document.getElementById("cerrar-modal");

function mostrarModal(mensaje, accion = null) {
    modalText.textContent = mensaje;
    modalOverlay.style.display = "flex";
    cerrarModal.onclick = () => {
        modalOverlay.style.display = "none";
        if (accion) {
            accion();
        }
    };
}

cerrarModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

const regContainer = document.getElementById("sign-up");
const logContainer = document.getElementById("login");
const userContainer = document.getElementById("user_page");

const usuario = JSON.parse(localStorage.getItem("usuario"));
const logueado = localStorage.getItem("logueado");

if (!usuario) {
    regContainer.style.display = "block";
    logContainer.style.display = "none";
    userContainer.style.display = "none";
} else if (usuario && !logueado) {
    regContainer.style.display = "none";
    logContainer.style.display = "block";
    userContainer.style.display = "none";
} else {
    regContainer.style.display = "none";
    logContainer.style.display = "none";
    userContainer.style.display = "block";
}

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const telefonoInput = document.getElementById("telefono");
const correoRInput = document.getElementById("correo-r");
const passRInput = document.getElementById("contraseña-r");

function mostrarError(input, mensaje) {
    const error = input.nextElementSibling;
    error.textContent = mensaje;
    input.classList.add("input-error");
    input.classList.remove("input-correcto");
}

function mostrarCorrecto(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
    input.classList.remove("input-error");
    input.classList.add("input-correcto");
}

nombreInput.addEventListener("input", () => {
    if (nombreInput.value.trim().length < 3) {
        mostrarError(nombreInput, "El nombre debe tener al menos 3 caracteres");
    } else {
        mostrarCorrecto(nombreInput);
    }
});

apellidoInput.addEventListener("input", () => {
    if (apellidoInput.value.trim().length < 3) {
        mostrarError(apellidoInput, "El apellido debe tener al menos 3 caracteres");
    } else {
        mostrarCorrecto(apellidoInput);
    }
});

telefonoInput.addEventListener("input", () => {
    const telefono = telefonoInput.value.trim();

    if (!/^\d+$/.test(telefono)) {
        mostrarError(telefonoInput, "Solo se permiten números");
    } else if (telefono.length < 8) {
        mostrarError(telefonoInput, "Telefono demasiado corto");
    } else {
        mostrarCorrecto(telefonoInput);
    }
});

correoRInput.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(correoRInput.value.trim())) {
        mostrarError(correoRInput, "Correo inválido");
    } else {
        mostrarCorrecto(correoRInput);
    }
});

passRInput.addEventListener("input", () => {
    if (passRInput.value.length < 4) {
        mostrarError(passRInput, "La contraseña debe tener al menos 4 caracteres");
    } else {
        mostrarCorrecto(passRInput);
    }
});

const registro = document.querySelector("#sign-up form");

registro.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nombreInput.value.trim().length < 3 ||
        apellidoInput.value.trim().length < 3 ||
        telefonoInput.value.trim().length < 8 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoRInput.value.trim()) ||
        passRInput.value.length < 4) {
        mostrarModal("Completa correctamente todos los campos");
        return;
    }

    const usuario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        telefono: telefonoInput.value,
        mail: correoRInput.value,
        contraseña: passRInput.value
    };
   
    mostrarModal("Usuario registrado", () => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        location.reload();
    });
});

const correoLogin = document.getElementById("correo");
const passLogin = document.getElementById("contraseña");

correoLogin.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(correoLogin.value.trim())) {
        correoLogin.classList.add("input-error");
        correoLogin.classList.remove("input-correcto");
    } else {
        correoLogin.classList.remove("input-error");
        correoLogin.classList.add("input-correcto");
    }
});

passLogin.addEventListener("input", () => {
    if (passLogin.value.length < 1) {
        passLogin.classList.add("input-error");
        passLogin.classList.remove("input-correcto");
    } else {
        passLogin.classList.remove("input-error");
        passLogin.classList.add("input-correcto");
    }
});

const login = document.querySelector("#login form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = correoLogin.value.trim();
    const pass = passLogin.value.trim();
    const logueadoUser = JSON.parse(localStorage.getItem("usuario"));
    if (!logueadoUser) {
        mostrarModal("No hay usuarios registrados");
        return;
    }
    if (correo === logueadoUser.mail && pass === logueadoUser.contraseña) {
        mostrarModal("Usuario Encontrado", () => {
            localStorage.setItem("logueado", "true");
            location.reload();
        });
    } else {
        mostrarModal("Correo o contraseña incorrectos");
    }
});

const nom_u = document.querySelector("#nombre-u");
const corr_u = document.querySelector("#correo-u");
const tel_u = document.querySelector("#telefono-u");
const res_g = document.querySelector("#lista-reservas");

let reservas = JSON.parse(localStorage.getItem("misreservas")) || [];

function mostrarReservas() {
    res_g.innerHTML = "";
    reservas.forEach((reserva, index) => {
        const li = document.createElement("li");
        li.textContent = `Cancha ${reserva.canchaid} - ${reserva.hora}:00 hs`;
        
        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.classList.add("eliminar");
        eliminar.dataset.index = index;

        li.appendChild(eliminar);
        res_g.appendChild(li);
    })
}

if(usuario && logueado) {
    nom_u.textContent = usuario.nombre + " " + usuario.apellido;
    corr_u.innerHTML = `<strong>Correo:</strong> ${usuario.mail}`;
    tel_u.innerHTML = `<strong>Telefono:</strong> ${usuario.telefono}`
    mostrarReservas();
}

res_g.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        const index = e.target.dataset.index;
        reservas.splice(index, 1);
        localStorage.setItem("misreservas", JSON.stringify(reservas));
        mostrarReservas();
    }
})

const reserva = document.querySelector("#res");
reserva.addEventListener("click", () => {
    window.location.href = "reservas.html";
});

const cerrar = document.querySelector("#cerrar");
cerrar.addEventListener("click", () => {
    mostrarModal("Sesion Cerrada", () => {
       localStorage.removeItem("logueado");
        location.reload(); 
    });
});

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click", () => {
    mostrarModal("Usuario Borrado", () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("logueado");
        localStorage.removeItem("misreservas");
        location.reload();
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







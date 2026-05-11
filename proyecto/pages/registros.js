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

const registro = document.querySelector("#sign-up form");

registro.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = registro.querySelector("#nombre").value;
    const apellido = registro.querySelector("#apellido").value;
    const telefono = registro.querySelector("#telefono").value;
    const mail = registro.querySelector("#correo-r").value;
    const contraseña = registro.querySelector("#contraseña-r").value;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        mail: mail,
        contraseña: contraseña
    }

    alert("Usuario registrado");

    const registrado = JSON.stringify(usuario);
    localStorage.setItem("usuario", registrado);
    location.reload();
});

const login = document.querySelector("#login form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = login.querySelector("#correo").value;
    const pass = login.querySelector("#contraseña").value;
    const logueadoUser = JSON.parse(localStorage.getItem("usuario"));

    if (correo === logueadoUser.mail && pass === logueadoUser.contraseña) {
        alert("Usuario Encontrado");
        localStorage.setItem("logueado", "true");
        location.reload();
    } else {
        alert("Usuario no encontrado");
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
    alert("Sesion Cerrada");
    localStorage.removeItem("logueado");
    location.reload();
});

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click", () => {
    alert("Usuario Borrado");
    localStorage.removeItem("usuario");
    localStorage.removeItem("logueado");
    localStorage.removeItem("misreservas");
    location.reload();
})


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








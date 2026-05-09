const regContainer = document.querySelector("#sing-up");
const logContainer = document.querySelector("#login");

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
});

const login = document.querySelector("#login form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = login.querySelector("#correo").value;
    const pass = login.querySelector("#contraseña").value;
    const logueado = JSON.parse(localStorage.getItem("usuario"));

    if (correo === logueado.mail && pass === logueado.contraseña) {
            alert("Usuario Encontrado");
            console.log(logueado);
        }
});
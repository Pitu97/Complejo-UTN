const registro = document.querySelector("#sign-up form");

let id = 0;

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
    localStorage.setItem(`usuario${id}`, registrado);
    id++;
});

const login = document.querySelector("#login form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = login.querySelector("#correo").value;
    const pass = login.querySelector("#contraseña").value;

    for (let i = 0; i < localStorage.length; i++) {
        const logueado = JSON.parse(localStorage.getItem(`usuario${i}`));
        if (correo === logueado.mail && pass === logueado.contraseña) {
            alert("Usuario Encontrado");
            console.log(logueado);
        }    
    }
});
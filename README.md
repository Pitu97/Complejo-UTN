# Complejo-UTN - Gestion de Reservas Deportivas

Descripcion
Este proyecto es una plataforma web para un complejo deportivo integral. Permite a los usuarios conocer las instalaciones, visualizar la ubicacion de las diferentes canchas (Futbol 5,7 y 11, Tenis y Basquet) a traves de un mapa interactivo y gestionar sus reservas.
El sitio fue diseñado pensado para la comunidad deportiva de Rosario, ofreciendo una interfaz clara y funcional.

Tecnologias utilizadas
HTML: Organizacion de la pagina, incluyendo el mapa del complejo, formularios de contacto y la estructura de las secciones.

CSS: Estilo personalizados, diseño responsivo y posicionamiento de elementos (como los puntos informativos sobre el plano del complejo).

JAVASCRIPT: 
-Logica del carrusel de imagenes interactivo.
-Sistema de acordeon para la seccion de preguntas frecuentes.
-Gestion del menu Burger para dispositivos moviles.
-Funcionalidad de Modo claro/oscuro.
-Spinner para simular la carga de la pagina.


Estructura del proyecto

/proyecto
├── index.html          # Página principal del complejo.
├── /css
│   └── styles.css      # Todos los estilos de la web.
├── /js
│   └── app.js          # Lógica del carrusel, acordeón y modo oscuro, spinner de carga.
├── /assets             #Recursos estaticos del sitio
|    └── /img            #Subcarpetas para todas las imagenes y capturas.
│        ├── ![vista-movil](/img.readme/vista-movil.png) # Fondo de bienvenida móvil
│        ├── ![vista-general](/img.readme/vista-general.png) # Fondo de bienvenida escritorio
│        ├── ![carrusel](/img.readme/carrusel.png) # Carrusel y acordeón
│        ├── ![mapa-interactivo](/img.readme/mapa-interactivo.png) # Mapa interactivo
│        ├── ![reservas](/img.readme/reservas.png)  # Panel de reservas (reservas)
│        └── ![reservas-registradas](/img.readme/reservas-registradas.png) # Formulario de reserva
|         └── ![modo-oscuro](/img.readme/modo-oscuro.png) # Modo oscuro.
├──/pages #Secciones secundarias (canchas, reservas, etc.)
|   ├── canchas.html
|   ├── registro.html
|   └── reservas.html
└── README.md  # Este archivo

Caracteristicas principales 
-Mapa interactivo: Localizacion visual de cada cancha y servicios (baños, cantina) sobre el plano  del predio.

-Seccion de FAQ: Acordeon interactivo para resolver dudas comunes de los usuarios.

-Diseño Full-Responsive: Navegacion adaptada para celulares mediante un menu lateral desplegable.

-Carrusel Dinamico: Galeria de fotos de las instalaciones con controles de navegacion.

Instalacion y uso
1. Descarga: Descarga los archivos o clona el repositorio desde GitHub.
2. Entorno: Abre la carpeta del proyecto en Visual Studio Code.
3. Ejecucion: Haz clic derecho sobre index.html y selecciona "Open with Live Server" para ver la pagina con actualizaciones en tiempo real.


Alumnos 
-Facundo Nuñez - [pitu97]
-Natalia Ali - [natalia915]
-Ramiro Pedoto - [ramipedoto]
-Facundo Clerici - [facu2006-eng]
-Juliana Molina - [juliimol23]


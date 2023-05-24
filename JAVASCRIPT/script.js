let menuVisible = false;

/* Se han declarado las variables nav, habilidades y clasesHabilidades fuera de las funciones para evitar su creación repetida cada vez que se llaman las funciones. */
const nav = document.getElementById('nav');
const habilidades = document.getElementsByClassName('progreso');

/* Se ha creado un array clasesHabilidades que contiene las clases CSS correspondientes a cada habilidad. Esto evita repetir código y facilita la adición de nuevas habilidades en el futuro. */
const clasesHabilidades = [
    'javascript',
    'htmlcss',
    'photoshop',
    'wordpress',
    'drupal',
    'comunicacion',
    'trabajoenequipo',
    'creatividad',
    'dedicacion',
    'proyectmanagement'
];

/* Creamos al funcion que oculta o muestra el menu de navegacion, Se ha cambiado el enfoque de ocultar y mostrar el menú mediante el uso de las clases classList.add() y classList.remove(). Esto evita tener que establecer manualmente las clases en cada caso. */
function mostrarOcultarMenu() {
    if (menuVisible) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    }
    menuVisible = !menuVisible;
}

function seleccionar() {
    /* Ocultamos el meni una vez que se selecciona una opcion */
    nav.classList.remove('responsive');
    menuVisible = false;
}

/* Creamos la funcion que aplica las animaciones de las barras de progreso de las habilidades */
function aplicarAnimacionesHabilidades() {
    const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    /* Se ha utilizado un bucle for para recorrer el array habilidades y agregar las clases correspondientes a cada elemento. */
    if (distanciaSkills >= 300) {
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(clasesHabilidades[i]);
        }
    }
}
/* Detectamos el scrolling para aplicar la animacion de la barra de habilidades */
window.onscroll = function () {
    aplicarAnimacionesHabilidades();
};

console.log(document);
console.log(document.title);

let tituloPrincipal = document.getElementsByTagName("h1")[0]; //busca elemento por tag/etiqueta
tituloPrincipal.style.backgroundColor = "#303030";
tituloPrincipal.innerText = "Learn JavaScript";

// traigo del HTML el header con ID 'menu'
let header = document.getElementById("menu");
// traigo con query selector el container NAV
let nav = document.querySelector("nav");
// si creo el nav con createElement lo declaro como hijo con appendChild
// header.appendChild(nav);
// le doy una clase 'nav' para utilizarla en css si es que la necesito
nav.className = "nav";
// innerHTML para agregar codigo HTML dentro de nav... importante las backticks !
nav.innerHTML += `
            <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" class="logo" alt="logo">
            </a>
            <ul>
                <li><a href="">Basics</a></li>
                <li><a href="">Operadores</a></li>
                <li><a href="">OpLogicos</a></li>
                <li><a href="">Comparacion</a></li>
                <li><a href="">Condicionales</a></li>
                <li><a href="">Metodos</a></li>
                <li><a href="">Loops</a></li>
                <li><a href="">Funciones</a></li>
                <li><a href="">DOM</a></li>
            </ul> `;

let contenedor = document.getElementById("div-wrapper");
let section = document.createElement("section");
section.className = "servicios";
contenedor.appendChild(section);
section.innerHTML += `<div class="titulo-servicios">
    <h2>Introduccion a JavaScript</h2>
    <p>Lenguaje de programacion para ser incluido en una app y hacerlo interactivo</p>
    </div>
<div class="tipo-servicios">
<div>
    <i class="fas fa-drafting-compass"></i>
    <h3>Diseño Multimedia</h3>
    <p>
        Crear, modificar, controlar o animar
    </p>
</div>
<div>
    <i class="fas fa-laptop"></i>
    <h3>Desarrollo WEB</h3>
    <p>
        Escribir contenido de página dinámicamente
    </p>
</div>
<div>
<i class="fa-solid fa-wand-magic-sparkles"></i>
    <h3>Interacción</h3>
    <p>
        Manejar y administrar eventos de la aplicación
    </p>
</div>
</div>`;


let presentacion = document.getElementById('intro')
presentacion.innerText += 'Proyecto para refrescar y enseñar JS básico, y primera practica con SCSS'
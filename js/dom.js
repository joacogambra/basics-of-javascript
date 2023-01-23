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
                <li><a href="">Operadores Logicos</a></li>
                <li><a href="">Comparaciones</a></li>
                <li><a href="">Funciones</a></li>
            </ul> `;

let contenedor = document.getElementById("div-wrapper");
let section = document.createElement("section");
section.className = "servicios";
contenedor.appendChild(section);
section.innerHTML += `<div class="titulo-servicios">
    <h2>Creamos Experiencias Maravillosas Para Los Usuarios</h2>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci laudantium delectus nobis a molestiae amet eaque consequatur veritatis excepturi at.
    </p>
    </div>
<div class="tipo-servicios">
<div>
    <i class="fas fa-drafting-compass"></i>
    <h3>Diseño UX/UI</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, est.
    </p>
</div>
<div>
    <i class="fas fa-laptop"></i>
    <h3>Desarrollo WEB</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, est.
    </p>
</div>
<div>
    <i class="fas fa-cart-arrow-down"></i>
    <h3>Comercio Digital</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, est.
    </p>
</div>
</div>`;


let presentacion = document.getElementById('intro')
presentacion.innerText += 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis modi fugit temporibus porro atque, vel placeat impedit repellendus sint!'
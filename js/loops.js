// loops - bucles
// for - for in - while - do while

/* 
for (inicializacion, condicion, step) {
    body
}

inicializacion : se ejecuta una vez al entrar al loop
condicion: comprueba cada vez que entra al loop, si falla se detiene
step: despues del body en cada iteracion, pero antes de la verificacion de condicion

*/

for (let i = 0; i < 3; i = i + 1) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(8 * i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let frutas = ["anana", "peras", "kiwi", "manzana", "naranja", "frutilla"];
console.log(frutas.length); //longitud del array = 7
// i < frutas.length -> ultima iteracion 6 < 7, 6 es el ultimo index, ultima posicion osea frutilla y corta el bucle
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // [i] es la posicion en el array
}

// for in
// Bucle "for in" Javascript. Una alternativa al bucle for, para recorridos a propiedades de objetos en Javascript. Cómo iterar por las propiedades y los valores

for (let propiedad in objeto) {
  // código a repetir por el bucle.
  // dentro de este código la variable "propiedad" contiene la propiedad actual
  // actual en cada uno de los pasos de la iteración.
}

let diasMes = {
  enero: 31,
  febrero: 28,
  marzo: 31,
  abril: 30,
  mayo: 31,
};

let usuario = {
  name: "Jorge",
  age: 24,
  altura: 1.77,
  peso: "68kg",
  nacionalidad: "Argentina",
};

for (let mes in diasMes) {
  console.log(diasMes[mes]);
}

for (let dato in usuario){
    console.log(dato + ': ' + usuario[dato]);
}


// for of
// para iterar string o array
let iterable = [10, 20, 30, 40, 50];
let sumatoria = 0
// 'num' es la variable que tenemos que declarar, que es el elemento que va a contener la lista 
for (const num of iterable) {
    sumatoria += num
}
console.log(sumatoria);


//while
while(condicion){
    //codigo a ejecutar
    //paso a ejecutar despues del codigo
}

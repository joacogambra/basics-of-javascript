// condicionales
// if, if else, else if, switch

/* 
if(condicion){
    codigo a ejecutar si la condicion es verdadera
} else {
    ejecuta este otro codigo  si la condicion es falsa
}
*/

// devuelve siempre un booleano
if (5 < 10){ // true
    console.log('10 es mayor que 5'); // se ejecuta el if
}else {
    console.log('5 es mayor que 5');
}

if (15 < 10){ // false
    console.log('10 es mayor que 5'); 
}else {
    console.log('5 es mayor que 5'); // se ejecuta el else
}

// otro ejemplo pero con else if

let number = 0
if (number > 0){
    console.log(number + ' es positivo');
} else if (number < 0){
    console.log(number + ' es negativo');
}else {
    console.log(number + ' es 0');
}

let myAge = ''
if(myAge = 6){
    'voy a primer grado'
}else if(myAge = 7){
    'voy a segundo grado'
} else if (myAge = 8 ){
    'voy a tercer grado'
}else if (myAge <= 5 || myAge > 12 ){
    'no va al primario'
}else{
    'introduce un numero correcto'
}

// switch
// multiples caminos a una sola condicion
let color = 'azul'
switch(color){
    case 'rojo':
        console.log('color rojo');
        break
    case 'azul':
        console.log('color azul');
        break
    default: 
        console.log('not match color');
        break
}


// operadores de comparacion
// == , === , != , !== , < , > , <= , >=

const num1 = 10
const num2 = 5
const num3 = '5'

console.log(num2 == num3); // no es estricta, no se fija en el tipo de dato
console.log(num2 === num3); // estricta, da importancia al tipo

console.log(num2 != num3); // con != pregunta si es distinto a, no es estricta
console.log(num2 !==  num3); // 5 distinto a '5' , es estricta

//mayor que y menor que
console.log(20 > 40);
console.log(20 < 40);

//mayor e igual que
console.log(15 <= 20);
console.log(30 <= 30);
//menor e igual que
console.log(15 >= 20);
console.log(30 >= 30);
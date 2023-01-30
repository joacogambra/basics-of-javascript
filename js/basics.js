// tipos de variable
var messageVar = 'var pueden ser modificadas y re-declaradas'
let messageLet = 'las variables let pueden ser modificadas, pero no re-declaradas'
const messageConst = 'const no puede ser modificada ni re-declarada'
// el = como assignment operator, despues de este el value

// tipos de datos
let number = 123
let string = "string con comillas dobles"
let string2 = 'string con comillas simples'
let booleanT = true // verdadero
let booleanF = false // falso

let object = {
    tipo: 'especial',
    tiposDeDatosAnteriores: 'llamados primitivos',
    primitivos: 'porque pueden contener solo una cosa',
    objetos: 'coleccionan datos(valores) y entidades complejas',
    ejemplo: 1,
    puedenContenerBooleanos: true
}
console.log(object);
console.log(object.tipo);

let array = ['mas', 'de', 'un', 'valor', 'a', 'la', 'vez']
let array2 = [0, 2, 4, 6 ,8]
console.log(array[0]);
console.log(array2[3]);

/* tambien existen:
undefined = Una variable a la que no se le ha asignado un valor tiene el valor undefined.
null = El valor null representa intencionalmente un valor nulo o "vacío"
*/



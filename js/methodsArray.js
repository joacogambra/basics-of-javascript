let frutas = ['tomate','manzana','pera','sandia','frutilla']
let verduras = ['lechuga', 'papa', 'cebolla', 'zapallo']

// El método pop() elimina el último elemento
let fruta = frutas.pop()
console.log(fruta); // 'frutilla'

// El método push() agrega un nuevo elemento a una matriz (al final):
verduras.push('batata') //agrega a la ultima posicion
console.log(verduras);

// El método shift() elimina el primer elemento de la matriz y "cambia" todos los demás elementos a un índice más bajo.
let fruta2 = frutas.shift()
console.log(fruta2); // 'tomate'

// El método unshift() agrega un nuevo elemento a una matriz (al principio) y "desplaza" los elementos más antiguos
verduras.unshift('espinaca')
console.log(verduras);

// El concat() crea una nueva matriz fusionando (concatenando) matrices existentes
const latam = ['Argentina','Uruguay', 'Brasil']
const north = ['EEUU', 'Mexico', 'Canada']
// la guardo en una nueva variable sin modificar las otras
const america = latam.concat(north)
console.log(america);

// El join() también une todos los elementos de la matriz en una cadena,
//pero especifica el separador

frutas.join(' - ')
console.log(frutas);

// splice y slice
// Slice se usa para cortar un trozo del codigo.

let users = ["Mirko", "Joaco", "Lucas", "Jeremias", "Nicolas", "Ignacio"]
console.log(users.slice(2,4)); // Cortaria al usuario en la posicion 2 3 y el 4 lo expluye, osea sacaria a Lucas y Jeremias

// Splice se usa para empalmar codigo.

let mods = ["Matias", "Pedro", "Thiago", "Ivan", "Tomas"]
mods.splice(5,6, "Jaime", "Brian") // Tambien se puede usar para reemplazar, si huiera puesto 3, 4, se hubieran ubicado en el lugar de Ivan y Tomas.
console.log(mods)

/* El includes() devuelve true si una cadena contiene una cadena especificada. De lo contrario vuelve false.
El includes()método distingue entre mayúsculas y minúsculas. */

let resultado = frutas.includes('limon') //devuelve true o false
console.log(resultado);

// El indexOf() devuelve la posición de la primera aparición de un valor en una cadena
let resultado2 = frutas.indexOf('limon')
console.log(resultado2); // devuelve -1 porque no esta
let resultado3 = frutas.indexOf('sandia')
console.log(resultado3);


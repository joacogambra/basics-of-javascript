//Funciones anonimas y flecha, ambas pueden recibir parametros

// anonima = no poseen nombre, no la podemos llamar en cualquier momento, se ejecutan en el momento de ser definidas
(function(){
    console.log('funcion anonima')
}())

//flecha =  para reducir sintaxis, se utiliza tanto en nombradas como anonimas(puede o no tener nombre)
const flecha = () => {
    console.log('funcion flecha')
}

// funcion dentro de un objeto

const gato = {
    nombre: 'Kirito',
    color: 'Naranja',
    caminar:function (){
        console.log(`${this.nombre} empezo a caminar`)
    },
}

const perro = {
    nombre: 'Lola',
    color: 'Blanco',
    pasear: () =>{
        console.log(`${this.nombre} puede pasear los viernes`)
        // aca no se veria como la funcion normal
        // el this seria para Window (global)
    }
}

gato.caminar()
perro.pasear()








nombres.forEach((value) => console.log(value))
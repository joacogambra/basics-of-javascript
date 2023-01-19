function nombreDeLaFuncion (parametros){
    // codigo a ejecutar    
}

nombreDeLaFuncion(argumentos)

// example
let ten = 10
let five = 5
//declaracion de la funcion
function sumarNumeros(num1, num2){
    let suma = num1 + num2
    console.log(suma);
}
// llamada de la funcion
sumarNumeros(ten,five)
sumarNumeros(3,5)
sumarNumeros(20,40)

let cafe = ['cafe', 'leche', 'azucar']
let te  = ['agua','saco','azucar']

function preparacion(test1){
    let dentroTaza = test1
    if(dentroTaza === cafe){
        console.log('hiciste un cafe')
    }else if(dentroTaza === te){
        console.log('hiciste un te');
    }else{
        console.log('no hiciste ni te, ni cafe');
    }
}

preparacion(cafe)
preparacion(te)

function mostrar(res){
    console.log(res)
}
function calculos(param1, param2, param3){
    let a = param1
    let b = param2
    let result = a + b
    return mostrar(result)
}
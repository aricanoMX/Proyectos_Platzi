// CLASE 19 ARRAYS, LO QUE PERMITEN LOS ARRAYS ES ALMACENAR CIERTO TIPO E LETRAS EN UN ARREGLO, STRING O FUNCIONES DENTRO DE UNA COLECCION

var milca = {
    nombre: 'Milca',
    apellido: 'Tolentino',
    altura: 1.55,
    cantidadDeLibros: 40
}
var daily = {
    nombre: 'Daily',
    apellido: 'Tolentino',
    altura: 1.60,
    cantidadDeLibros: 30
}
var sharis = {
    nombre: 'Sharis',
    apellido: 'Tolentino',
    altura: 1.65,
    cantidadDeLibros: 20
}
var anguie = {
    nombre: 'Anguie',
    apellido: 'Tolentino',
    altura: 1.25,
    cantidadDeLibros: 5
}
var ximena = {
    nombre: 'Ximena',
    apellido: 'Ricaño',
    altura: 1.60,
    cantidadDeLibros: 10
}
var andres = {
    nombre: 'Andés',
    apellido: 'Ricaño',
    altura: 1.75,
    cantidadDeLibros: 5
}

// for (var i = 0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura} mts`)
// }


//  clase 20 FILTRAR ELEMENTOS DESDE UN ARRAY con la función filter que siempe nos devuelve el mismo array

const esAlta = ({ altura }) => altura >= 1.75 // Asi de desglosa un array
const esBaja = ({ altura }) => altura < 1.70

var personas = [milca, daily, sharis, anguie, ximena, andres]

console.log(personas)

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)


//CLASE 21 TRANSFORMAR UN ARRAY con la función map que siempre nos devuelve un nuevo array

// este nos va a devolver un array en donde moodificaremos cada uno de los elmentos del array

// vamos a pasar de metros a centimetros 

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})


//persona.altura = persona.altura * 100
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }



var peronasCms = personas.map(pasarAlturaACms)

console.log(peronasCms)

// para verificar si ambos arrays son o no iguales lo que vamos a hacer es compararlos con el === para ver esi son iguales 

// son objetos en memoria completamente distintos



// CLASE 22 FUNCIÓN REDUCE LO QUE HACE ES REDUCIR UN ARRAY EN UN VALOR UNICO

// Podriamos colocar 


// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
//}

// pero nooooo el chiste esta en usar reduce 

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

//const reducer = (acum,personas) {
//     return acum + persona.cantidadDeLibros
// }

// acá vamos a acupar el nombre del acumulador y el tamaño original del acumulador que es 0 
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
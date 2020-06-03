//  clase 11
var x = 4,
    y = '4'

var andres = {
    nombre: 'Andrés'
}

//  var milca = {
//      nombre: 'Andrés'
//  }

// var otraPersona = andres    // Acá hace iguala la referencia por lo cual ya se podria decir que son iguales 

var otraPersona = { // Esto va a dar false
    //  ...andres //  sirve para desglosar un onjeto  TAMBIEN SE LE LLAMA OBJETO LITERAL
    nombre: 'Pepe'
}

otraPersona = andres


//  CLASE 12

var milca = {
    nombre: 'Milca',
    apellido: 'tolentino',
    edad: 20,
    ingeniera: false,
    cocinera: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    biologa: true
}

var chikis = {
    nombre: 'Anguie',
    apellido: 'tolentino',
    edad: 8
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.biologa) {
        console.log('Biologa')
    } else {
        console.log('No es biologa')
    }
    if (persona.cocinera) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
}

imprimirProfesiones(milca)
console.log(' ')

//  ejercicio 
//  clase 13
//  clase 14

const MAYORIA_DE_EDAD = 18

//  const esMayorDeEdad = function(persona) => {
//      return persona.edad >= MAYORIA_DE_EDAD      //Este numero es un magic number, así le le llama lo que podemos hacer
//  }

//  ARROW FUNCTIONS 
//  CUANDO LA FUNCION SOLO RETORNA VALORES SE PUEDE OMITIR LAS LLAVES 


// ESTO QUE SE ESTA HACIENDO (ABAJO) AQUI SE LLAMA DESESTRUCTURACION, POR ESO LAS LLAVES
// ESTO ES IGUAL A ESTO: function (persona)
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
    //  AL PONER QUE EN LA FUNCION QUE LO UNICO QUE SE VA A RETORNAR VA A SER EL ATRIBUTO EDAD SE COLOCA DIRECTAMENTE 

const esMenorDeEdad = edad => !esMayorDeEdad(edad)

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} aun es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(milca)
imprimirSiEsMayorDeEdad(chikis)
console.log(' ')

function permitirAcceso(persona) {
    if (esMenorDeEdad(persona)) {
        console.log(`${persona.nombre} tiene el acceso denegado`)
    } else {
        console.log(`${persona.nombre} tiene el acceso permitido`)
    }
}

permitirAcceso(milca)
permitirAcceso(chikis)

//  EJERCICIO: escribir funcion si es menor de edad y retorne la negacion de la llamada es mayor de edad

//function imprimirSiEsMenorDeEdad(persona) {
//    if (!esMayorDeEdad(persona)) {
//        console.log(`${persona.nombre} aun es menor de edad.`)
//    }
//}

//  imprimirSiEsMenorDeEdad(milca)
//  imprimirSiEsMenorDeEdad(chikis)
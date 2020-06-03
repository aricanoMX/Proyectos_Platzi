// objetos en JavaScript

function heredaDe(prototipoHijo, prototioPadre) {
    var fn = function() {
        fn.prototype = prototioPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo
    }
}

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre //this va a hacer referncia a ese objeto que se acaba de construir 
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido } = this
        //         var nombre = this.nombre
        //         var apellido = this.apellido
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        return this.altura >= 1.75
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y Soy Desarollador/a `)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function respornderSaludo(nombre, apellido, esDev) {
    console.log(`Buenos días ${nombre} ${apellido} `)
    if (esDev) {
        console.log(`Ah no maaaa. No sabia que eras desarrollador/a`)
    }
}

// function Persona(nombre, apellido, altura) { //función constructora
//     this.nombre = nombre //this va a hacer referncia a ese objeto que se acaba de construir 
//     this.apellido = apellido
//     this.altura = altura
// }

// Persona.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// LO HICE MAL
// Persona.prototype.soyAlto = function() {
//     if (this.altura >= 1.75) {
//         console.log(`Yo ${this.nombre} soy una persona alta`)
//     }
// }

// Persona.prototype.soyAlto = () => {
//     return this.altura >= 1.75
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }

heredaDe(Desarrollador, Persona)

// Desarrollador.prototype.saludar = function() {
//     console.log(`Hola. me llamo ${this.nombre} ${this.apellido} y Soy Desarollador/a `)
// }


//Prototipo es un objeto más de javaScript
//var andres = new Persona('Andrés', 'Ricaño', 1.75) //new es reservada para crear nuevos objetos dado un prototipo dado
var andres = new Desarrollador('Andrés', 'Ricaño', 1.75) //new es reservada para crear nuevos objetos dado un prototipo dado
var milca = new Persona('Milca', 'Tolentino', 1.58) //new es reservada para crear nuevos objetos dado un prototipo dado
var ximena = new Persona('Ximena', 'Ricaño', 1.60) //new es reservada para crear nuevos objetos dado un prototipo dado


andres.saludar(respornderSaludo) // hola me llamo Andrés Ricaño
    // andres.soyAlto()

milca.saludar(respornderSaludo) // hola me llamo Andrés Ricaño
milca.soyAlto(respornderSaludo)

ximena.saludar() // hola me llamo Andrés Ricaño
ximena.soyAlto()


// CLASE 25 QUIEN ES THIS DENTRO DE LAS ARROW FUNCTIONS


// CLASE 28 ASINCRONISMO
/* CLASE 7 */

var nombreAndres = 'Andres' /*   Variable GLOBAL  */
var nombreSasha = 'Sasha' /*   Variable GLOBAL  */
var nombrePepe = 'Pepe' /*   Variable GLOBAL  */

/* function imprimirNombreEnMayusculas({ nombre }) { /*  estos son los parametros del objeto que queremos ocupar */
function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

/*  TODA VARIABLE DEFINIDA VA A ESTAR DEFINIDA DENTRO DEL ALCANCE GLOBAL Y VAMOS APODER ACCEDER A ELLA A TRAVES DEL ALCANCE GLOBAL */

/* CLASE 8 */
/*  clase de objetos */

var andres = { /* al primer objeto se le conoce como clave y al 2 se le conoce como valor */
    nombre: 'Andrés',
    apellido: 'Ricaño',
    edad: 24
}

var milca = { /* al primer objeto se le conoce como clave y al 2 se le conoce como valor */
    nombre: 'Milca',
    apellido: 'Tolentino',
    edad: 20
}

/*  Asi se definen los objetos */
/*  aca le vamos a pasar el objeto a la funcion de imprimir*/
imprimirNombreEnMayusculas(andres)
imprimirNombreEnMayusculas(milca)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })


/*  CLASE 9 DESESTRUCTURACION DE LOS MISMOS */
/* ejercico de la clase 9 */

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años')
}

imprimirNombreYEdad(andres)
    //imprimirNombreYEdad(milca)

/*  CLASE 10 parametro como referencia de valor  */

function cumpleanos(persona) {
    return {
        ...persona, //sirve para desglozar un objeto 
        edad: persona.edad + 1
    }
    persona.edad += 1
}
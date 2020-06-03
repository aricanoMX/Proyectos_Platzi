const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

// callback es una funcion que se va ejecutar en algun futuro y cuando termine el futuro se va a ejecutar 
// cuando se va aejecutar cuando termine la función request o puede que nuenca se termine de llamar 

function onError(id) {
    console.log(`Error al obtener personaje ${id} `)
}

// obtenerPersonaje(1)
//     .then(person => {
//         console.log(`Hola, Yo soy ${person.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(person2 => {
//         console.log(`Hola, Yo soy ${person2.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(person3 => {
//         console.log(`Hola, Yo soy ${person3.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(person4 => {
//         console.log(`Hola, Yo soy ${person4.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(person5 => {
//         console.log(`Hola, Yo soy ${person5.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(person6 => {
//         console.log(`Hola, Yo soy ${person6.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(person7 => {
//         console.log(`Hola, Yo soy ${person7.name}`)
//         return obtenerPersonaje(8)
//     })
//     .catch(onError)

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}
// Promise
//     .all(promesas)
//     .then(person => console.log(person))
//     .catch(onError)


obtenerPersonajes()





// # clase34 manejo de errores con callabacks

//clase #35 promesas
// Qué es una promesa: la promesas son valores que aún no conocemo

//  1er estado de la promesa 
//  pending

//  si la promesa se resuelve va a pasar al estado de fulfilled
//  peroooo si ocurre algun error en el estado que esta resolviendo va a pasar al estado de reject


//  tambien las promesas pueden resolverse de manera sincrona sin realizar alguna tarea sincrona 

//  podemoos llamar a la funcion .then y ahi recibiremos el valor que estamos esperando
// en la variable .catch vamos a recuperar el valor de la función que estamos realizando

// clase #37
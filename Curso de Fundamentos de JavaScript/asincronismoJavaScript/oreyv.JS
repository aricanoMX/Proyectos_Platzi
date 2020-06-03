 var nombre = 'Sacha'
 var apellido = 'Lifszyc'

 function pasarAMayusculas(nombre) {
     return nombre.toUpperCase()
 }

 pasarAMayusculas(nombre + ' ' + apellido)
 pasarAMayusculas('Lucía')
 pasarAMayusculas('')

 //  async function prueba() {

 //      const luke = await obtenerPersonaje('https://swapi.co/api/people/1')
 //      console.log(luke.name)
 //      console.log('Sacha')
 //  }
 //  prueba()

 let nombre1 = 'Pepe'

 const persona = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     edad: 28,
     saludar: function() {
         console.log(`Hola, me llamo ${this.nombre}`)
     },
     decirAdios: function() {
         console.log('Chau, me voy!')
     }
 }

 const otraPersona = {
     ...persona,
     nombre: 'Eric',
     edad: 24
 }

 nombre = 'Lucas'
 otraPersona.saludar()



 $.get('https://swapi.co/api/people/1', function(err, luke) {
     console.log(luke.name)
 })

 console.log('Sacha')

 setTimeout(() => console.log(1), 1000)
 setTimeout(() => console.log(2), 300)
 setTimeout(() => console.log(3), 0)
 console.log(4)
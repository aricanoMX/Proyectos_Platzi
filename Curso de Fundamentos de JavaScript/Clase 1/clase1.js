console.log('Hola mundo desde JS')

var nombre = 'Andrés';
var apellido = 'Ricaño';
var edad = 25; /* Acá es una variable numerica */

edad = '25 años'; /* aca es una de tipo string */


/*  otra forma es */
var nombre2 = 'Andrés',
    apellido2 = 'Ricaño';
/*  Tambien imprime así... */
console.log('Hola' + ' ' + nombre2 + ' ' + apellido2);

console.log('Hola' + ' ' + nombre + ' ' + apellido);

console.log('Tengo ' + edad);


/*  CLASE 2 */

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0); /* esto es para saber la posición del caracter */
var cantidadDeLetrasDelNombre = nombre.length; /* Sirve para obtener el tamaño de una cadena de texto */

var nombreCompleto = (nombre + ' ' + apellido);
/* esta es una forma nueva de concatenar texto se llama interpolación y funciona así */
/*  Adentro de  estas comillas invertidas podemos colocar texto de javascript  hasta espacios normales  como en el ejemplo*/
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()} `;

/* asi accedemos a un sub string para traer un numero especifico de caracteres*/
var str = nombre.substr(1, 2);

var nombreUsuario = prompt('Introduce tu nombre: ');
var ultimaLetra = nombreUsuario.charAt(nombreUsuario.length - 1);

console.log('Tu nombre es: ' + nombreUsuario + ' por lo cual al ultima letra de tu nombre es: ' + ultimaLetra);
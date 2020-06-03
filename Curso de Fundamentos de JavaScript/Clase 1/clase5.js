var edad = 25;

/*  En caso de querer poner un incremento normalmente ccolocamos algo asi
edad = edad + 1; pero existe una forma mas rapidad de hacerlo y es la siguiente:*/

edad += 1;

var peso = 75;

/* peso = peso - 2; */

peso -= 2;

var sandwich = 1;

/* peso = peso + sandwich; // suma    pero así es muy largo */

peso += sandwich;

var jugarAlFutbol = 3;

/* peso = peso - jugarAlFutbol; lo mismo para este es muy largo */

peso -= jugarAlFutbol;

var precioDeVino = 200.3;

var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
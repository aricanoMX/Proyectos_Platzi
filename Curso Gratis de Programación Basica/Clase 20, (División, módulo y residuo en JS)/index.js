//ejercicio FIZZ-BUZZ 
//Escribe los numero del 1 al 100, pero si el numero es multiplo de 3 escribe Fizz, si es multiplo de 5 escribe, peroooo si el numero es multiplo tanto de 3 cómo de 5 escribe FIZZBUZZ.

// para determinar si se cilos, condiciones, condiciones anidadas, y como extraer el residuo de una división

//Escribir FIZZ en numeros divisibles entre 3
//Escribir BUZZ en numeros divisibles entre 5
//Escribir FIZZBUZ entre numeros divisibles entre ambos 3 y 5, ejemplo 15

//Con modulo podemos evaluar cualquier numero o resudio, para identificar si un numero es divisible entre

//------------------------------------------------
// Asi lo hice yo(sin funciones ...)
// var num = 100;

// for (var i = 1; i <= num; i++) {
//     document.write(i);
//     if (i % 3 == 0 && i % 5 == 0) {
//         document.write(" FizzBuzz");
//     } else if (i % 3 == 0) {
//         document.write(" Fizz");
//     } else if (i % 5 == 0) {
//         document.write(" Buzz");
//     }
//     document.write("<br />");
//}
//------------------------------------------------

var num = 100;
var divisible = false;

for (var i = 1; i <= num; i++) {
    divisible = false; // esto es para que en cada iteración la variable no muestr nada y arranque limpia 
    if (esDivisible(i, 3)) {
        document.write(" Fizz");
    }
    if (esDivisible(i, 5)) {
        document.write(" Buzz");
    }
    if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
        document.write(i);
    }
    document.write("<br />");
}

function esDivisible(num, divisor) //Es divisible retorna un verdadero si el nnumero es divisible y falso si no lo es

//algo a tener en cuenta es que cuando una función alcanza un return ya no se ejecuta más
{
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}
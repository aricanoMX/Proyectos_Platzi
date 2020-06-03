var nombre = 'Andres'; /*   Variable GLOBAL  */

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);

/*  TODA VARIABLE QUE NO ESTE DEFINIDA VA A ESTAR DEFINIDA DENTRO DEL ALCANCE GLOBAL Y VAMOS APODER ACCEDER A ELLA A TRAVES DEL ALCANCE GLOBAL */
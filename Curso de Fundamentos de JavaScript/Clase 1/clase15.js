// CLASE 15 ESTRUCTURA REPETITIVA: FOR (REPETIR CODIGO CIERTA CANTIDAD DE VECES)

var andres = {
    nombre: 'Andrés',
    apellido: 'Ricaño',
    edad: 24,
    peso: 78
}

console.log(`Al inicio del año ${andres.nombre} pesaba ${andres.peso}kg`)

const INCREMENTO_DECREMENTO_PESO = 0.3
const DIAS_EN_UN_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_DECREMENTO_PESO
    // esto es igual a esto

// function aumentarDePeso(persona){
//     return persona.peso += 200
// }

const disminuirDePeso = persona => persona.peso -= INCREMENTO_DECREMENTO_PESO


for (var i = 1; i <= DIAS_EN_UN_ANO; i++) {
    var random = Math.random() // Valores entre 0 y 1
    if (random < 0.25) {
        // Aumenta de peso
        aumentarDePeso(andres)

    } else if (random < 0.5) {
        //  Disminuye de peso
        disminuirDePeso(andres)
    }

}


// CLASE 16 ESTRUCTURA REPETITIVA WHILE:

const META = andres.peso - 3
    //función del random
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (andres.peso > META) { // vamos a hacer debbug
    if (comeMucho()) {
        // Aumenta de peso
        aumentarDePeso(andres)
    }
    if (realizaDeporte()) {
        //  Disminuye de peso
        disminuirDePeso(andres)
    }
    dias += 1
}
// console.log(`Pasaron ${dias} dias para que ${andres.nombre} bajara sus 3kg`)


//  CLASE 17 ESTRUCTURA DE REPETICION: DO WHILE (EJECUTA AL MENOS UNA VEZ AL ARCHIVO)
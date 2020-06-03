//  CLASE 17 ESTRUCTURA DE REPETICION: DO WHILE (EJECUTA AL MENOS UNA VEZ AL ARCHIVO)

var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador += 1
} while (!llueve());

if (contador === 1) {
    console.log(`Fui a ver si llovia ${contador} vez`)
} else {
    console.log(`Fui a ver si llovia ${contador} veces`)
}
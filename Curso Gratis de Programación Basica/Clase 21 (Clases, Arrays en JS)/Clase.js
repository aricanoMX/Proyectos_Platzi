class Pakiman { //con esto es suficiente para crear un objeto 
    constructor(nombrePakiman, t, h, a) { // esto es como escribir  function pero no tiene nombre PD: funciona igual que una funcion 

            //this es un indicador(referencia) de la instancia de la clase donde me encuentro, osea hace referencia a las variables dentro de la clase
            this.imagen = new Image(); //Es la representacion de nuestro pakiman
            this.nombre = nombrePakiman;
            this.tipo = t;
            this.vida = h;
            this.ataque = a;

            this.imagen.src = images[this.nombre];
        }
        //dentro de las clases no tenemos que escribir function por que se entiende que estamos dentro de una clase Y Podemos escribir el nombre que querramos
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        document.write("<p >");
        document.body.appendChild(this.imagen);
        //appendChild sirve para agregar un hijo
        document.write("Nombre: <strong>" + this.nombre + "</strong></br>")
        document.write("Tipo: " + this.tipo + "</br>")
        document.write("Vida: " + this.vida + "</br>")
        document.write("Ataque: " + this.ataque + "</br>")
        document.write("</p>");
    }
}
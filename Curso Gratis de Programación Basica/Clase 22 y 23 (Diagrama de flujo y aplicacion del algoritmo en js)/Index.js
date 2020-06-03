//la variable caja la podemos recorrer con un ciclo for y un of

class Billete {

    constructor(val, cant) {
        this.valor = val;
        this.cantidad = cant;
    }
}

function retidoCajero() {
    var tex = document.getElementById("dinero");
    dineroin = parseInt(tex.value);
    for (var billete of caja) {
        if (dineroin > 0) {
            division = Math.floor(dineroin / billete.valor);
            if (division > billete.cantidad) {
                dinret = billete.cantidad;
            } else {
                dinret = division;
            }
            retirado.push(new Billete(billete.valor, dinret));
            dineroin -= (billete.valor * dinret);
        }
    }
    if (dineroin > 0) {
        res.innerHTML = "Soy un ATM poble, justo ahora no tengo dinero =( <br />";
    } else {
        for (var ent of retirado) {
            if (ent.cantidad > 0) {
                res.innerHTML += ent.cantidad + " Billetes de $" + ent.valor + "<br />";
            }
        }
    }
}

var caja = [];
var retirado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dineroTotal = 2000;
var dineroin = 0;
var division = 0;
var dinret = 0;


var res = document.getElementById("resultado");
var boton = document.getElementById("retirar ");
boton.addEventListener("click", retidoCajero);
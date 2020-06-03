var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender() {
    var leda = new jf.Led(9); //aca le decirmos al node desde que puerto del arduino se estan mandando los pulsos 
    var ledr = new jf.Led(13);
    leda.Blink(200); //Blink sirve como lo  hacia OUTPUT para encender el led
    ledr.Blink(700);
}

//Este codigo se ejecuta llamand al archivo desde el node.js
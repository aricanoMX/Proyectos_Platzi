var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("button_adarle");

boton = addEventListener("click", actionButton); //Cuando en el evento colocamos parentesis en la función queremos decirle al listener que ejecute la funcion, mientras que si la colocamos sin parentesis, solo estamos referenciando a dicha función, como lo estamos haciendo en el ejemplo.
var d = document.getElementById("canvas_box"); //GetElementbyId es como podemos llegar a un elemento dento de HTML
var ancho = d.width; //acá obtenemos el ancho del canvas.
var canvas = d.getContext("2d");

//canvas.beginPath();
// canvas.strokeStyle = "gray"  ; //strokeStyle es una propiedad del objeto lienzo
// canvas.moveTo(100, 100);
// canvas.lineTo(200, 200);
// canvas.moveTo(0,0);
// canvas.lineTo(300, 0);
// canvas.lineTo(300,300);
// canvas.lineTo(0, 300);
// canvas.lineTo(0, 0);
// canvas.stroke();
// canvas.closePath();

function dibujarCanvas(color, x_inicial, y_inicial, x_final, y_final) {
    canvas.beginPath();
    canvas.strokeStyle = color; //strokeStyle es una propiedad del objeto lienzo
    canvas.moveTo(x_inicial, y_inicial);
    canvas.lineTo(x_final, y_final);
    canvas.stroke();
    canvas.closePath();
}
dibujarCanvas("black", 0, 0, 300, 0);
dibujarCanvas("black", 300, 0, 300, 300);
dibujarCanvas("black", 300, 300, 0, 300);
dibujarCanvas("black", 0, 300, 0, 0);

// dibujarCanvas("red", 10, 250, 220, 10);
// dibujarCanvas("orange", 290, 10, 10, 220);

function actionButton() {
    console.log(texto);
    //alert("No me toques ahí..");

    //-------------- CICLOS --------------
    var canvas_limite = parseInt(texto.value); //acá lo que estamos haciendo es colocar recibir el valor ingresado en la caja de texto.
    var linea = 0;
    var espacio = ancho / canvas_limite;
    var x_i, x_f, y_i, y_f;

    for (linea = 0; linea < canvas_limite; linea++) {
        y_i = espacio * linea;
        x_f = espacio * (linea + 1);
        dibujarCanvas("red", 0, y_i, x_f, 300);
    }

    for (linea = 0; linea < canvas_limite; linea++) {
        y_f = espacio * linea;
        x_i = espacio * (linea + 1);
        dibujarCanvas("red", x_i, 0, 300, y_f);
    }

    for (linea = 0; linea < canvas_limite; linea++) {
        y_i = espacio * linea;
        x_f = 300 - (espacio * linea);
        dibujarCanvas("red", 0, y_i, x_f, 0);
    }
    for (linea = 0; linea < canvas_limite; linea++) {
        x_i = espacio * linea;
        y_f = 300 - (espacio * linea);
        dibujarCanvas("red", x_i, 300, 300, y_f);
    }
    //------------------------------------
}
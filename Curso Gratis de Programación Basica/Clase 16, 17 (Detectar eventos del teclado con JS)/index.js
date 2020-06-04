document.addEventListener("keydown", dibujarTeclado); //Este evento detecta cuando dejamos presionada una determinada tecla
document.addEventListener("keyup", dibujarTeclado); //Este evento al contrario del anterior detecta cuando nosotros levantamos el dedo de un determinado boton, agregando así un contador una vez levantamos el dedo

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGTH: 39,
  DOWN: 40,
}; //Esto es un objeto que tiene una colección de variables, esté es igual a un bloque de codigo y es parecido a JSON (JavaScript Object Notation, Notacion de Ojbetos de JavaScript)

var teclas_gamer = {
  LEFT: 65,
  UP: 87,
  RIGTH: 68,
  DOWN: 83,
};

var dibujarl = document.getElementById("drawing_area");
var drawinga = dibujarl.getContext("2d");

var eje_x = 150;
var eje_y = 150;

console.log(teclas);
console.log(teclas_gamer);

function dibujarCanvas(color, x_inicial, y_inicial, x_final, y_final, canvas) {
  canvas.beginPath();
  canvas.strokeStyle = color; //strokeStyle es una propiedad del objeto lienzo
  canvas.lineWidth = 2; //propiedad que permite engrozar más el elemento que estamos ingresando, ya que ocupa más pixeles
  canvas.moveTo(x_inicial, y_inicial);
  canvas.lineTo(x_final, y_final);
  canvas.stroke();
  canvas.closePath();
}
//------------- Punto de inicio ------------------
dibujarCanvas("black", 150, 150, 150, 150, drawinga);

//----------------- MARCO ------------------------
dibujarCanvas("black", 0, 0, 300, 0, drawinga);
dibujarCanvas("black", 300, 0, 300, 300, drawinga);
dibujarCanvas("black", 300, 300, 0, 300, drawinga);
dibujarCanvas("black", 0, 300, 0, 0, drawinga);
//----------------- MARCO ------------------------

function dibujarTeclado(evento) {
  //si por algun motivo se llega colocar un parametro, este va a actuar como almacen para todos los datos que nosotros estemos generando, puesto que addEventListener manda datos a nuestra función dibujarTeclado y esta a su vez direcciona los datos a nuestro parametro (variable) haciendo que ahi se almacenen los datos
  var color_linea = "purple";
  var mov = 5;
  //console.log(evento.keyCode);
  if (evento.keyCode == teclas.LEFT) {
    console.log("Vamo pa la izq");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x - mov, eje_y, drawinga);
    eje_x = eje_x - mov;
  }
  if (evento.keyCode == teclas.UP) {
    console.log("Vamo pa riba");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y - mov, drawinga);
    eje_y = eje_y - mov;
  }
  if (evento.keyCode == teclas.RIGTH) {
    console.log("Vamo pa la derecha");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x + mov, eje_y, drawinga);
    eje_x = eje_x + mov;
  }
  if (evento.keyCode == teclas.DOWN) {
    console.log("Vamo pa bajo");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y + mov, drawinga);
    eje_y = eje_y + mov;
  }
  if (evento.keyCode == teclas_gamer.LEFT) {
    console.log("Vamo pa la izq");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x - mov, eje_y, drawinga);
    eje_x = eje_x - mov;
  }
  if (evento.keyCode == teclas_gamer.UP) {
    console.log("Vamo pa riba");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y - mov, drawinga);
    eje_y = eje_y - mov;
  }
  if (evento.keyCode == teclas_gamer.RIGTH) {
    console.log("Vamo pa la derecha");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x + mov, eje_y, drawinga);
    eje_x = eje_x + mov;
  }
  if (evento.keyCode == teclas_gamer.DOWN) {
    console.log("Vamo pa bajo");
    dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y + mov, drawinga);
    eje_y = eje_y + mov;
  }

  switch (evento.keyCode) {
    case teclas.LEFT:
      console.log("Vamo pa la izq");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x - mov, eje_y, drawinga);
      eje_x = eje_x - mov;
      break;
    case teclas.UP:
      console.log("Vamo pa riba");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y - mov, drawinga);
      eje_y = eje_y - mov;
      break;
    case teclas.RIGTH:
      console.log("Vamo pa la derecha");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x + mov, eje_y, drawinga);
      eje_x = eje_x + mov;
      break;
    case teclas.DOWN:
      console.log("Vamo pa bajo");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y + mov, drawinga);
      eje_y = eje_y + mov;
      break;
    case teclas_gamer.LEFT:
      console.log("Vamo pa la izq");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x - mov, eje_y, drawinga);
      eje_x = eje_x - mov;
      break;
    case teclas_gamer.UP:
      console.log("Vamo pa riba");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y - mov, drawinga);
      eje_y = eje_y - mov;
      break;
    case teclas_gamer.RIGTH:
      console.log("Vamo pa la derecha");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x + mov, eje_y, drawinga);
      eje_x = eje_x + mov;
      break;
    case teclas_gamer.DOWN:
      console.log("Vamo pa bajo");
      dibujarCanvas(color_linea, eje_x, eje_y, eje_x, eje_y + mov, drawinga);
      eje_y = eje_y + mov;
      break;
    default:
      console.log("Presionaste otra tecla...");
      break;
  }
}

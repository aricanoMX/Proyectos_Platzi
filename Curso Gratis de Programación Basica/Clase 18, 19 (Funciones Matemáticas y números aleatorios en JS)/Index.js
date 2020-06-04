var vp = document.getElementById("villaPlatzi");
var mapa = vp.getContext("2d");

villaPlatzi.addEventListener("mousemove", cerdoMouse);

var fondo = {
  //varible de objeto JSON, estos se separan por ","
  url: "./Images/tile.png",
  cargaOK: false,
};

var vaca = {
  url: "./Images/vaca.png",
  cargaOK: false,
};

var cerdo = {
  url: "./Images/cerdo.png",
  cargaOK: false,
};
var pollo = {
  url: "./Images/pollo.png",
  cargaOK: false,
};
var cerdo2 = {
  url: "./Images/cerdo.png",
  cargaOK: false,
};

var cantidadv = random(1, 10);
var cantidadc = random(1, 10);
var cantidadp = random(1, 10);

// fondo.imagen = new Image(); la palabra new es solo una nueva definicion de objeto, mientras que la palabra Image esta en mayuscula puesto que es todo una clase, la clase Image (imagen en español)
// fondo.imagen.src = fondo.url; esto quiere decir que una vez que la dirección de la imagen en este caso tile.png es disparada ahi es donde puede cargar la imagen
// fondo.imagen.addEventListener("load", dibArea); aca lo que estamos haciendo es colocarle a la variable imagen un escuchador para que este sea el encargado de cargar la imagen dentro de la función drawingArea

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", dibArea);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
cerdo2.canvas = new Image();
cerdo2.canvas.src = cerdo2.url;
cerdo2.canvas.addEventListener("load", cargarCerdo2);

function dibArea() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo2() {
  cerdo2.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    mapa.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    for (var v = 0; v < cantidadv; v++) {
      var xv = random(0, 8);
      var yv = random(0, 8);
      var xv = xv * 50;
      var yv = yv * 50;
      mapa.drawImage(vaca.imagen, xv, yv);
    }
  }
  if (cerdo.cargaOK) {
    for (var c = 0; c < cantidadc; c++) {
      var xc = random(0, 7);
      var yc = random(0, 7);
      var xc = xc * 60;
      var yc = yc * 60;
      mapa.drawImage(cerdo.imagen, xc, yc);
    }
  }
  if (pollo.cargaOK) {
    for (var p = 0; p < cantidadp; p++) {
      var xp = random(0, 7);
      var yp = random(0, 7);
      var xp = xp * 60;
      var yp = yp * 60;
      mapa.drawImage(pollo.imagen, xp, yp);
    }
  }
  if (cerdo2.cargaOK) {
    //mapa.drawImage(cerdo.imagen, layerX, layerY);
    cerdoMouse();
  }
}

function cerdoMouse(down) {
  //console.log("Estas clicando el mouse");
  //-------------- Posición cursor --------------
  var mov_x = down.layerX;
  var mov_y = down.layerY;

  mapa.drawImage(cerdo2.canvas, mov_x, mov_y);
}

function random(min, max) {
  var resultados;
  // var z = random(1, 5);

  // for (var i = 0; i < 5; i++) {
  //     z = random(-5, 20);
  //     document.write(z + "<br>");
  // }

  // document.write(z);
  resultados = Math.floor(Math.random() * (max - min + 1)) + min; //Math.ciel sirve para redondear un numero flotante para arriba (ejemplo 4.8 lo redondea a 5)
  //mientras que Math.floor lo redondea hacia abajo, dejando así que 4.8 quedaria como 4, al utilizar math.ceil
  return resultados;
}

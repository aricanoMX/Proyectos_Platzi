/* */
const express = require("express"); //express es un famework
const app = express();

app.get("/", function (req, res) {
  /* get sirve para addeventlistener para colocar la direccion que se va a abrir, solamente lo que va inmediatamente en el slash con comillas dobles*/ res.send(
    "Este es el <strong> Home </strong> genial!!!!"
  );
});
app.get("/cursos", function cursos(req, res) {
  res.send("Estos son los <strong> Cursos </strong>");
});

app.listen(8989);

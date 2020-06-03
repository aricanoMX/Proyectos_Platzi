var images = [];
images["Cauchin"] = "Images/vaca.png";
images["Pokachu"] = "Images/pollo.png";
images["Tocinauro"] = "Images/cerdo.png";

// var cauchin = new Pakiman("Cauchin", "Tierra", 850, 300); //este nombre viene del parametro del constructor, osea cuachin hace referencia al nombre que se puede ingresar en el constructor
// var pokachu = new Pakiman("Pokachu", "Viento", 1000, 500);
// var tocinauro = new Pakiman("Tocinauro", "Tierra", 1500, 250);


//los arrays normalmente funcionana indexados a 0, 1, , 3, 4 y dependientdo el mumero al que lleguemos es el numero de cajitas que va a contener el array

//Tambien a los arrays se les puede empujar un nuevo dato, con la funcion push() agregando el valor en el ultimo espacio desponible

//Tambien se pueden crear un tipo de arrays especiales

// cauchin.mostrar();
// pokachu.mostrar();
// tocinauro.mostrar();

//Despues puedo crear una coleccion de pakimanes con los array

// var pakidex = [];
// pakidex.push(cauchin);
// pakidex.push(pokachu);
// pakidex.push(tocinauro);

//console.log(pakidex);

//Despues puedo hacer lo mismo con los elementos de arriba

var pakidex = [];
pakidex.push(new Pakiman("Cauchin", "Tierra", 850, 300));
pakidex.push(new Pakiman("Pokachu", "Viento", 1000, 500));
pakidex.push(new Pakiman("Tocinauro", "Tierra", 1500, 250));

console.log(pakidex);

//for (var pakimons in pakidex) //para cada objeto dentro de una arreglo o diccionario

//la variable IN muestra el indice de los objetos
//{
//    console.log(pakidex[pakimons]);
//}  

for (var pakimons of pakidex) //para cada objeto dentro de una arreglo o diccionario

//La variable of muestra directamente la instancia en lugar de l indice de los objetos 
{
    console.log(pakimons);
    pakimons.mostrar();
}
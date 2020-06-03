//Esté código es en C
int yellow = 13;
int red = 7;
int mili = 300;

void setup() {// Esté codigo se incia cada vez que el arduino inicia
  // put your setup code here, to run once:
  pinMode(yellow, OUTPUT); //Pin mode recibe 2 parametros el puerto de encendido y de apagado
  pinMode(red, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(yellow, HIGH);//tenemos que mandar electricidad en arduino subiendo la electricidad
  digitalWrite(red, LOW);
  delay(mili);
  digitalWrite(yellow, LOW); //apagamos el arduino mandando 0 o nula electricidad
  digitalWrite(red, HIGH);
  delay(mili * 2);
}

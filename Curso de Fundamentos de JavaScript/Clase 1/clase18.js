//  clase 18: CONDICIONAL MULTIPLE SWITCH

var signo = prompt('¿Cuál es tu signo zodiacal? ')

console.log(signo)

switch (signo) {
    case 'ARIES':
    case 'Aries':
    case 'aries':
        //
        console.log('Deje de presionarse, ya que el tiempo actuará a su favor. En esta jornada, su tenacidad y optimismo serán puestos a prueba y tendrá muy buenos resultados.')
        break
    case 'TAURO':
    case 'Tauro':
    case 'tauro':
        //
        console.log('Esta jornada deberá dedicarla a aprender de las experiencias negativas y positivas que viva. De esta forma, mañana podrá enseñarle a otros lo vivido.')
        break
    case 'GEMINIS':
    case 'GÉMINIS':
    case 'Géminis':
    case 'Geminis':
    case 'géminis':
    case 'geminis':
        //
        console.log('Aprenda que nunca hay que olvidarse del pasado, solo tomar distancia de aquellas situaciones o momentos que le quitan el buen ánimo a uno.')
        break
    case 'CÁNCER':
    case 'CANCER':
    case 'Cáncer':
    case 'Canser':
    case 'cáncer':
    case 'cancer':
        //
        console.log('Tener la Luna en su signo le hará recuperar su propia energía. Sepa que podrá ganar mucha más confianza y seguir avanzando en cada uno de los proyectos.')
        break
    case 'LEO':
    case 'Leo':
    case 'leo':
        //
        console.log('Aunque todo cambio le genere inseguridad, ya es el momento para que avance en su vida. No dude en arriesgar por más que tenga obstáculos en el camino.')
        break
    case 'VIRGO':
    case 'Virgo':
    case 'virgo':
        //
        console.log('Sería bueno que no se empecine y escuche a su entorno. De esta forma, aprenderá de los demás y podrá cambiar de manera positiva su punto de vista.')
        break
    case 'LIBRA':
    case 'Libra':
    case 'libra':
        //
        console.log('Deje de ser tan obstinado en la vida. Intente ver más allá de lo que su manía le permite, ya que pronto se dará cuenta de que estaba equivocado.')
        break
    case 'ESCORPIO':
    case 'Escorpio':
    case 'escorpio':
        //
        console.log('Sepa que será muy positivo para sus relaciones, que modifique esa exigencia que tiende a corregir los detalles sin importancia de las personas.')
        break
    case 'SAGITARIO':
    case 'Sagitario':
    case 'sagitario':
        //
        console.log('Comprenda que muchas veces la libertad no siempre es peligrosa en la vida. A veces nos ayuda a asomar lo mejor que uno tiene en su interior y no lo demuestra.')
        break
    case 'CAPRICORNIO':
    case 'Capricornio':
    case 'capricornio':
        //
        console.log('Será de suma importancia que empiece a moderar cada uno de sus impulsos y piense dos veces antes de tomar una determinación fundamental en su vida.')
        break
    case 'ACUARIO':
    case 'Acuario':
    case 'acuario':
        //  Acuario
        console.log('En este día, trate de desplegar en primer lugar sus propios deseos, proyectos y trasmítaselos a su vínculo cercano. Ellos sabrán acompañarlo en todo.')
        break
    case 'PISCIS':
    case 'Piscis':
    case 'piscis':
        //Piscis
        console.log('Probablemente será un periodo de dudas y cierto negativismo con la gente que se rodea. Momento para conocer gente nueva y cambiar el entorno afectivo.')
        break
    default:
        console.log('No es un signo zodiacal valido')
        break
}
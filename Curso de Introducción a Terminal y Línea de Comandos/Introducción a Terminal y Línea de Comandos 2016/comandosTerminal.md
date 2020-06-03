git p¿Qué es la terminal o CLI (command line interface) ?

La terminal nos abre un mundo de posibilidades increíbles. Desde tener una navegación avanzada entre todos nuestros nodos y
archivos, hasta contar con programas previamente instalados e increíbles que solo pueden ser ejecutados desde este entorno y ni
siquiera sabemos que existen.

Sí, todo carece de una interfaz gráfica que lo hace ver un poco “feo”, pero, todo, todos los recursos se enfocan a la ejecución
del programa, obteniendo resultados increíblemente rápidos.

limpiamos la pantalla con el comando

- clear

Donde estamos, esto lo hacemos con el comando

- pwd

Comando LS nos enlista lo que encontramos en la pantalla

- ls

Para mandarle una bandera a algun comando generalmente es con un menos '-'

## Conceptos

- **PROMPT**: Donde se encuentra el cursor, un lugar en el árbol de nodos que es la representación del disco duro en el sistema
  operativo

## Comandos (y algunas banderas)

- ls: lista los contenidos de un directorio

  - ls -l: Lista los archivos con datos de cada nodo, ordenados alfabéticamente
  - ls -lt : Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, agregando además, la
    hora en que fue creado el mismo
  - ls -r: Lista los archivos ordenados de forma inversa (sirve con las banderas `S` y `t`)
  - ls -lS: Lista los contenidos ordenados por tamaño
  - ls -lh: Lista los contenidos mostrando los datos legibles fácilmente (tamaño)
  - ls -lhr: Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, de reversa
  - ls -lhS: Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, pero en formato más
    legible, ordenado de mayor a menor peso.

  - ls -lhSr: Lista todos los archivos y directorios, en forma de lista, y con información de los mismos, pero en formato más
    legible, ordenado de menor a mayor peso.
  - DU DISc USAGE
  - du -h -d: Lista todos y cada uno de los directorios en alguna carpeta y al final suma sus pesos

  * ls -a: Lista los contenidos de un directorio incluyendo los archivos ocultos

- mkdir “nombre”: Crea un directorio, usando como nombre la palabra que pongamos después de mkdir.
- mv origen destino: Mueve un archivo o directorio, dando el punto de origen y de destino, por ejemplo:

  ejemplo:

  - mv ../DSCF7498.jpg ./ ( Mueve el archivo DSCF7498.jpg que está en la carpeta padre a esta carpeta hijo )

- mv (nombre del archivo) (nuevo nombre del archivo)

## Comandos Links (Referencias de archivos o directorios ) y eliminar elementos desde la terminal

Los links o ligas, son apuntadores que hacen referencia a un directorio o archivo sin importar dónde es que se encuentren.

- ln -s: (ln: link, S: solo es simbolico)

Ejemplo:
-ln -s [flickr_photos-csv][fotos.csv]
Con los links, podemos hacer cualquiera de las demás operaciones vistas anteriormente: Copiar, pegar, mover.

## Comando de Borrado (rm)

Nunca, de los nuncas uses rm -r / (Esto borrara todo en tu disco duro).

Cómo si usarlo bien:

- rm [NombreDelArchivo]: Elimina el archivo indicado después de rm
- rm [NombreDelDirectorio/*]: Elimina todos los archivos que se encuentren dentro del directorio mencionado.
- rm -r [NombreDelDirectorio]: Elimina el directorio mencionado, junto todos los archivos y más directorios que se encontrarán
  dentro de él.
- rm -rf [NombreDelDirectorio]: Elimina todo lo que hay detras del directorio y cada uno de los consiguientes directorios

## Programas disponibles desde terminal: bc, md5, more, tail, cat, wc

- bc: Aplicación de calculadora desde terminal, podemos hacer cualquier operación aritmética.
  - bc -q(quiet): Entra a la calculadora sin mostrar mensajes molestos
- open [NombreDelArchivo]: Dependiendo del tipo de archivo, la terminal va a elegir el programa por defecto recomendado para
  abrirlo, por ejemplo, si es una imagen, en Mac, lo abrirá en preview.

- open -a [NombreDelPrograma][nombredelarchivo]: Abrimos el archivo elegido con el programa que queremos. Ejemplo:

  ejemplo:

  - open -a [atom][index.html]

- md5 [NombreDelArchivo]: Nos permite crear una especie de huella digital de un archivo, usando el algoritmo md5. De hecho, no
  existe algún otro directorio o archivo en el mundo con el mismo md5

  Ejemplo:

  - md5 [calculos]

- more [NombreDelArchivo]: Esto es exclusivo para archivos de texto, nos muestra todo el contenido de un documento sin abrir un
  editor de texto. Si es mucho el texto, crea páginas totalmente navegables.

- head [NombreDelArchivo]: Esto es exclusivo para archivos de texto, muestra las primeras 10 líneas de un archivo de texto. Puedes
  modificar el flag para aumentar el número de lineas
- tail [NombreDelArchivo]: Esto es exclusivo para archivos de texto, muestra las últimas 10 líneas de un archivo de texto. Puedes
  modificar el flag para aumentar el número de lineas

Ejemplo: - tail -20 [NombreDelArchivo]

- tail -f [NombreDelArchivo]: -f significa forever, quiere decir que la terminal se va a quedar escuchando el archivo hasta que
  suceda un cambio, cuando se haga un cambio en el archivo, va a imprimir como siempre los últimos 10 resultados.

- cat [NombreDelArchivo]: Imprime todo el archivo, sin excepción, sin paginar. Puedes de hecho, abrir cualquier tipo de archivo
  binario (no solo texto)

(

- open: recomendado para archivos binarios como imágenes, videos, pdf. etc.

- more, cat, tail: para archivos con texto de salida utf-8 o similares

)

- wc [NombreDelCurso]: Es un contador de líneas, palabras y caracteres en ese archivo, en ese orden.
- wc -l [NombreDelCurso]: Es un contador de líneas de un archivo
- wc -c [NombreDelCurso]: Es un contador de caracteres de un archivo

## Monitoreo de procesos desde la terminal

La arquitectura de un sistema operativo Linux / \*Nix nos permite identificar en qué carpeta se encuentran todos esos comandos
ejecutables que hemos estado usando, basta con ejecutar el comando:

- \$PATH: variable del sistema donde se guardan las rutas hacia los programas ejecutables
- which: te dice desde que ruta se esta ejecutando el comando
- top: un administrados de procesos
- &: manda la ejecución al background, y te regresa el control de la terminal
- kill -9\_ mata un proceso por su pid
- ps: lista los procesos en ejecución
- echo \$?: para preguntar la bandera de salida del ultimo program5a

### Operadores para Standard Input, Standard Output y Standard Error

                        STDIN            STDOUT          STDERR

Todo lo que imprime en la pantalla es el output del programa en terminal hay tres streams para recibir y sacar información

Standard Input 0 es por donde le llega la información al programa

Standard Output 1 es por donde sale los resultados del programa

Standard Error 2 es donde salen los errores de ejecución
{

    > envia el standard output a un archivo

        Manda el STDOUT de `command_1` al inicio de FILE. Si FILE no existe lo crea, si existe _lo sobreescribe_.

    >> asigna un valor en terminal

        Manda el STDOUT de `command_1` al inicio de FILE. Si FILE no existe lo crea, si existe **lo concatena al fina**

    | encamina la salida de un comando a la entrada de otro
        Manda el STDOUT de `command_1` al STDIN de `command_2`

    < trae de un archivo los datos hacia el estandard input
        Manda al STDIN de `command_1` el contenido de FILE.

    2>&1 manda lo del estandard error al estandard output

    2> manda el estandard error a un archivo

    tail -f para ver lo que se va agregando a un archivo

}

## Busqueda de contenido, archivos, carpetas y uso de Grep

Búsqueda dentro de un archivo de texto

- cat Archivo | grep TerminoDeBusqueda

Estamos leyendo todo el archivo, y por medio de grep, solo filtramos lo resultados de acuerdo al Término de Búsqueda

Para ser más concretos con la búsqueda, podemos usar expresiones regulares:

- cat Archivo | grep ,TerminoDeBusqueda\$

Y recordando el standard output, podemos mandarlo a un archivo de texto:

cat Archivo | grep ,TerminoDeBusqueda\$ > mi_archivo

## Peticiones HTTP desde la terminal con curl

---

chmod modifica los archivos
el encabezado es el que decide que programa lo ejecuta

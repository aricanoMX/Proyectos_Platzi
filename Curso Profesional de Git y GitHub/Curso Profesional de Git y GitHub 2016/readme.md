# Curso de git y github 2014 y 2016

\$ **cd** _Sirve para movernos entre carpetas_

\$ **ls** _Sirve para ver el contenido de las carpetas_

\$ **pwd** _Sirve para ver en que carpeta estamos_

\$ **mkdit** _Sive para crear carpetas_

\$ **touch** _Sirve para crear archivos (Unicamente hace falta el nombre del archivo y la extrensión)_

\$ **cad** _Sirve para revisar el contenido de los archivos en terminal_

\$ **git init** _Sirve para inicial el proyecto en git_

\$ **git status** _Sirve para revisar el estado del git_

\$ **git add -A** _Agregamos archivos al repositorio_

\$ **git commit -m 'mensaje'** _Sirve para dejar un mensaje en el commit es muy importante hacerlo así simpre_

\$ **git commit -am 'mensaje'** _Es la unión de los 2 anteriores comandos para ir mas rapido_

\$ **git config --global alias.** _[LO QUE QUEREMOS] "[EL COMANDO QUE QUEREMOS QUE EJECUTE NICE LOG"]_

$ **git log** 														*Sirve para ver los commits que hemos hecho*
$ **git log --oneline** _Sirve para mostrar las branches en una sola linea_
\$ **git log --graph** _Sirve para mostra un grafo de las ramas y muestra todo su ocntenido_

\$ **git log > commits.txt** _Te crea un archivo de texto con tus commits._

\$ **git log --oneline --graph --all** _Sirve para visualizar un grafo de nuestras ramas y las fusiones que hemos hecho_

$ **git checkout** 												*Sirve para moverse entre ramas/branches y entre commits*
$ **git checkout commit**

$ **git branch** 													*Sirve para crear nuevas branches*
$ **git branch -a ** _Sirve para ver incluso las ramas ocultas _

\$ **git merge** _Sirve para hacer fusión entre ramas_

>     			**IMPORTANTE**
>     			SIEMPRE QUE VAYAMOS A HACER UN MERGE MANUAL
>     			VA A APARECER UNA VENTANA
>
>     			TRANQUILO
>     			PRESIONAMOS LA LETRA 'O'
>     			TENEMOS QUE COLOCAR UN MENSAJE DEL COMMIT (OBLIGATORIO)
>     			AL TERMINAR PRESIONAMOS ":"
>     			INMEDIATAMENTE PONEMOS "X"
>
>     			EJEMPLO: ":x"
>     			Y ENTER

\$ **git merge (origin/master)** _Esto lo que hace es fusionar el branch que sirve de vigia y nuestra branch local_

\$ **git fetch ** _Sirve para sincronizar los repositorios de nuestro servidor a nuestro repositorio local_

>     			**IMPORTANTE**
>     			SIMPRE QUE SE AGREGUEN DATOS A LOS SERVIDORES SE TIENEN QUE SINCRONIZAR CON LOS ARCHIVOS LOCALES
>     			SIEMPRE.....

\$ **git fetch origin** _Sirve para mandar nuestros cambios al servidor espejo llamado 'origin'_

>     			**IMPORTANTE**
>     			Esta branch siempre esta mirando lo que se modifica en nuestro git

\$ **git push (rama/branch)** _Sirve para mandar los cambios a producción/al repositorio master del servidor_

>     			**IMPORTANTE**
>     			Sirve para subir archivos a servidor

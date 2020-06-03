# Curso de git y github 2014 y 2016

$ cd 				                   				*Sirve para movernos entre carpetas*

$ ls												Sirve para ver el contenido de las carpetas

$ pwd												Sirve para ver en que carpeta estamos

$ mkdit 											Sive para crear carpetas 

$ touch 											Sirve para crear archivos (Unicamente hace falta el nombre del archivo y la extrensión)

$ cad        										Sirve para revisar el contenido de los archivos en terminal

$ git init											Sirve para inicial el proyecto en git

$ git status										Sirve para revisar el estado del git

$ git add -A 										Agregamos archivos al repositorio

$ git commit -m 'mensaje'							Sirve para dejar un mensaje en el commit es muy importante hacerlo así simpre

$ git commit -am 'mensaje'							Es la unión de los 2 anteriores comandos para ir mas rapido

$ git config --global alias.[LO QUE QUEREMOS] "[EL COMANDO QUE QUEREMOS QUE EJECUTE NICE LOG" 

$ git log 											Sirve para ver los commits que hemos hecho
$ git log --oneline									Sirve para mostrar las branches en una sola linea
$ git log --graph									Sirve para mostra un grafo de las ramas y muestra todo su ocntenido

$ git log > commits.txt								Te crea un archivo de texto con tus commits.

$ git log --oneline --graph --all	Sirve para visualizar un grafo de nuestras ramas y las fusiones que hemos hecho

$ git checkout 										Sirve para moverse entre ramas/branches y entre commits 
$ git checkout commit

$ git branch 										Sirve para crear nuevas branches
$ git branch -a										Sirve para ver incluso las ramas ocultas 

$ git merge 										Sirve para hacer fusión entre ramas
						
									IMPORTANTE  		
									
									SIEMPRE QUE VAYAMOS A HACER UN MERGE MANUAL 
									VA A APARECER UNA VENTANA 
									TRANQUILO
									PRESIONAMOS  LA LETRA 'O'  
									TENEMOS QUE COLOCAR UN MENSAJE DEL COMMIT (OBLIGATORIO)
									AL TERMINAR PRESIONAMOS ":"
									INMEDIATAMENTE PONEMOS "X"
									EJEMPLO= ":x"
									Y ENTER

$ git merge (origin/master) 						Esto lo que hace es fusionar el branch que sirve de vigia y nuestra branch local en 

$ git fetch											Sirve para sincronizar los repositorios de nuestro servidor a nuestro repositorio local
				
									IMPORTANTE 			
									
									SIMPRE QUE SE AGREGUEN DATOS A LOS SERVIDORES SE TIENEN QUE SINCRONIZAR CON LOS ARCHIVOS LOCALES 
									
									SIEMPRE.....

$ git fetch origin									Sirve para mandar nuestros cambios al servidor espejo llamado 'origin'
				
									IMPORTANTE 			
									
									Esta branch siempre esta mirando lo que se modifica en nuestro git 

$ git push (rama/branch)							Sirve para mandar los cambios a producción/al repositorio master del servidor
									
									IMPORTANTE 
									
									Sirve para subir archivos a servidor

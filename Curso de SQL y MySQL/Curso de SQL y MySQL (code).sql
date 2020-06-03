-------------------------------------------------
-- CLASE 4 Tipos de columnas/Creación de tablas books
-------------------------------------------------
CREATE TABLE IF NOT EXISTS books(
    -- Tambien es posible utilizar el IF NOT EXISTS
    -- Entero       se representa con un INTEGER
    -- PRIMARY      define que es una llave primaria de esta tupla
    -- AUTO_INCREMENT sirve para incrementar el entero automaticamente
    --      ESTE guarda el siguiente numero del ultimo que se guardo sin importar cuantos se hayan borrado          --      anteriormente
    -- MySQL permite omitir el signo del numero para darle mayor potencia omitiendo el (- , +) con la sentencia 
    -- UNSIGNED
    book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_id INTEGER UNSIGNED,
    title VARCHAR(100) NOT NULL,    -- a VARCHAR tienes que indicarle el numero maximo que puede ocupar esa cadena,                                      numero maximo es de 255 bits
                                    -- NOT NULL permite no almacenar datos que no esten presentes, por ende tiene que tener algo dentro de ella.
    `year` INTEGER UNSINGED NOT NULL DEFAULT 1900,
    language VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'ISO 639-1 Language',
                                    -- Permite agregar un comentario a este row y unicamente quien este mirando la base de datos tiene acceso a el.
    cover_url VARCHAR(500) ,
    price DOUBLE(6,2) NOT NULL DEFAULT 10.0,
    sellable TINYINT(1) DEFAULT 1,  -- Vendible EN INGLES
    copies INTEGER NOT NULL DEFAULT 1,
    description TEXT
);

CREATE TABLE IF NOT EXISTS authors(
    author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,   -- La tilde sirve para decirle a la base de datos que vamos a reservar una plabra                                   para nosotros
    nationality VARCHAR(3)
);

CREATE TABLE IF NOT EXISTS clients(
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,     -- UNIQUE  significa que es un tipo de llave donde el valor de esta                                                 columna tiene que ser unico para esta tupla.
    birthdate DATETIME,
    gender ENUM('M','F','ND') NOT NULL,     -- Este es una enumeración de datos, eso quiere decir que nosotros le                                               vamos a decir cuales son las opciones que va a tomar esta columna.
    active TINYINT(1) NOT NULL DEFAULT 1,   -- TIP :::
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Palabra reservada
                                            -- Cuando yo inserte algo en esta tabla el valor de esta columna si no tiene ningun dato o si viene vacio va a tomar la hora de la computaddora y ese va a ser el dato ahí
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                                            -- 
);

venta o renta de libros

CREATE TABLE IF NOT EXISTS operatios(
    operation_id INTEGER UNSINGED PRIMARY KEY AUTO_INCREMENT,
    book_id INTEGER UNIQUE,
    client_id INTEGER UNIQUE,
    `type` ENUM('Borrowed','Sold','Returned') NOT NULL,
    libro prestado o vendido o devuelto
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    finished TINYINT(1) NOT NULL DEFAULT 1,

    IF
);

INSERT INTO authors(author_id, `name`, nationality) VALUES (null,'Juan Rulfo', 'MEX');

INSERT INTO authors(`name`, nationality) VALUES ('Gabriel García Márquez','COL');

INSERT INTO authors VALUES (null,'Juan Gabriel Vazquez','COL');

INSERT INTO authors (`name`, nationality) 
VALUES ('julio Cortázar','ARG'),
('Isabel Allende','CHI'),
('Octavio Paz','MEX')
;

INSERT INTO authors (author_id, `name`, nationality) VALUES ('16','Pablo Neruda','CHI');

INSERT INTO clients (client_id, `name`, email, birthdate, gender, active, created_at)
VALUES (1,'Maria Dolores Gomez','Maria Dolores.95983222J@random.names','1971-06-06','F',1,'2018-04-09 16:51:30'),
(2,'Adrian Fernandez','Adrian.55818851J@random.names','1970-04-09','M',1,'2018-04-09 16:51:30'),
(3,'Maria Luisa Marin','Maria Luisa.83726282A@random.names','1957-07-30','F',1,'2018-04-09 16:51:30'),
(4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1,'2018-04-09 16:51:30');

INSERT INTO clients (client_id, `name`, email, birthdate, gender, active, created_at)
VALUES (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1,'2018-04-09 16:51:30')
ON DUPLICATE KEY UPDATE SET active = '';

INSERT INTO clients (client_id, `name`, email, birthdate, gender, active, created_at)
VALUES (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',0,'2018-04-09 16:51:30') ON DUPLICATE KEY UPDATE active = VALUES(active);

-------------------------------------------------
-- CLASE 13 y 14 SELECT
-------------------------------------------------

SELECT `name` FROM clients;
SELECT `name`, gender, email FROM clients;

LIMIT   -------------------------------------------------
SELECT `name`, gender, email FROM clients LIMIT 10;

WHERE   -------------------------------------------------
SELECT `name`, gender, email FROM clients WHERE gender = 'M';
SELECT `name`, gender, email FROM clients WHERE gender = 'F';

SELECT birthdate FROM clients ;

FUNCTION   -------------------------------------------------

Función Año
SELECT YEAR(birthdate) FROM clients;            -- Treae unicamente el año del dato que querramos

Función NOW
SELECT NOW();                                   -- Trae la fecha y hora ACTUAL en el computador

SELECT YEAR(NOW());                             -- Trae el año actual.
SELECT YEAR(NOW()) - YEAR(birthdate) FROM clients;      -- WOWWWWWW  Trae un calculo talvez no exacto de la edad.
SELECT `name`, YEAR(NOW()) - YEAR(birthdate) FROM clients;      -- Trae nombre y edad de los clientes.

Función LIKE 
        LIKE            -- Es una función de cercania de textos

SELECT * FROM clients WHERE `name` LIKE '%Saave%';          -- % es para generalizar sin importar si esta antes del                                                                  nombre o despues del apellido las letras Saave

FUNCTION EJEMPLO

SELECT name, email, YEAR(NOW()) - YEAR(birthdate), gender   -- Esta consulta quiere decir que traiga el nombre, email,
FROM clients                                                -- edad y genero de la tabla clientes donde el genero sea 
WHERE gender = 'F'                                          -- = a femenino y el que al mismo tiempo tenga la cadena  
AND `name` LIKE '%Lop%';                                    -- de texto %Lop%. 


-------------- CON ALIAS ---------------                    -- Otro nombre que puede recibir al utilizar la palabra AS
SELECT name, email, YEAR(NOW()) - YEAR(birthdate) AS YEARS, gender   
FROM clients                                                
WHERE gender = 'F'                                          
AND `name` LIKE '%Lop%';                                    

-------------------------------------------------
-- CLASE 15 COMANDO JOIN
------------------------------------------------
JOIN relaciones

SELECT * FROM authors WHERE author_id > 0 and author_id <= 5;   -- esta consulta arroja los primeros 5 id´s de la                                                                     -- tabla y sus respectivos datos


FUNCTION BETWEEN        -- Hace una operación entre tal y tal numero dado

SELECT * FROM books WHERE author_id BETWEEN 1 AND 5;

SELECT book_id, author_id, title FROM books WHERE author_id BETWEEN 1 AND 5;  -- Esta consulta trae a numero de lib                                                                                 -- numero de author y titulo de las                                                                                   -- tabla libros que esten entre                                                                                       -- author_ID 1 y 5

SELECT books.book_id, authors.name, books.title                               -- Lo mismo pero trayendo el nombre del
FROM books                                                                    -- author del libro desde otra tabla
WHERE authors
ON authors.author_id = books.author_id
WHERE authors.author_id BETWEEN 1 AND 5;


EJEMPLO: nombre de cliente, titulo del libro y estado de transaccion

SELECT clients.name, books.title, transactions.type
FROM transactions
JOIN clients ON clients.client_id = transactions.client_id
JOIN books ON books.book_id = transactions.book_id;


SELECT clients.name, books.title, transactions.type
FROM transactions
JOIN clients ON clients.client_id = transactions.client_id
JOIN books ON books.book_id = transactions.book_id
WHERE clients.gender = 'F'
AND transactions.type = 'sell';

SELECT clients.name, books.title, authors.name AS 'Author', transactions.type
FROM transactions
JOIN clients ON transactions.client_id = clients.client_id
JOIN books ON transactions.book_id = books.book_id
JOIN authors ON books.author_id = authors.author_id
WHERE clients.gender = 'F'
AND transactions.type = 'sell';

SELECT clients.name, books.title, authors.name AS 'Author', transactions.type
FROM transactions
JOIN clients ON transactions.client_id = clients.client_id
JOIN books ON transactions.book_id = books.book_id
JOIN authors ON books.author_id = authors.author_id
WHERE clients.gender = 'M'
AND transactions.type IN ('sell','lend')                                        -- En esta condicion al escribir IN                                                                                   -- tenemos que escribir exactamente                                                                                   -- los datos que queremos que                                                                                         -- encuentre



--------------------------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS books(
    book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_id INTEGER UNSIGNED,
    title VARCHAR(100) NOT NULL,
    year INTEGER UNSIGNED NOT NULL DEFAULT 1900,
    language VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT ' ISO 639-1 Language',
    cover_url VARCHAR(500),
    price DOUBLE(6,2) NOT NULL DEFAULT 10.0,
    sellable TINYINT(1) DEFAULT 1,
    copies INTEGER NOT NULL DEFAULT 1,
    description TEXT
);

    CREATE TABLE IF NOT EXISTS authors(
        author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        nationality VARCHAR(3)
    );

CREATE TABLE IF NOT EXISTS clients(
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    birthdate DATETIME,
    gender ENUM('M','F','ND') NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS operations(
    operation_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    book_id INTEGER UNSIGNED,
    client_id INTEGER UNSIGNED,
    type ENUM('P', 'V', 'D') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    finished TINYINT(1) NOT NULL 
);

INSERT INTO tablas (COLUMNAS *) VALUES(VALORES)
INSERT INTO authors (author_id, name, nationality ) VALUES( '','Juan Rulfo','MEX' );

INSERT INTO authors ( name, nationality ) VALUES ('Gabriel Garcia Marquez','COL') ;

INSERT INTO authors VALUES ('Juan Gabriel Vazquez','COL');

A Si
B *
c si
d si 
e *
f *
g * menos de 30 caracteres
H *
i si 

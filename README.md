# 1.1-template
Proyecto en NodeJS, con ejemplos de servicios de GET,POST,PUT y DELETE y conexión a una base de datos Mongodb.

1 - Instalación de MongoDB.


	1.1 - Si no se instala MongoDB como servicio importante agregar al path MongoDB (agregar en el path de windows la ruta donde está instalado MongoDB).


2 - Dentro de c:/usuarios crear una carpeta data y dentro de esta una carpeta db (Esto se requiere para que los comandos por consola de MongoDB no paren su ejecución)



3 - En código, cuando realizamos una conexión a MONGO DB con mongoose (modulo de NodeJS para realizar una conexión a una base de datos de MongoDB) No es necesario crear previamente una base de datos para poder conectarse a una, se creará automáticamente
cuando guardemos algún dato en ella desde nuestro servidor (ver database.js).

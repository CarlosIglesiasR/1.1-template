# 1.1-template
Proyecto en NodeJS, con ejemplos de servicios de GET,POST,PUT y DELETE y conexión a una base de datos Mongodb.

1 - Necesaria la instalación de MongoDB.**

		**Si no se instala MongoDB como servicio**

1.1 - Importante agregar al path MongoDB (agregar en el path de windows la ruta donde está instalado MongoDB).

		**Fin si no se instala MongoDB como servicio**

2 - Dentro de c:/usuarios crear una carpeta data y dentro de esta una carpeta db (Esto se requiere para que los comandos por consola de MongoDB no paren su ejecución)


						***Comandos en consola MongoDB (Con el servidor levantado)***

-mongod (para ejecutar servidor MongoDB si no está instalado como un servicio).
-mongo --version (comprobamos la versión de MongoDB).
-mongo (conexión a MongoDB).
-db (visualizar la base de datos en la que estamos actualmente).
-showdbs (ver todas las bases de datos).
- use nombredelabasededatos (nos movemos a una base de datos y Si la base de datos no está creada, se crea con este comando y posteriormente insertando una colección en la base de datos
P.E : Use prueba
	  db.products.insert({"name": "products"}).

-db.dropDatabase() (Elimina la BD actualmente en uso).

						*** Fin Comandos en consola MongoDB (Con el servidor levantado)***




											*** En código ***

Cuando realizamos una conexión a MONGO DB con mongoose (modulo de NodeJS para realizar una conexión a una base de datos de MongoDB) No es necesario crear previamente una base de datos para poder conectarse a una, se creará automáticamente
cuando guardemos algún dato en ella desde nuestro servidor (ver database.js).

											*** Fin en código ***
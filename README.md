CHALLENGE

Requisitos:

Tener instalado Angular CLI. Desde una terminal ejecutamos el comando (npm install -g @angular/cli). Tener instalado NodeJS Tener instalado SQL Server 2019 Express Tener instalado Visual Studio 2022 Tener instalado Visual Studio Code

Procedimiento:

BASE DE DATOS
Ejecutar script de creacion de base de datos "BD-Challenge.sql" que se encuentra en la carpeta "ChallengeDataBase" 2) BACKEND

Abrir con Visual Studio 2022 el archivo de solucion llamado "CrudApi.sln" que se encuentra en la carpeta "Servidor". Abrir el archivo appsettings.json que se encuentra en la raiz del proyecto y editar la variable "DefaultConnection" con el valor de la cadena de conexion correspondiente de la base de datos que acabamos de crear. Compilar y ejecutar la aplicacion. Tomar nota de la direción (url) que aparece en el navegador ya que la usaremos en el FrontEnd

FRONTEND
Abrir una terminal en la carpeta Cliente. Ejecutar el comando "npm i". Abrir la carpeta Cliente con VSCode. Abrir el archivo src/enviroment/enviroment.ts y modificar la variable apiUrl por la url que se generó en la api. Nuevamente en la terminal ejecutamos el comando "npm start"

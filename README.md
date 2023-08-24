# Psychology Project

Hello, I'm studying computer engineering, and this is my modular project. My project is related to the automation of psychological tests. I have used Unity to automate the testing process based on the Wais book. Additionally, I have developed a web page using React to manage patients within the Unity environment. For the database, I have utilized MySQL, and for the backend, I've employed Java Spring Boot.

## Project Compilation Instructions (Windows)

 **First, we need to download some software.**
 
   - Install Apache Maven and set it in environment variables.
   - Download Java Development Kit 17.
   - Download Docker Desktop.
  
Copy the repository a go to the next path: JavaSpring\Psychologi2 When you are in run  the next command

**mvn clean install**

This will refresh the necessary JAR file to run the backend. Check if everything is okay, and at the end, you will see a “BUILD SUCCESSFUL” message.
Next, return to the root directory and execute the following command:

**docker-compose up -d --build**

This will create the container with the necessary images. Just so you know, this process might take some time, around 5-10 minutes depending on your internet connection.

Please ensure that the required ports for this project, which are 80, 3000, and 3306, are available at the time you run the Docker Compose file. Otherwise, you might encounter errors, and the necessary services might not work properly.

If everything is ok you can check the container (check it docker desktop) and join in the following link

**http://localhost:3000**

the page will display.

## Project Compilation Instructions (Linux)
Requari software to run in linux.
Need to download Maven 
Java JDK 17.
Install docker follow you can check the next URL https://docs.docker.com/engine/install/ubuntu/
...



If you have any ideas for implementing enhancements to my project or any feedback on my work, please feel free to send an email to jesus.jarr.30@gmail.com

# Español
Compilacion del proyecto 

 **First, we need to download some software.**
 
   - Instalar maven y poner la variable en el path.
   - Descargar el Java development kit 17.
   - Intalar docker.

Una vez descargado y con las varoables en el path 
ir al siguiente path "/JavaSpring/Psychologi2/"

correr el siguiete comando 

**mvn cean install**

Regresar el path principal del repositorio y correr el siguiente comando 

**docker-compose up -d --build**

Nota: en caso de estar en Windows asegurese que el motor de docker este corriendo al moemento de correr el comando  para evitar errors.

Este proceso se debe repetir en caso de que existan nuevas versiones 

## Docuemntacion API

Para consultar la documentacion de la API y poder hacer pruebas hacia la base de datos se puede usar postan o en caso de consultar las documetacion de Swagger asegurese de que el contenedor bac-end este activo asi como la el contendor de la base de datos.

Copiar y pegar en su navegador la siguiente ruta: http://localhost:8080/swagger-ui/index.html


Jesus Renteria.

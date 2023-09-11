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
- Requires software to run in Linux.
- Need to download Maven 
- Java JDK 17.
- Install docker You can check the next URL https://docs.docker.com/engine/install/ubuntu/
...

## Common Issues

If you encounter problems when starting Docker containers, make sure you have the necessary ports available for local execution. In this case, it's ports 3306, 80, and 3000. If any of these ports are occupied, the application won't deploy correctly.
Check the options to free up ports on your computer.


## Keep in touch

If you have any ideas for implementing enhancements to my project or any feedback on my work, please feel free to send an email to jesus.jarr.30@gmail.com

# Español

Hola, estoy estudiando ingeniería informática, y este es mi proyecto modular. Mi proyecto está relacionado con la automatización de pruebas psicológicas. He utilizado Unity para automatizar el proceso de prueba basado en el libro Wais. Además, he desarrollado una página web utilizando React para gestionar a los pacientes dentro del entorno de Unity. Para la base de datos, he utilizado MySQL, y para el backend, he empleado Java Spring Boot.

## Instrucciones de compilación del proyecto (Windows)

**Primero, necesitamos descargar algunos programas.**
 
   - Instala Apache Maven y configúralo en las variables de entorno.
   - Descarga Java Development Kit 17.
   - Descarga Docker Desktop.
  
Clonar el repositorio y ve a la siguiente ruta: JavaSpring\Psychologi2. Cuando estés ahí, ejecuta el siguiente comando:

**mvn clean install**

Esto actualizará los archivos JAR necesarios para ejecutar el backend. Comprueba que todo esté bien y al final verás un mensaje "BUILD SUCCESSFUL" (CONSTRUCCIÓN EXITOSA).
A continuación, regresa al directorio raíz y ejecuta el siguiente comando:

**docker-compose up -d --build**

Esto creará el contenedor con las imágenes necesarias. Solo para que sepas, este proceso puede llevar algún tiempo, alrededor de 5-10 minutos dependiendo de tu conexión a Internet.

Asegúrate de que los puertos necesarios para este proyecto, que son 80, 3000 y 3306, estén disponibles en el momento en que ejecutes el archivo Docker Compose. De lo contrario, podrías encontrar errores y es posible que los servicios necesarios no funcionen correctamente.

Si todo está bien, puedes verificar el contenedor (compruébalo en Docker Desktop) y acceder al siguiente enlace:

**http://localhost:3000**

La página se mostrará.

## Instrucciones de compilación del proyecto (Linux)

- Requiere software para ejecutarse en Linux.
- Necesitas descargar Maven.
- Java JDK 17.
- Instalar Docker, puedes consultar la siguiente URL: https://docs.docker.com/engine/install/ubuntu/
...


## Documentacion Servicos del back-end

Para consultar la documentacion de los servicos del bak-end y poder hacer pruebas hacia la base de datos, se puede usar el software postman o consulatr la documetacion de Swagger, Asegurese de que el contenedor de el back-end y el contenedor de la base de datos estan activos, depues necesita  oopiar y pegar en su navegador la siguiente ruta: http://localhost:8080/swagger-ui/index.html.

Esto le dara una vista de los setvicos que tiene y poder realizar pruebas para comprobar comportamientos de la aplicacion.

## Problemas comunes

Si tienes problemas al levantar los contenedores de Docker, asegúrate de tener libres los puertos que necesita para ejecutarse localmente. En este caso, son los puertos 3306, 80 y 3000. Si alguno de estos puertos está ocupado, la aplicación no se podrá desplegar correctamente.
Revise las opciones para liberar los puertos de su computadora.


## Contactame
Si tienes ideas para implementar mejoras en mi proyecto o cualquier comentario sobre mi trabajo, no dudes en enviarme un correo electrónico a jesus.jarr.30@gmail.com.

Saludos
Jesus Renteria.

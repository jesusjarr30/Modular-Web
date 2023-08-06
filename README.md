# Project Compilation Instructions

 **First, we need to download some software.**
 
   - Install Apache Maven and set it in environment variables.
   - Download Java Development Kit 17.
   - Download Docker Desktop.
  
Copy the repository a go to the next path: JavaSpring\Psychologi2 when you are in run  the next command

**mvn clean install**

This will refresh the necessary JAR file to run the backend. Check if everything is okay, and at the end, you will see a “BUILD SUCCESSFUL” message.
Next, return to the root directory and execute the following command:

**docker-compose up -d --build**

This will create the container with the necessary images. Please note that this process might take some time, around 5-10 minutes depending on your internet connection.

Please ensure that the required ports for this project, which are 80, 3000, and 3306, are available at the time you run the Docker Compose file. Otherwise, you might encounter errors, and the necessary services might not work properly.

IF everything is ok you can check the container (check it it docker sdestop) join in thr next link

**http://localhost:3000**

the page will display.

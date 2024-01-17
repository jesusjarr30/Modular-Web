# Psychology Project

Hello, I'm studying computer engineering, and this is my modular project. My project is related to the automation of psychological tests. I have used Unity to automate the testing process based on the Wais book. Additionally, I have developed a web page using React to manage patients within the Unity environment. For the database, I have utilized MySQL, and for the backend, I've employed Java Spring Boot.

## Project Compilation Instructions (Windows or linux)

 **First, we need to download some software.**
 
   - Install Apache Maven and set it in environment variables.
   - Download Java Development Kit 17.
   - Download Docker
   
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

##run the WAIS TEST

Download Unity version 2021.4f1. Select the "Psicologia Wais" folder as the project path. Once Unity has finished loading, click the play button to run the project.

## Check API documentation

If all the containers are running, you can access the following URL that will show you the services of the API:

**http://localhost:8080/swagger-ui/index.html**

## Diagram

![Alt Text](Documentation/diagram.png)


## Common Issues

If you encounter problems when starting Docker containers, make sure you have the necessary ports available for local execution. In this case, it's ports 3306, 80, and 3000. If any of these ports are occupied, the application won't deploy correctly.
Check the options to free up ports on your computer.


## Keep in touch

If you have any ideas for implementing enhancements to my project or any feedback on my work, please feel free to send an email to jesus.jarr.30@gmail.com



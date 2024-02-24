#!/bin/bash

# Mensaje de confirmación
echo "Build All Script"

# Cambia al directorio del proyecto JavaSpring/Psychologi2
cd JavaSpring/Psychologi2 || exit

# Pregunta si se desea compilar los archivos de Java Spring Boot
echo "Do you want to compile the Java Spring Boot files? (y/n)"
read -r resp

# Convierte la respuesta a minúsculas
resp=$(echo "$resp" | tr '[:upper:]' '[:lower:]')

if [ "$resp" == "y" ]; then
    # Pregunta si se desea ejecutar las pruebas
    echo "Do you want to run the tests? (y/n)"
    read -r test
    test=$(echo "$test" | tr '[:upper:]' '[:lower:]')
    if [ "$test" == "y" ]; then
        mvn clean install
    else
        mvn clean install -DskipTests
    fi
else
    echo "Compilation skipped."
fi

# Cambia de regreso al directorio anterior
cd ../../ || exit

# Detiene todas las imágenes de Docker en ejecución
echo "Turning down all Docker containers"
docker stop "$(docker ps -q)"

# Ejecuta el archivo docker-compose
echo "Running the docker compose"
docker-compose up --build


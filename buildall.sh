#!/bin/bash
#colors
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
reset=$(tput sgr0)

# Mensaje de confirmación
echo "Build All Script"

echo "Check for containers"

#obtener los nombres de loc contenedores que estan arriba
containers=$(docker ps -a --format '{{.ID}} {{.Names}}')

while read -r container_id container_name; do
    if [[ $container_name = "back-end" || $container_name = "paginaPS" || $container_name = "mysqldb" ]]; then
        # Detener el contenedor
        docker stop "$container_id"
        # Eliminar el contenedor
        docker rm "$container_id"

        echo "${red}Contenedor $container_name eliminado${reset}"
        
    fi
done <<< "$containers"

echo "All application containers down"

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


# Ejecuta el archivo docker-compose
echo "Running the docker compose"
docker-compose up --build


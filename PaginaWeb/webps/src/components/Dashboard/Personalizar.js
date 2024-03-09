import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { MostrarAlerta } from "../Alertas/MostrarAlerta";

const Perzonalizar = ({ nombre, id }) => {
  //aqui van los resultados de la cionsulta http Request
  const [Psicologo, setPsicologo] = useState([]);
  //variables de uso para editar
  const [Name, setName] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmation, setConfirmation] = useState("");
  const [Current, setCurrent] = useState("");
  //variable para modificar los los estados del boton
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
    if (editable === false) {
      ModificarClick();
    }
  };
  //Estos estados se usan para la confirmacion
  const [data, setData] = useState([]);

  const ModificarClick = () => {
    const newData = {}; // Crear un objeto vacío para almacenar las modificaciones

    if (Psicologo.nombre !== Name) {
      console.log("El nombre fue modificado");
      newData.nombre = Name; // Agregar el nombre al objeto newData
    }
    if (Psicologo.apellidos !== Apellidos) {
      newData.apellidos = Apellidos; // Agregar los apellidos al objeto newData
    }
    if (Psicologo.telephone !== Telephone) {
      console.log("El teléfono fue modificado");
      newData.telephone = Telephone; // Agregar el teléfono al objeto newData
    }
    if (Psicologo.password === Password && Current === Confirmation) {
      console.log("Las contraseñas ingresadas son iguales");
      newData.password = Password; // Agregar la contraseña al objeto newData
    }
    if (Object.keys(newData).length > 0) {
      // newData tiene datos, por lo tanto, se han realizado modificaciones
      // Enviar solo un objeto JSON con todas las modificaciones al servidor
      // validar si el servidor tiene algo o no
      enviarSolicitudAlServidor(newData);
    } else {
      // No se han realizado modificaciones, no es necesario enviar la solicitud
      console.log("No se realizaron modificaciones.");
    }
  };

  {
    /* Funcion para obtener todos los datos de psicologo*/
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/getUser/{id}?id=" + id,
          { timeout: 5000 }
        );
        console.log(
          "Esta es la informacion que regreso el registro" + response.data
        );
        setPsicologo(response.data);
        setName(response.data.nombre);
        setEmail(response.data.email);
        setTelephone(response.data.telephone);
        setPassword(response.password);
        setApellidos(response.data.apellidos);

        console.dir(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const enviarSolicitudAlServidor = (newData) => {
    const url = "http://localhost:8080/UpdatePsy/" + id;

    // Establecer un tiempo de espera de 10 segundos (10000 milisegundos)
    const timeoutMillis = 5000;

    axios
      .put(url, newData, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        timeout: timeoutMillis, // Establecer el tiempo de espera
      })
      .then((response) => {
        // Manejar la respuesta aquí
        //console.log(response.newData);
        console.log("Se realizaron las modificaciones");
        //limpiar variables
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          //mostrarAlerta('Servidor', {
          //title: 'Error Personalizado',
          //text: 'Este es un mensaje personalizado para el error de servidor.',
          //});

          // La solicitud se canceló debido a que excedió el tiempo de espera
          console.error(
            "La solicitud se canceló debido a que excedió el tiempo de espera."
          );
        } else {
          // Manejar otros errores aquí
          console.error("Error:", error);
        }
      });
  };

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center">
      <h1 className="text-4xl font-semibold mt-1">
        Congifuracion Editar usuario
      </h1>

      <div className="w-full md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 flex flex-col p-6">
        {" "}
        {/* Cambiamos a 'flex-col' */}
        <div className="flex flex-row mb-4">
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              value={Name}
              readOnly={!editable}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Apellidos</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              value={Apellidos}
              readOnly={!editable}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          {" "}
          {/* Agregamos otro div para el segundo par de campos */}
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Correo</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              value={Email}
              readOnly={!editable}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Telefono</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Numero de celular o Casa"
              //type="number"
              value={Telephone.substring(0, 12)}
              onChange={(e) => setTelephone(e.target.value.substring(0, 12))}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="flex flex-row mb-4">
            <button
              onClick={toggleEditable}
              className={`py-2 px-4 rounded ${
                editable ? "bg-green-500 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {editable ? "Guardar" : "Editar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perzonalizar;

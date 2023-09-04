import React, { useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from "react-bootstrap";
//import { MostrarAlerta } from "../Alertas/MostrarAlerta";

const Perzonalizar = ({ nombre, id}) => {

  //aqui van los resultados de la cionsulta http Request
    const[Psicologo, setPsicologo] = useState([]);
    //variables de uso para editar
    const [Name,setName] = useState('');
    const [Apellidos,setApellidos] = useState('');
    const [Email,setEmail] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Password,setPassword] = useState('');
    const[Confirmation,setConfirmation] = useState('');
    const[Current,setCurrent] = useState('');
 //variable para modificar los los estados del boton
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };
 //Estos estados se usan para la confirmacion
  const [data,setData] = useState([]);

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
    // Enviar solo un objeto JSON con todas las modificaciones al servidor
    enviarSolicitudAlServidor(newData);
  };

    {/* Funcion para obtener todos los datos de psicologo*/ }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/getUser/{id}?id="+id, { timeout: 5000 });
            console.log("Esta es la informacion que regreso el registro"+response.data);
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
    {/* Funcion para modificar los datos de psicologo*/ }
    const fetchData = async () => {
          const response = await axios.get(''); // Reemplaza con tu URL de API
          console.log(response.data);
      };
    
{/**Metodo para poder hacer la modificaciones necesarias la objeto */}
const enviarSolicitudAlServidor = (newData) => {
 

  const url = "http://localhost:8080/UpdatePsy/"+id;

  // Establecer un tiempo de espera de 10 segundos (10000 milisegundos)
  const timeoutMillis = 5000;

  axios.put(url, newData, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    },
    timeout: timeoutMillis // Establecer el tiempo de espera
  })
  .then(response => {
    // Manejar la respuesta aquí
    console.log(response.newData);
    console.log("Se realizaron las modificaciones")
  })
  .catch(error => {
    if (error.code === 'ECONNABORTED') {
      
      //mostrarAlerta('Servidor', {
        //title: 'Error Personalizado',
        //text: 'Este es un mensaje personalizado para el error de servidor.',
      //});
      
      // La solicitud se canceló debido a que excedió el tiempo de espera
      console.error("La solicitud se canceló debido a que excedió el tiempo de espera.");
    } else {
      // Manejar otros errores aquí
      console.error("Error:", error);
    }
  });
};

    return (
<div className="w-full h-screen bg-gray-100  flex-col justify-center items-center">
  <h1 className="text-3xl font-bold mb-4">Personalización</h1>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Nombre:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Name} readOnly={!editable} onChange={(e) => setName(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Apellidos:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Apellidos} readOnly={!editable} onChange={(e) => setApellidos(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Telefono:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Telephone} readOnly={!editable} onChange={(e) => setTelephone(e.target.value)} />
  </div>

    <h2>Cambio de contraseña</h2>


  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Ingresa contraseña actual:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Current} readOnly={!editable} onChange={(e) => setCurrent(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Ingrese nueva contraseña: </p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Password} readOnly={!editable} onChange={(e) => setPassword(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">confirmme su nueva contraseña: </p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={Confirmation} readOnly={!editable} onChange={(e) => setConfirmation(e.target.value)} />
  </div>


  
  <div className="flex flex-row mb-4">
    <button
      onClick={toggleEditable}
      className={`py-2 px-4 rounded ${
        editable ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
      }`}
    >
      {editable ? 'Guardar' : 'Editar'}
    </button>
    
  </div>

</div>

    )
}
export default Perzonalizar;
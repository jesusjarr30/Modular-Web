import React, { useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from "react-bootstrap";

const Perzonalizar = ({ nombre, id}) => {
    const[Psicologo, setPsicologo] = useState([]);

    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Password,setPassword] = useState('');
    const[Password2,setPassword2] = useState('');
    const[Current,setCurrent] = useState('');

    const ModificarClick = () => {
      
    };
    {/* Funcion para obtener todos los datos de psicologo*/ }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/getUser/{id}?id="+id, { timeout: 5000 });
            console.log("Esta es la informacion que regreso el registro"+response.data);
            setPsicologo(response.data);
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
const updateData = () => {
  const url = "http://localhost:8080/UpdatePsy/a6855fbe-12d2-43d6-9b20-bdba035e20f6";
  const data = {
    nombre: "jose"
  };

  axios.put(url, data, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    // Manejar la respuesta aquí
    console.log(response.data);
  })
  .catch(error => {
    // Manejar errores aquí
    console.error("Error:", error);
  });
};



    return (
<div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
  <h1 className="text-3xl font-bold mb-4">Personalización</h1>

  <div className="mb-4">
    <label className="text-lg font-medium">Nombre actual: {Name} </label>
    <input
      className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Ingresa tu nombre"
      value={Name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label className="text-lg font-medium">Corregir tu teléfono</label>
    <input
      className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Ingresar teléfono"
      value={Telephone}
      onChange={(e) => setTelephone(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label className="text-lg font-medium">Cambio de contraseña</label>
    <input
      className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Contraseña anterior"
      type="password"
      value={Current}
      onChange={(e) => setCurrent(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label className="text-lg font-medium">Nueva contraseña</label>
    <input
      className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Contraseña nueva"
      type="password"
      value={Password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label className="text-lg font-medium">Confirmar nueva contraseña</label>
    <input
      className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Confirmar contraseña"
      type="password"
      value={Password2}
      onChange={(e) => setPassword2(e.target.value)}
    />
  </div>
  <Button onClick={ModificarClick}>Cambiar los valores del usuario</Button>
</div>

    )
}
export default Perzonalizar;
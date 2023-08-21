import React, { useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';




const Perzonalizar = ({ nombre, id}) => {
    const[Psicologo, setPsicologo] = useState('');

    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Password,setPassword] = useState('');
    const[Password2,setPassword2] = useState('');
    const[currect,setCurrent] = useState('');

    {/* Funcion para obtener todos los datos de psicologo*/ }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/getUser/{id}?id="+id);
            console.log(response);
            console.log("Esta es la informacion que se debe de imprimir")
            setPsicologo(response.data);
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


    return (
        <div className="flex w-full h-screen">
            <h1>perzonalizar</h1>
        <label className="text-lg font-medium">corregir tu nombre</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombr"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-lg font-medium">Corregir tu telefono</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="reigresar telefono"
          value={Telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      {/*Para el cambio de contraseña*/ }
        <label className="text-lg font-medium">Para el cambio de contraseña digita un contraseña anterio primero</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombr"
          value={Name}
          onChange={(e) => setCurrent(e.target.value)}
        />

        <label className="text-lg font-medium">Para el cambio de contraseña digita un contraseña anterio primero</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombr"
          value={Name}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <label className="text-lg font-medium">Para el cambio de contraseña digita un contraseña anterio primero</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombr"
          value={Name}
          onChange={(e) => setCurrent(e.target.value)}
        />

       </div>
    )
}
export default Perzonalizar;
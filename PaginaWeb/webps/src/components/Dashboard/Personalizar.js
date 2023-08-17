import React, { useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const Perzonalizar = ({ nombre, id }) => {
    const[Psicologo, setPsicologo] = useState('');

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
        </div>
    )
}
export default Perzonalizar;
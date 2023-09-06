import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Button } from "bootstrap";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ViewUser = () => {
    const location = useLocation();
    const rowData = location.state && location.state.rowData;
    
    const [id,setId] = useState(rowData && rowData.id)
    const [name, setName] = useState(rowData && rowData.name);
    const [email, setEmail] = useState(rowData && rowData.email);
    const [telephone,setTelephone] = useState(rowData && rowData.telephone);
    const [psychologistID, setPsychologistID] = useState(rowData && rowData.psychologistID);
    const [direccion,setDireccion] = useState(rowData && rowData.direccion);
    const [year,setYear] = useState(rowData && rowData.year);
    const [gameList, setGameList] = useState([]);

    const [editable, setEditable] = useState(false);
    const navigate = useNavigate();


  const [modifiedFields, setModifiedFields] = useState({
    name: false,
    email: false,
    telephone: false,
    direccion: false,
    year: false,
  });
  
  const handleFieldChange = (field, value) => {
    if (rowData && rowData[field] !== value) {
      setModifiedFields((prevModifiedFields) => ({
        ...prevModifiedFields,
        [field]: true,
      }));
    }
  };

  const mostrarCamposModificados = () => {
    const modifiedFieldNames = Object.keys(modifiedFields).filter(
      (field) => modifiedFields[field]
    );

    if (modifiedFieldNames.length > 0) {
      console.log("Campos modificados:");
      modifiedFieldNames.forEach((field) => {
        console.log(`${field}: ${eval(field)}`);
      });
    } else {
      console.log("Ningún campo ha sido modificado.");
    }
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/GetCustomerid/{id}?id="+id);
          console.log(response);
          console.log("Esta es la informacion que se debe de imprimir")
          setGameList(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    const toggleEditable = () => {
      setEditable(!editable);
    };
    
      
      const GenerarCodigo = async () => {
      
      
      try {
      const response = await axios.post('http://localhost:8080/addGame/{idUsuario}?idUsuario='+id);
      if(response.status === 200){
      //mostrarAlerta("Exito");
      console.log("Operacion realizada con exito");
      }
      // Aquí puedes realizar cualquier acción adicional después de registrar al psicólogo.
      } catch (error) {
      console.error('Error al hacer la consulta', error);
      // Aquí puedes manejar el error o mostrar un mensaje al usuario en caso de fallo.
      if (error.code === 'ECONNABORTED') {
      //mostrarAlerta('Servidor');
      console.log("error de sevidor")
      } else {
      //mostrarAlerta("Error desconocido");
      console.log("error desconocido")
      }
      }
      };

    return (
    <div className="w-full">


        <div className="flex justify-between items-center bg-blue-500 p-4">
        <button
          className="bg-blue-700 text-white px-4 py-2"
          onClick={() => navigate(-1)} // Utilizamos history.goBack() para volver atrás
        >
          Regresar
        </button>
        </div>
        <div className="text-center bg-blue-500">
            <h1 className="text-3xl font-bold">Paciente</h1>
        </div>
        <div>
            <h1>Datos del Paciente</h1>
        </div>

        <div className="flex flex-col mb-4 rounded-lg border-4 border-gray-200 p-4">

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Nombre:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={name} readOnly={!editable} onChange={(e) => setName(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Email:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={email} readOnly={!editable} onChange={(e) => setEmail(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Teléfono:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={telephone} readOnly={!editable} onChange={(e) => setTelephone(e.target.value)} />
  </div>


  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Dirección:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={direccion} readOnly={!editable} onChange={(e) => setDireccion(e.target.value)} />
  </div>

  <div className="flex flex-row mb-4">
    <p className="w-1/3 text-lg font-medium">Año de nacimiento:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={year} readOnly={!editable} onChange={(e) => setYear(e.target.value)} />
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
  <button className="py-2 px-4 rounded  bg-red-500" onClick={GenerarCodigo}> Genera codigo juego</button>
  </div>
</div>

        <div>
            <h1>Generacion codigos de juego</h1>
            

        </div>

        <div>
            <h1>Resultados</h1>
        </div>
        <div>
        {gameList.map((game, index) => (
        <div key={index} className="mb-12">
          <h3>Codigo Numero {index +1}</h3>
          <h3>Resultados del siguiente codigo: {game.codigo}</h3>
          <div className="grid grid-cols-5 gap-3 items-center">
        


        <div className="bg-red-800 rounded-lg flex flex-col items-center justify-center h-full">
          <h3 className="text-white text-center font-bold">Cubos</h3>
          <hr className="w-full border border-white " />
          <h3 className="text-white">Puntos: {game.cubos}</h3>
          <h3 className="text-white">Tiempo: {game.tcubos}</h3>
        </div>

        <div className=" bg-yellow-800 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Semejanzas</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.semejanzas}</h3>
        <h3 className="text-white">Tiempo: {game.tsemejanzas}</h3>
        </div>
        <div className=" bg-blue-800 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Digitos</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.digitos}</h3>
        <h3 className="text-white">Tiempo: {game.tdigitos}</h3>
        </div>
        <div className=" bg-purple-800 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Matriz</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.matriz}</h3>
          <h3 className="text-white">Tiempo: {game.tmatriz}</h3>
        </div>
        <div className=" bg-green-800 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Vocabulario</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.vocabulario}</h3>
          <h3 className="text-white" >Tiempo: {game.tvocabulario}</h3>
        </div>
        <div className=" bg-red-700 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Aritmetica</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.aritmetica}</h3>
          <h3 className="text-white">Tiempo: {game.taritmetica}</h3>
        </div>
        <div className=" bg-yellow-700 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">busqueda simbolos</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.busquedaS}</h3>
          <h3 className="text-white">Tiempo: {game.tbusquedaS}</h3>
        </div>
        <div className=" bg-blue-700 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Pluzze visual</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.pluzzeV}</h3>
          <h3 className="text-white">Tiempo: {game.tpluzzeV}</h3>
        </div>
        <div className=" bg-purple-700 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">test informacion</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.ptnInformacion}</h3>
          <h3 className="text-white">Tiempo: {game.tptnInformacion}</h3>
        </div>

        <div className=" bg-green-600 rounded-lg flex flex-col items-center justify-center h-full">
          <h3 className="text-white text-center font-bold">Claves de numeros</h3>
          <hr className="w-full border border-white " />
          <h3 className="text-white">Puntos: {game.claveNum}</h3>
          <h3 className="text-white">Tiempo: {game.tclaveNum}</h3>
        </div>
        <div className=" bg-red-600 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">lLetras numeros</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.letrasNum}</h3>
        <h3 className="text-white">Tiempo: {game.tletrasNum}</h3>
        </div>
        <div className=" bg-yellow-600 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Balanzas</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.balanzas}</h3>
          <h3 className="text-white">Tiempo: {game.tbalanzas}</h3>
        </div>
        <div className=" bg-blue-600 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">Comprensión</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.comprension}</h3>
          <h3 className="text-white">Tiempo: {game.tcomprension}</h3>
        </div>
        <div className=" bg-purple-600 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">cancelacion</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.cancelacion}</h3>
          <h3 className="text-white">Tiempo: {game.tcancelacion}</h3>
        </div>
        <div className=" bg-green-600 rounded-lg flex flex-col items-center justify-center h-full">
        <h3 className="text-white text-center font-bold">figCompleta</h3>
        <hr className="w-full border border-white " />
        <h3 className="text-white">Puntos: {game.figCompleta}</h3>
          <h3 className="text-white">Tiempo: {game.tfigCompleta}</h3>
        </div>
      </div>

          
        </div>
      ))}

        </div>
        
        
    </div>
    )


}
export default ViewUser;
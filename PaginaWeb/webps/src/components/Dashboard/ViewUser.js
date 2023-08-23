
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Button } from "bootstrap";
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
    <p className="w-1/3 text-lg font-medium">ID del Psicólogo:</p>
    <input className="w-2/3 h-12 text-lg px-2 border border-gray-300 rounded bg-white" type="text" value={psychologistID} readOnly={!editable} onChange={(e) => setPsychologistID(e.target.value)} />
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
  <button> Genera codigo juego</button>
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
        <div key={index}>
          <h3>Game ID: {game.id}</h3>
          <div class="grid grid-cols-5 gap-3 items-center">
        <div class="bg-red-500 rounded-lg">
          <h3>Cubos </h3>
          <h3>Puntos: {game.cubos}</h3>
          <h3>Tiempo: {game.tcubos}</h3>
        </div>
        <div class=" bg-yellow-500 rounded-lg">
        <h3>Semejanzas</h3>
        <h3>Puntos: {game.semejanzas}</h3>
        <h3>Tiempo: {game.tsemejanzas}</h3>
        </div>
        <div class=" bg-blue-500 rounded-lg">
        <h3>Digitos</h3>
        <h3>Puntos: {game.digitos}</h3>
        <h3>Tiempo: {game.tdigitos}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>Matriz</h3>
        <h3>Puntos: {game.matriz}</h3>
          <h3>Tiempo: {game.tmatriz}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>Vocabulario</h3>
        <h3>Puntos: {game.vocabulario}</h3>
          <h3>Tiempo: {game.tvocabulario}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>Aritmeticas</h3>
        <h3>Puntos: {game.aritmetica}</h3>
          <h3>Tiempo: {game.taritmetica}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>Busquedas</h3>
        <h3>Puntos: {game.busquedaS}</h3>
          <h3>Tiempo: {game.tbusquedaS}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>PluzzeV</h3>
        <h3>Puntos: {game.pluzzeV}</h3>
          <h3>Tiempo: {game.tpluzzeV}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>ptnInformacion</h3>
        <h3>Puntos: {game.ptnInformacion}</h3>
          <h3>Tiempo: {game.tptnInformacion}</h3>
        </div>

        <div class=" bg-white rounded-lg">
          <h3>claveNum</h3>
          <h3>Puntos: {game.claveNum}</h3>
          <h3>Tiempo: {game.tclaveNum}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>letrasNum</h3>
        <h3>Puntos: {game.letrasNum}</h3>
        <h3>Tiempo: {game.tletrasNum}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>balanzas</h3>
        <h3>Puntos: {game.balanzas}</h3>
          <h3>Tiempo: {game.tbalanzas}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>comprension</h3>
        <h3>Puntos: {game.comprension}</h3>
          <h3>Tiempo: {game.tcomprension}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>cancelacion</h3>
        <h3>Puntos: {game.cancelacion}</h3>
          <h3>Tiempo: {game.tcancelacion}</h3>
        </div>
        <div class=" bg-white rounded-lg">
        <h3>figCompleta</h3>
        <h3>Puntos: {game.figCompleta}</h3>
          <h3>Tiempo: {game.tfigCompleta}</h3>
        </div>
      </div>

          
        </div>
      ))}

        </div>
        
        
    </div>
    )


}
export default ViewUser;


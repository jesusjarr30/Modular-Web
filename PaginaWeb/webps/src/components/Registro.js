import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

function Registro(){

  const [Name,setName] = useState('');
  const [LastName,setLastName] = useState('');
  const [Email,setEmail] = useState('');
  const [Telephone,setTelephone] = useState('');
  const [Password,setPassword] = useState('');
  const[Password2,setPassword2] = useState('');

  const mostrarAlerta=()=>{
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: 'Faltan Campos por llenar!',
      footer: '<a href="">Olvido su contraseña?</a>',
      timer:3000,
      customClass: {
        footer: 'swal-footer',
      }
    })
  }
  const handleSubmit = async () => {
    try {
      const newPsychologist = {
        nombre: Name,
        apellidos: LastName,
        email: Email,
        telephone: Telephone,
        password: Password,
        password2: Password2
      };

      const response = await axios.post('http://localhost:8080/addPsychologist', newPsychologist);

      console.log('El psicólogo ha sido registrado con el ID:', response.data);
      // Aquí puedes realizar cualquier acción adicional después de registrar al psicólogo.
    } catch (error) {
      console.error('Error al registrar al psicólogo:', error);
      // Aquí puedes manejar el error o mostrar un mensaje al usuario en caso de fallo.
      if (error.code === 'ECONNABORTED') {
        alert('¡El servidor no responde! Por favor, intenta nuevamente más tarde.');
      } else {
        alert('Ocurrió un error al registrar al psicólogo. Por favor, intenta nuevamente.');
      }
    }
  };


    return (
      <div className="flex flex-col items-center w-full h-screen justify-center">
  <h1 className="text-4xl font-semibold mt-1">Registro de usuarios</h1>
  
  <div className="w-full md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 flex flex-col p-6"> {/* Cambiamos a 'flex-col' */}
    <div className="flex flex-row mb-4"> 
      <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium">Nombre</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombre"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium">Apellidos</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tus apellidos"
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          
        />
      </div>
    </div>
    <div className="flex flex-row mb-4"> {/* Agregamos otro div para el segundo par de campos */}
      <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium">Correo</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu correo"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium">Telefono</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Numero de celular o Casa"
          type="number"
          value={Telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
    </div>
    <div className="flex flex-row mb-4"> 
    
    <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium">Contraseña</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu contraseña"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mr-5 flex flex-col w-full md:w-10/12"> 
        <label className="text-lg font-medium ">Confirmar su contraseña</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa contraseña"
          value={Password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
    </div>
      
      {/*Button configurations*/ }

      <div className="flex flex-row mb-4"> 
        <div className="mr-5 flex flex-col w-full md:w-2/12 bg-red-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10]"> 
          <button className=" text-lg font-medium ">Cancelar</button>
        </div>   
        <div className="mr-5 flex flex-col w-full md:w-2/12"> 
          <button onClick={handleSubmit} className="text-lg font-medium bg-green-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10] ease-in-out">Registrar</button>
        </div>
      </div>
      

  </div>
</div>

    
    )
}
export default Registro;
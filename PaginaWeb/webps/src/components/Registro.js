import React from "react";

function Registro(){
    return (
      <div className="flex flex-col items-center w-full h-screen justify-center">
  <h1 className="text-4xl font-semibold mt-8">Registro de usuarios</h1>
  
  <div className="w-full md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 flex flex-col p-6"> {/* Cambiamos a 'flex-col' */}
    <div className="flex flex-row mb-4"> {/* Agregamos 'mb-4' para separación */}
      <div className="mr-5 flex flex-col w-full md:w-11/12"> 
        <label className="text-lg font-medium">Nombre</label>
        <input
          className='w-full  border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="mr-5 flex flex-col"> 
        <label className="text-lg font-medium">Apellidos</label>
        <input
          className='w-full md:w-96 border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
          placeholder="Ingresa tus apellidos"
          type="text"
        />
      </div>
    </div>
    <div className="flex flex-row"> {/* Agregamos otro div para el segundo par de campos */}
      <div className="mr-5 flex flex-col"> 
        <label className="text-lg font-medium">Correo</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
          placeholder="Ingresa tu correo"
        />
      </div>
      <div className="flex flex-col"> 
        <label className="text-lg font-medium">Telefono</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
          placeholder="Numero de celular"
          type="password"
        />
      </div>
    </div>
    <div className="flex flex-row"> 
    
    <div className="mr-5 flex flex-col"> 
        <label className="text-lg font-medium">Contraseña</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <div className="mr-5 flex flex-col"> 
        <label className="text-lg font-medium">Confirmar su contraseña</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
          placeholder="Ingresa contraseña"
        />
      </div>
    </div>
  </div>
</div>

    
    )
}
export default Registro;
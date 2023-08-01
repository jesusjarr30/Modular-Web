import { useState,useEffect } from "react";
import actualizar from '../Imagenes/iconos portada/actualizar-pagina.png';
import intenet from '../Imagenes/iconos portada/internet.png';
import moderno from '../Imagenes/iconos portada/Moderno.png';

export const Productos = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-gray-900">
            <p className="text-white text-2xl">Noestros porductos cuentan con</p>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8 mt-10'>
                
                <div className="w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className ="w-20 mx-auto mt-[-3rem]"src={moderno}/>
                    <h2 className="text-2xl font-bold text-center py-8">Diseño Moderno</h2>
                   
                    <div className="'text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-1">Pantallas llamativas para una interacción atractiva del usuario</p>
                    </div>
                </div>

                <div className="w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className ="w-20 mx-auto mt-[-3rem] bg-white"src={intenet}/>
                    <h2 className="text-2xl font-bold text-center py-8">Accesibilidad </h2>
                   
                    <div className="'text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-1">Consulta los datos de tus clientes cuando y donde quieras, desde cualquier dispositivo.</p>
                    </div>
                </div>

                <div className="w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className ="w-20 mx-auto mt-[-3rem] bg-white"src={actualizar}/>
                    <h2 className="text-2xl font-bold text-center py-8">Actualizaciones </h2>
                   
                    <div className="'text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-1">Mejoramos nuestros servicios según la retroalimentación de nuestros clientes, añadiendo más opciones</p>
                        
                    </div>
                </div>


            </div>
            
        </div>
  );
}

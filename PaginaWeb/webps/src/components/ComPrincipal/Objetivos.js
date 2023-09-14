import { useState,useEffect } from "react";
import motivacion from '../Imagenes/iconos portada/automatizacion.jpg';
export const Objetivos = () => {
    return (

            <div className="w-full bg-white py-16 px-4 ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={motivacion} />
            <div className='flex flex-col justify-center'>
              <p className='text-[#7087EF] font-bold text-lg'>Objetivos</p>
              <p className='md:text-4xl sm:text-3x1 text-2xl font-bold'>Plataforma de Automatización Psicológica</p>
              <p>
              Desarrollar una plataforma web interactiva y amigable que permita a los usuarios realizar pruebas psicológicas de manera autónoma y confiable.
              </p>

              <p>
                Integrar una amplia variedad de pruebas psicológicas reconocidas y validadas, cubriendo diferentes áreas de evaluación, como personalidad, inteligencia emocional y habilidades cognitivas.
                
                Garantizar la precisión y validez de las pruebas mediante un proceso riguroso de desarrollo y validación, asegurando que los resultados sean confiables y significativos para los usuarios.
        
                Estos objetivos ayudarán a guiar el desarrollo de la plataforma y asegurarán que se cumplan las expectativas tanto de los profesionales de la psicología como de los usuarios finales que utilicen las pruebas psicológicas en la plataforma.
              </p>
            </div>
            </div>
        </div>
    )
}
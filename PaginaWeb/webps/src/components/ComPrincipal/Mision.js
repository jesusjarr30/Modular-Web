import React from "react";
import motivacion from "../Imagenes/motivacion.png";
export const Mision = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={motivacion} />
        <div className="flex flex-col justify-center">
          <p className="text-[#7087EF] font-bold text-lg">Nuestra misión</p>
          <p className="md:text-4xl sm:text-3x1 text-2xl font-bold">
            Plataforma de Automatización Psicológica
          </p>
          <p>
            En Renteria Industries, nuestra misión es transformar la industria
            de la psicología a través de la innovación y la tecnología.
          </p>

          <p>
            Nuestra visión es ser líderes en el desarrollo y la implementación
            de herramientas tecnológicas en el ámbito de la psicología,
            brindando soluciones integrales y precisas que permitan a los
            profesionales de la salud mental mejorar la calidad de sus
            evaluaciones y tratamientos.
          </p>
        </div>
      </div>
    </div>
  );
};

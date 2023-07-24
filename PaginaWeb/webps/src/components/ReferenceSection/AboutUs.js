import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import JesusRenteria from '../Imagenes/yo.png';
import Bonilla from '../Imagenes/bonila.png';
import Nestor from '../Imagenes/Nestor.jpeg';

function AboutUs(){
  const containerStyle = {
    backgroundColor: '#d8d0d0',
  };

    const people = [
        {
            name: 'Jesus Alejandro Rodriguez Renteria',
            role: 'React Developer/ Java Developer / Database Administrator',
            imageUrl:JesusRenteria,
            encargo: '"Ingeniero en Computación',
            correo:'jesus.rodriguez5103@alumnos.udg.mx'
        },
        {
            name: 'Nestor Regalado Vivanco',
            role: 'Unity developer',
            imageUrl:Nestor,
            encargo: '"Ingeniero en Computación',
            correo:'Nestor@Nestor',
            },
            {
                name: 'Mtro. José Luis David Bonilla Carranza',
                role: 'Asesor',
                imageUrl:Bonilla,
                encargo: 'Maestro',
                correo:'cdcomp@cucei.ugd.mx'
                },
            
        // More people...
      ]
    
return (
    <div className="min-h-screen py-26 sm:py-10" style={containerStyle}>
        <div className= "text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-bounce">Acerca de nosotros: Proyecto de Psicologia</h2>
            <p className="mt-3 text-lg leading-8 text-gray-600 tracking-tight text-center mx-14">
            ¡Hola a todos! Somos un equipo de estudiantes de la Universidad de Guadalajara,
            comprometidos en completar nuestro proyecto modular como parte integral de nuestra 
            carrera. Como apasionados de la programación, nos encanta explorar nuevas tecnologías, 
            innovar y estar en constante aprendizaje. Nuestro objetivo es brindar soluciones tecnológicas 
            creativas y de calidad, aprovechando nuestra formación académica y nuestras habilidades técnicas. 
            Estamos entusiasmados por compartir nuestro conocimiento y experiencia mientras trabajamos en 
            colaboración para alcanzar el éxito en nuestros proyectos. ¡Bienvenidos a nuestro espacio!'
        </p>
        </div>

    <div className="mt-20 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce a nuestro equipo</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Formado por estudiantes de Ingeniería en Computación y maestros.
        </p>
      </div>
      <ul role="list" className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-4 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-4 bg-white px-2 py-4 rounded-3xl border-2 border-gray-200 hover:scale-[1.1] ease-in-out">
              <img className="h-20 w-20 " src={person.imageUrl} alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                <p className="text-sm font-semibold leading-6 text-gray-600">{person.correo}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
     
    )
}
export default AboutUs;
import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import JesusRenteria from '../Imagenes/yo.png';

function AboutUs(){
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
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            encargo: '"Ingeniero en Computación',
            correo:'Nestor@Nestor',
            },
            {
                name: 'Mtro. José Luis David Bonilla Carranza',
                role: 'Asesor',
                imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                encargo: 'Maestro',
                correo:'cdcomp@cucei.ugd.mx'
                },
            
        // More people...
      ]
    
return (
    <div className="bg-white min-h-screen py-26 sm:py-10">
        <div className= "text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acerca de nosotros: Proyecto de Psicologia</h2>
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

    <div className="mt-32 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce a nuestro equipo</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Formado por estudiantes de Ingeniería en Computación.
        </p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
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
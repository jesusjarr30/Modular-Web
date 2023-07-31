import { useLocation } from 'react-router-dom';
import control from '../Imagenes/control.png';
import cerebro from '../Imagenes/cerebro.png';
import user from '../Imagenes/User.png';
import settings from '../Imagenes/Setting.png';
import chat from '../Imagenes/Chat.png';
import { useState } from 'react';

const Inicio = () => {
  const Menus = [
    { title: "Inbox", src: chat },
    { title: "Cuentas", src: user, gap: true },
    { title: "Settings", src: settings },
  ];
  const location = useLocation();
  const data = location.state?.data || {};
  const [open, setOpen]= useState(true);

  return (
    <div className='flex'>
      <div className={` ${open ? "w-72" : "w-20 "} duration-300 h-screen p-4 pt-6 bg-blue-600 relative `}>  
        
        <img
          src={control}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-1 ${!open && "rotate-180"}`}
          onClick={()=> setOpen(!open)}
        />
        <div className="flex gap-x-4 justify-start items-center">
          <img
            src={cerebro}
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Menu</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt={Menu.title} /> {/* Corregir la ruta de la imagen aquí */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>

      </div>
      <div>
        <div className ="p-7 text-2x1 font-semibold flex-1 h-screen ">
          <h1>Bienvenido {data.nombre}</h1>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

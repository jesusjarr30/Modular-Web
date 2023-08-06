import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import control from '../Imagenes/control.png';
import cerebro from '../Imagenes/cerebro.png';
import user from '../Imagenes/User.png';
import settings from '../Imagenes/Setting.png';
import chat from '../Imagenes/Chat.png';
import userI from '../Imagenes/User.png';
import chart from '../Imagenes/Chart.png';
import search from '../Imagenes/Search.png';
import AddUser from './AddUser';
import Userlist from './Userlist';
import cerrar from '../Imagenes/cerrar-sesion.png';
import Ppc from '../Ppc';


const Inicio = () => {

  
  const Menus = [
    { title: "Registrar Usuarios", src: userI,  component:<Ppc  />},
    { title: "lista pacientes", src: search,  component: <Userlist /> },
    { title: "estadisticas", src: chart, component: <Userlist /> },
    { title: "Soporte", src: chat, gap: true, component: <Userlist /> },
    { title: "Configuracion", src: settings, component: <Userlist /> },
    { title: "Cerrar secion", src: cerrar, gap: true, component: <Userlist /> },

  ];
  const location = useLocation();
  const data = location.state?.data || {};
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setOpen(!open);
  };
  const [selectedComponent, setSelectedComponent] = useState(<AddUser />);

  const handleMenuClick = (index) => {
    setSelectedComponent(Menus[index].component);
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  const formattedDate = `${daysOfWeek[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()} ${currentDate.toLocaleTimeString()}`;

  return (
    <div className='flex'>
      <div className={` ${open ? "w-72" : "w-20 ml-0"} duration-300 h-screen p-0 pt-8 bg-blue-600 relative`}>
        <img
          src={control}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 ${!open && "rotate-180"}`}
          onClick={toggleSidebar}
        />
        <div className="flex p-4 gap-x-4 items-center">
          <img
            src={cerebro}
            className={`cursor-pointer w-10 duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
            Menu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-10" : "mt-2"} ${
                index === -1 && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(index)}
            >
              <img src={Menu.src} alt={Menu.title} className="ml-0 mr-2"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/*Termina el div de la barra*/}
      <div className="flex-1"> {/* Usamos "flex-1" para que tome el espacio restante */}
      <div className='font-semibold h-screen w-full'>
        <div className='bg-gray-800 text-white py-2 w-full flex justify-between'>
          <div className='flex w-full'>
            <h3 className='ml-4'>Bienvenido {data.nombre}</h3>
          </div>
          <div className='flex w-full justify-end '>
            <h3 className='mr-4'>{formattedDate}</h3>
          </div>
        </div>
        {selectedComponent}
      </div>
      {/**Div del componente a llamar */}
      
    </div>
  </div>
);




};

export default Inicio;

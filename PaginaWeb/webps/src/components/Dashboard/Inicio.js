import { useLocation } from 'react-router-dom';
import  control from '../Imagenes/control.png';
import { useState } from 'react';
const Inicio = () => {
  const location = useLocation();
  const data = location.state?.data || {}; // Si location.state es undefined, establecer data como un objeto vacío
  const [open, setOpen]= useState(true);
  return (
    <div className='flex'>
      <div className={` ${open ? "w-72" : "w-20 "} duration-300 h-screen bg-slate-800 p-5  pt-8 relative `}>Slider Bar 
      
        <img
        src={control}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)}
        />
      </div>
      <div className ="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>Home Page {data.nombre}</h1>
      </div>
    </div>
  );
};
  
  export default Inicio;
import React, { useState } from "react";
function Ppc() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const formattedDate = `${
    daysOfWeek[currentDate.getDay()]
  } ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()} ${currentDate.toLocaleTimeString()}`;

  return (
    <div className="flex">
      <div className="font-semibold flex-1 h-screen w-full">
        <div className="bg-gray-800 text-white py-2 w-full flex justify-between">
          <div className="flex w-full">
            <h1 className="ml-4">Bienvenido </h1>
          </div>
          <div className="flex w-full justify-end">
            <h1 className="mr-4">{formattedDate}</h1>
          </div>
        </div>
        <p>Hola mundo</p>
      </div>
      {/**Div del componete a llamar */}
    </div>
  );
}

export default Ppc;

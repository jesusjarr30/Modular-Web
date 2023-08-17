import React, { useState, useEffect } from "react";
import axios from "axios";

import DataTable from 'react-data-table-component';

const Userlist = ({ nombre, id }) => {
const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/GetCustomerPsicologo/{id}?idPsicologo="+id);
        console.log(response);
        console.log("Esta es la informacion que se debe de imprimir")
        setCustomerList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
        name: 'Nombre',
        selector: row => row.name,
    },
    {
      name:'Correo',
      selector: row => row.email,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
      name: 'Telefono',
      selector: row => row.telephone
    }
    
];
    // Add more columns as needed
  


  return (
    <div className="flex w-full h-screen justify-center ">
      <h1>Aqui va la lista de usuarios:</h1>
      <div className="w-32 md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 p-6">
        <DataTable 
          columns={columns}
          data={customerList}
        
        />
      </div>
    </div>
  );
}

export default Userlist;

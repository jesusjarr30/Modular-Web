import React, { useState, useEffect } from "react";
import axios from "axios";
import listaBorrar from '../Imagenes/Button_list/listaBorrar.png';
import listaEditar from '../Imagenes/Button_list/listaEditar.png';
import listaVer from '../Imagenes/Button_list/listaVer.png';

import DataTable from 'react-data-table-component';

const Userlist = ({ nombre, id }) => {
const [customerList, setCustomerList] = useState([]);
const [busqueda,setBusqueda] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/GetCustomerPsicologo/{id}?idPsicologo="+id);
        console.log(response);
        console.log("Esta es la informacion que se debe de imprimir")
        setCustomerList(response.data);
        setBusqueda(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

const handleEdit = (row) => {
  // Lógica para manejar la edición aquí
  console.log('handleGenerate llamada', row);
  // Lógica para generar resultados aquí
 
};

const handleGenerate = (row) => {
  // Lógica para generar resultados aquí
  console.log('handleGenerate llamada', row);
  // Lógica para generar resultados aquí
  
};

const customStyles = {
  rows: {
      style: {
          minHeight: '60px', // override the row height
          
      },
  },
  headCells: {
      style: {
          paddingLeft: '1px', // override the cell padding for head cells
          paddingRight: '1px',
      },
  },
  cells: {
      style: {
          paddingLeft: '1px', // override the cell padding for data cells
          paddingRight: '1px',
      },
  },
};


  const columns = [
    {
        name: 'Nombre',
        selector: row => row.name,
        sortable: true,
        width: '250px', // Anchura personalizada de la columna
    },
    {
      name:'Correo',
      selector: row => row.email,
      sortable: true,
      width: '250px', // Anchura personalizada de la columna
    },

    {
      name: 'Telefono',
      selector: row => row.telephone,
      sortable: true,
      width: '250px', // Anchura personalizada de la columna
      
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="flex">
      <img className="mr-4"
        src={listaEditar}
        alt="Editar"
        onClick={() => handleEdit(row)}
       
      />
      <img className="mr-4"
        src={listaBorrar}
        alt="Generar Resultados"
        onClick={() => handleGenerate(row)}
        
      />
      <img className="mr-4"
        src={listaVer}
        alt="Generar Resultados"
        onClick={() => handleGenerate(row)}
      />
    </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  
    

    // Add more columns as needed
  


  function handlerFilter(event) {
    const newData = customerList.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setBusqueda(newData)
  }

  return (
    <div className="flex w-full h-screen justify-center ">
      
      <div className="w-32 md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 p-6">
      <h1>Aqui va la lista de usuarios:</h1>
      <div className="text-end">
        <input type="text" onChange={handlerFilter}>

        </input>

      </div>
      <div className="container">
        <DataTable 
          columns={columns}
          data={busqueda}
          fixedHeader
          pagination
          customStyles={customStyles}

 
        
        />
        </div>
      </div>
    </div>
  );
}

export default Userlist;

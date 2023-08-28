import React, { useState, useEffect } from "react";
import axios from "axios";
import listaBorrar from '../Imagenes/Button_list/listaBorrar.png';
import listaEditar from '../Imagenes/Button_list/listaEditar.png';
import listaVer from '../Imagenes/Button_list/listaVer.png';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import ViewUser from "./ViewUser";
import Swal from 'sweetalert2';



const Userlist = ({ nombre, id }) => {
const [customerList, setCustomerList] = useState([]);
const [busqueda,setBusqueda] = useState([])

const navigate = useNavigate();

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

const handleVer = (row) => {
  // Lógica para manejar la edición aquí
  console.log('handleEdit llamada', row);
  navigate('/ViewUser', { state: { rowData: row } });
};
//para eliminar
const handleDelete = (row) =>{
  //boton para borrar 
  console.log("Entro en el apartado de eliminar")
  Swal.fire({
    title: 'Estas seguro que quieres eliminar a '+row.name+'?',
    text: "Todos los datos guardados en juegos tambien se eliminaran",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, quiero borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
        //piner aqui la http request que se necesita y piner uno de que no se puede conatra al servidor
        axios.delete('http://localhost:8080/deletCustomer/{id}?id='+row.id, {timeout: 5000})
        .then(response => {
          console.log('Delete successful:', response.data);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          //eliminar de la lista
          const updatedList = customerList.filter(item => item.id !== row.id);
        setCustomerList(updatedList);
        setBusqueda(updatedList);
          
        })
        .catch(error => {
          if (error.code === 'ECONNABORTED') {
            console.error('Request timeout:', error);
            Swal.fire('Error!', 'El servidor no está disponible.', 'error');
          } else {
            console.error('Error deleting:', error);
            Swal.fire('Error!', 'No se pudo eliminar el archivo.', 'error');
          }
        });

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}


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

        <button className="bg-green-500 rounded-full p-2 mr-2 w-24" onClick={() => handleVer(row)}>Ver</button>
      
      <img className="mr-4"
        src={listaBorrar}
        alt="Generar Resultados"
        onClick={() => handleDelete(row)}/>
      
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
      <h1>Lista pacientes:</h1>
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


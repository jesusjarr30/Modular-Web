import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';



const AddUser = ({ nombre, id }) => {
    
    const [Identificador,setIdentificador] = useState('0');
    const [Name,setName] = useState('');
    const [LastName,SetLastName]= useState('');
    const [Email,setEmail] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [PsychologistID,setPsychologistID] = useState(id);
    const [Direccion,setDireccion] = useState('');
    const [Year,setYear] = useState('');


    const mostrarAlerta=(tipo)=>{
      if(tipo ==="cancelar"){
        Swal.fire({
          title: 'Los datos no guadrados se perderan',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Seguir en el ',
          denyButtonText: `No gua`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
        if(tipo === "Servidor"){    
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Error no se udo extablecer conexion con el servidor',
          timer:3000,
          customClass: {
            footer: 'swal-footer',
          }
        })
      } else if(tipo === "Exito")
      {
        Swal.fire({
          icon: 'success',
          title: 'Listo...',
          text: 'Registrado con éxito!',
        }).then(() => {
          // Después de mostrar el SweetAlert de éxito, regresar a la página previa
          setDireccion('');
          setName('');
          setEmail('');
          setTelephone('');
          setYear('');
          SetLastName('');

        });
      } 
      else if(tipo ==="Error"){
        Swal.fire({
          title: 'Error',
          icon: 'info',
          text: 'El correo ya esta registrado con otra cuenta',
          timer:5000,
          customClass: {
            footer: 'swal-footer',
          }
        })
      }
    }
    const handleCancelarClick = () =>{
        console.log("Regresar a la portada de inicio");
        console.log("Nombre:" +nombre);
        console.log("el id es "+id);
        setDireccion('');
        setName('');
        setEmail('');
        setTelephone('');
        setYear('');
        SetLastName('');

    }

    const handleSubmit = async () => {

        if (!Name || !LastName || !Email || !Telephone || !Direccion || !Year) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          }) 
          Toast.fire({
            icon: 'warning',
            title: 'Necesita llenar todos los campos'
          })
          console.log(Name);
          console.log(LastName);
          console.log(Direccion);
          console.log(Year);
          console.log(Telephone);
          console.log(Email);
          return;
        }
        console.log("Nombre "+Name);
        console.log("lastname "+LastName);
        console.log("Direccion" +Direccion);
        console.log("year" +Year);
        console.log("telephone"+ Telephone);
        console.log("Elamil " +Email);

        try {
          const Customer = {
            id: Identificador,
            name: Name,
            Email: Email,
            telephone: Telephone,
            psychologistID: PsychologistID,
            direccion: Direccion,
            year: Year,
          };
          console.log("the customer Email after the "+Customer.Email)
    
          const response = await axios.post('http://localhost:8080/AddCustomer', Customer);
          
          if(response.status === 200){
            mostrarAlerta("Exito");
          }
          // Aquí puedes realizar cualquier acción adicional después de registrar al psicólogo.
        } catch (error) {
          console.error('Error al registarr al paciente:', error);
          // Aquí puedes manejar el error o mostrar un mensaje al usuario en caso de fallo.
          if (error.code === 'ECONNABORTED') {
            mostrarAlerta('Servidor');
          } else {
            mostrarAlerta("Error");
          }
        }
      };

    return (
      
        <div className="flex flex-col items-center w-full h-screen justify-center">
        
        <h1 className="text-4xl font-semibold mt-1">Registar clientes</h1>

        <div className="w-full md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 flex flex-col p-6"> {/* Cambiamos a 'flex-col' */}
        <div className="flex flex-row mb-4"> 
            <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium">Ingrese Nombre del paciente</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Ingresa nombre del cliente"
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium">Apellidos</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Ingresa tus apellidos"
                type="text"
                value={LastName}
                onChange={(e) => SetLastName(e.target.value)}
                
            />
            </div>
        </div>
        <div className="flex flex-row mb-4"> {/* Agregamos otro div para el segundo par de campos */}
            <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium">Correo</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Ingresa tu correo"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium">Telefono</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Numero de celular o Casa"
                type="number"
                value={Telephone}
                onChange={(e) => setTelephone(e.target.value)}
            />
            </div>
        </div>
        <div className="flex flex-row mb-4"> 
        
        <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium">Direccion del paciente</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Domicilio Paciente"
                value={Direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />
            </div>
            <div className="mr-5 flex flex-col w-full md:w-10/12"> 
            <label className="text-lg font-medium ">Año de nacimiento</label>
            <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
                placeholder="Año de nacimiento Numero"
                value={Year}
                type="number"
                onChange={(e) => setYear(e.target.value)}
            />
            </div>
        </div>
            
            {/*Button configurations p-4 pt-6*/ }
            <div className="flex flex-row mb-4"> 
            <div className="mr-5 flex flex-col w-full md:w-2/12 bg-red-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10]"> 
                <button onClick={handleCancelarClick} sclassName=" text-lg font-medium ">Cancelar</button>
            </div>   
            <div className="mr-5 flex flex-col w-full md:w-2/12"> 
                <button onClick={handleSubmit} className="text-lg font-medium bg-green-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10] ease-in-out">Registrar</button>
            </div>
            </div>
        </div>
        </div>
        )
}
export default AddUser;
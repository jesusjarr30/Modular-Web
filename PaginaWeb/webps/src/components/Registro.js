import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { addPsychologist } from "./api/Psychologist";

function Registro() {
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const handleCancelarClick = () => {
    window.history.back();
  };

  const mostrarAlerta = (tipo) => {
    if (tipo === "Servidor") {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "El correo ya esta registrado con otra cuenta",
        footer: '<a href="">Olvido su contraseña?</a>',
        timer: 3000,
        customClass: {
          footer: "swal-footer",
        },
      });
    } else if (tipo === "Exito") {
      Swal.fire({
        icon: "success",
        title: "Listo...",
        text: "Registrado con éxito!",
      }).then(() => {
        // Después de mostrar el SweetAlert de éxito, regresar a la página previa
        window.history.back();
      });
    } else if (tipo === "Error") {
      Swal.fire({
        title: "Error",
        icon: "info",
        text: "El correo ya esta registrado con otra cuenta",
        timer: 5000,
        customClass: {
          footer: "swal-footer",
        },
      });
    }
  };

  const handleSubmit = async () => {
    if (!Name || !LastName || !Email || !Telephone || !Password || !Password2) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      console.log();

      Toast.fire({
        icon: "warning",
        title: "Necesita llenar todos los campos",
      });
      return;
    }
    if (Password !== Password2) {
      const Toast2 = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast2.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
      });
      return;
    }
    try {
      const newPsychologist = {
        id: "",
        nombre: Name,
        apellidos: LastName,
        email: Email,
        telephone: Telephone,
        password: Password,
      };
      //const response = await axios.post('http://localhost:8080/addPsychologist', newPsychologist);
      const response = await addPsychologist(newPsychologist);
      //const response = axios.post('http://localhost:8080/addPsychologist', newPsychologist, { headers })

      if (response.status === 200) {
        mostrarAlerta("Exito");
      }
      // Aquí puedes realizar cualquier acción adicional después de registrar al psicólogo.
    } catch (error) {
      console.error("Error al registrar al psicólogo:", error);
      // Aquí puedes manejar el error o mostrar un mensaje al usuario en caso de fallo.
      if (error.code === "ECONNABORTED") {
        mostrarAlerta("Servidor");
      } else {
        mostrarAlerta("Error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center">
      <h1 className="text-4xl font-semibold mt-1">Registro de usuarios</h1>

      <div className="w-full md:w-11/12 bg-white px-8 py-10 rounded-3xl border-2 border-gray-200 mt-8 flex flex-col p-6">
        {" "}
        {/* Cambiamos a 'flex-col' */}
        <div className="flex flex-row mb-4">
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Ingresa tu nombre"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Apellidos</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Ingresa tus apellidos"
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          {" "}
          {/* Agregamos otro div para el segundo par de campos */}
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Correo</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Ingresa tu correo"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Telefono</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Numero de celular o Casa"
              type="number"
              value={Telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium">Contraseña</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Ingresa tu contraseña"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mr-5 flex flex-col w-full md:w-10/12">
            <label className="text-lg font-medium ">
              Confirmar su contraseña
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Ingresa contraseña"
              type="password"
              value={Password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        {/*Button configurations p-4 pt-6*/}
        <div className="flex flex-row mb-4">
          <div className="mr-5 flex flex-col w-full md:w-2/12 bg-red-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10]">
            <button
              onClick={handleCancelarClick}
              className=" text-lg font-medium "
            >
              Cancelar
            </button>
          </div>
          <div className="mr-5 flex flex-col w-full md:w-2/12">
            <button
              onClick={handleSubmit}
              className="text-lg font-medium bg-green-700 rounded-xl p-3 text-white active:scale-[.85] active:duration-75 hover:scale-[1.10] ease-in-out"
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registro;

import Swal from 'sweetalert2';

export const MostrarAlerta = (tipo, opciones = {}) => {
  //aqui van todas las alertas peronalizadas

  const defaultOptions = {
    title: 'Alerta', // Título predeterminado
    icon: 'info',    // Icono predeterminado
    text: '',         // Texto predeterminado
    timer: null,      // Temporizador predeterminado (sin límite de tiempo)
    customClass: {
      footer: 'swal-footer',

    },
    ...opciones,      // Fusiona las opciones personalizadas con las predeterminadas
  };

  const options = {
    ...defaultOptions,
    ...opciones, // Sobreescritura de opciones personalizadas
  };

  if (tipo === 'Servidor') {
    Swal.fire({
      ...options,
      icon: 'error',
      text: 'El correo ya está registrado con otra cuenta',
      footer: '<a href="">Olvidó su contraseña?</a>',
      timer: 3000,
    });
  } else if (tipo === 'Exito') {
    Swal.fire({
      
      icon: 'success',
      text: 'Registrado con éxito!',
    }).then(() => {
      // Después de mostrar el SweetAlert de éxito, regresar a la página previa
      window.history.back();
    });
  } else if (tipo === 'Error') {
    Swal.fire({
      ...options,
      icon: 'info',
      text: 'El correo ya está registrado con otra cuenta',
      timer: 5000,
    });
  }

  //este es un ejemplo de como se deberia de ver alertas
  if(tipo === "Servidor"){    
    Swal.fire({
      title: 'Error',
      icon: 'error',//los iconos despinibles para este tipo de tareas son las siguientes: error, succesful, warning, info
      //utilizar los warning para la

      text: 'El correo ya esta registrado con otra cuenta',
      footer: '<a href="">Olvido su contraseña?</a>',
      timer:3000,
      customClass: {
        footer: 'swal-footer',
      }
    })

  };
}
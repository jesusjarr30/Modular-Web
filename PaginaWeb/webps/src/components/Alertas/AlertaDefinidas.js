import Swal from 'sweetalert2';

class AlertasDefinidas{

    static ServidorTimeOut(mensaje) {
        Swal.fire({
          icon: 'warning',
          title: 'Time out',
          text: "El servidor no esta disponible porfavor contacte al administrador",
        });
      }
    static Editar(){
        Swal.fire({
          icon: 'success',
          title: 'Cambios guardados',
          text: "El servidor no esta disponible porfavor contacte al administrador",
        });
      }
    static ErrorRegistro(message){
        Swal.fire({
          icon: 'error',
          title: 'Datos invalidos',
          text: message,
        });
      }

}
export default AlertasDefinidas;
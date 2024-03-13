import Swal from "sweetalert2";

class AlertasDefinidas {
  static ServidorTimeOut(mensaje) {
    Swal.fire({
      icon: "warning",
      title: "Time out",
      text: "El servidor no esta disponible porfavor contacte al administrador",
    });
  }
  static Editar() {
    Swal.fire({
      icon: "success",
      title: "Cambios guardados",
      text: "El servidor no esta disponible porfavor contacte al administrador",
    });
  }
  static ErrorRegistro(message) {
    Swal.fire({
      icon: "error",
      title: "Datos invalidos",
      text: message,
    });
  }
  //mensajes que voy a usar para la parte de contactanos
  static ContactoFaltaDatos() {
    Swal.fire({
      icon: "warning",
      title: "Falta Datos",
      text: "Favor de completar su solicitud",
      timer: 5000,
    });
  }
  static ContactoExito() {
    Swal.fire({
      icon: "success",
      title: "Datos enviados",
      text: "Gracias por sus comentarios, estartemos en contacto",
    });
  }
  static ContactoServidor() {
    Swal.fire({
      icon: "info",
      title: "Servidor fuera de linea",
      text: "Nos apena mucho esta situación, estamos trabajando para estar en linea otra vez.",
      timer: 9000,
    });
  }
  //error del numero
  static ContactoErrorTelefono() {
    Swal.fire({
      icon: "error",
      title: "Telefono no valido",
      text: "Ingrese solo valores numericos!",
      timer: 9000,
    });
  }
  static ContactoErrorDesarollo() {
    Swal.fire({
      icon: "error",
      title: "Error de servidor ",
      text: "Porfavor pongase en conttacto con el administrador!",
      timer: 9000,
    });
  }
  //Alertas para el registro de usuario
  static RegistroErroryear() {
    Swal.fire({
      icon: "error",
      title: "Año de nacimiento no valido",
      text: "El año de nacieinto que se registro no es valido, por favor de revisar!",
    });
  }
  static RegistroErrorTelephone() {
    Swal.fire({
      icon: "error",
      title: "Telefono no valido ",
      text: "Ingrese un telefono valido de 10 caracteres!",
    });
  }
  static CodigoRegitroExito() {
    Swal.fire({
      icon: "success",
      title: "El codigo se registro con exito",
      text: "Revise la parte inferior para consulyar su nuevo codigo de juego",
    });
  }
  static ViewExito() {
    Swal.fire({
      icon: "success",
      title: "Guardado",
      text: "Los cambios se relizaron de manera correcta",
    });
  }
  static MissingPassword() {
    Swal.fire({
      icon: "success",
      title: "Revise su correo",
      text: "Se envio un correo a los administradorer, ellos se pondndran en contacto con usted para recuperar la cuenta",
    });
  }
}
export default AlertasDefinidas;

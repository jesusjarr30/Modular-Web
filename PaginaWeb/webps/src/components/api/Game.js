import AlertaDefinida from "../Alertas/AlertaDefinidas";
const BASE_URL = process.env.REACT_APP_API_URL;

//methos for the class Game

export const getCustomerGame = async (id) => {
  const url = `${BASE_URL}/GetCustomerGame/{id}?id=${id}`;
  const opciones = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        btoa(
          `${process.env.REACT_APP_BACK_END_USER}:${process.env.REACT_APP_BACK_END_PASSWORD}`
        ),
    },
  };
  console.log(opciones);
  console.log(url);
  try {
    const respuesta = await fetch(url, opciones);
    const status = respuesta.status;

    if (status === 200) {
      const datos = await respuesta.json(); // Obtener los datos en formato JSON
      console.log("Los datos son:", datos);
      return { datos }; // Devolver los datos
    } else {
      console.error("La solicitud no fue exitosa. Código de estado:", status);
      return {
        error: `La solicitud no fue exitosa. Código de estado: ${status}`,
      };
    }
  } catch (error) {
    console.error("Error al enviar datos:", error);
    return { error };
  }
};

export const GenerarCodigo = async (id) => {
  const url = `${BASE_URL}/addGame/\{idUsuario\}?idUsuario=${id}`;
  console.log("si esta entrando al metodo nuevo que mandamos llamar");
  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        btoa(
          `${process.env.REACT_APP_BACK_END_USER}:${process.env.REACT_APP_BACK_END_PASSWORD}`
        ),
    },
  };
  try {
    const respuesta = await fetch(url, opciones);
    const status = respuesta.status;

    if (respuesta.status === 200) {
      //mostrarAlerta("Exito");
      console.log("Operacion realizada con exito");
      AlertaDefinida.CodigoRegitroExito();
    }
    console.log(respuesta);

    return { respuesta };
  } catch (error) {
    console.error("Error al enviar datos:", error);
    return { error };
  }
};

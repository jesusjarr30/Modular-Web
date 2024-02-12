
const BASE_URL =  process.env.REACT_APP_API_URL;

//methos for the class Notes

export const addNotes = async (datos) =>{
    console.log("usuarios: "+process.env.REACT_APP_BACK_END_USER +" contraseña "+process.env.REACT_APP_BACK_END_PASSWORD)
    const url = `${BASE_URL}/AddNote`
    const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_BACK_END_USER}:${process.env.REACT_APP_BACK_END_PASSWORD}`)

        },
        body: JSON.stringify(datos)
      };
      try {
        const respuesta = await fetch(url, opciones);
        const status = respuesta.status;
        return { status }; 
       
      } catch (error) {
        console.error('Error al enviar datos:', error);
        return { error }
      }
    };


const BASE_URL = "http://localhost:8080";


//methos for the class Notes

export const addNotes = async (datos) =>{

    const url = '${BASE_URL}/AddNote'
    console.log("Entro al metodo nuevo que se esta creando");
    const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`jesus:jesus`)
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

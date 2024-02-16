const BASE_URL =  process.env.REACT_APP_API_URL;

//methos for the class Notes

export const addPsychologist = async (datos) =>{

    const url = `${BASE_URL}/addPsychologist`
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
        return { error }
      }
    };
  
    
export const loginBack = async(usuario,pass) =>{
  const url = `${BASE_URL}/find/{correo}/{pass}?correo=${usuario}&password=${pass}`
  const opciones = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_BACK_END_USER}:${process.env.REACT_APP_BACK_END_PASSWORD}`)
    },
  };

  try {
    const respuesta = await fetch(url, opciones);
    const status = respuesta.status;
    if (respuesta.ok) {
      const data = await respuesta.json();
      return { data, status }; // Devolver los datos y el estado HTTP
    }
    
    
   
  } catch (error) {
    console.error('Error al enviar datos:', error);
    return { error }
  }

}

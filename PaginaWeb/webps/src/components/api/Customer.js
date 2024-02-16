
export const BASE_URL=process.env.REACT_APP_API_URL;

export const addCustomer = async (datos) =>{

    
    
    const url = `${BASE_URL}/AddCustomer`
    const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_BACK_END_USER}:${process.env.REACT_APP_BACK_END_PASSWORD}`)
        },
        body: JSON.stringify(datos)
      };
      console.log(opciones);
      console.log(url);
      try {
        const respuesta = await fetch(url, opciones);
        const status = respuesta.status;
        return { status }; 
       
      } catch (error) {
        console.error('Error al enviar datos:', error);
        return { error }
      }
    };
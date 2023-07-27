import { useLocation } from 'react-router-dom';

const Inicio = () => {
  const location = useLocation();
  const data = location.state?.data || {}; // Si location.state es undefined, establecer data como un objeto vacío

  return (
    <div>
      <h2>Esta es la siguiente ventana</h2>
      <h1>Nombre: {data.nombre}</h1>
      <h1>Edad: {data.edad}</h1>
      <h1>Correo: {data.correo}</h1>
      {/* ... Otros campos de datos ... */}
    </div>
  );
};
  
  export default Inicio;
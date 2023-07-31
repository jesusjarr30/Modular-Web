import React, { useState } from 'react';
function Ppc(){
    const [showAlert, setShowAlert] = useState(false);

    const showAlertForSeconds = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000); // 4 segundos (4000 milisegundos)
    };
  
    return (
      <div>Hola
      </div>
    );
  };

export default Ppc;
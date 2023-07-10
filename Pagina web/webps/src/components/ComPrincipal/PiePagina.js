import React from 'react'
import cerebro from '../Imagenes/cerebro.png';
import { Link } from 'react-router-dom';

export const PiePagina = () => {  
    return(
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
            <div className="iconos">
                <img src={cerebro} alt="Logo"/>
            </div>
                <p className="font-bold">
                Renteria Industries. <br/>Brindando tecnología confiable desde el inicio de nuestra empresa en 2023
                </p> 
                
                <div className="grid grid-flow-col gap-4" >
            <Link to="/AboutUs">
              <a className="link link-hover" style={{ color: '#fff' }} onClick={() => console.log('Iniciar secci')}>Acerca de nosotros</a>
            </Link>
                <a className="link link-hover" style={{ color: '#fff' }}>Contactanos</a> 
                <a className="link link-hover" style={{ color: '#fff' }}>Registrate</a> 
               <br></br>
               <br></br>
               
                </div>
                <p>Copyright © 2023 - Todos los derechos reservados</p>
            </div> 
            <div>
                
                
            </div>
        </footer>
    )
}
export default PiePagina;

import { useState, useEffect } from "react";
import axios from 'axios';
import cerebro from '../Imagenes/cerebro.png';

///fañta importar los recursos que se necesitan
function Cuerpo () {

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData]=useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/find/{correo}/{pass}?correo='+ correo +'&password=' + password);
      setData(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
    console.log("Se termino la request la respuesta es "+JSON.stringify(data,null,2));
  };


  return (
    <div className="hero2 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Inicio de sección!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={fetchData}className="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
            <div className="iconos">
                <a href="#"><img src={cerebro} alt="" /></a>
              </div>
              <p>Copyright © 2023  <br/>All right reserved by ACME Industries Ltd</p>
            </div> 
            <div>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </footer>
    </div>
    
  )
}
export default Cuerpo;

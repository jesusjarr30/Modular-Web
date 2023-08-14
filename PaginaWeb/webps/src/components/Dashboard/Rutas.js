
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Personalizar from "./Personalizar";
import AddUser from "./AddUser";
import Support from "./Support";
import Userlist from "./Userlist";
import Ppc from '../Ppc';
import Estadisticas from './Estadisticas';


function Rutas() {
  return (
    <Router>
    <Routes>
      <Route path="Inicio/Personalizar" element={<Personalizar/>} />
      <Route path="Inicio/AddUser" element={<AddUser/>} />
      <Route path="Inicio/Support" element={<Support/>} />
      <Route path="Inicio/Userlist" element={<Userlist/>} />
      <Route path="Inicio/Ppc" element={<Ppc/>} />
      <Route path= "Inicio/Estadisticas" element={<Estadisticas/>}/>
      
    </Routes>
  </Router>
  );
}

export default Rutas;
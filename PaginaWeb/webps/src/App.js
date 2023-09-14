import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from "./components/Principal";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AboutUs from "./components/ReferenceSection/AboutUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactanos from "./components/ComPrincipal/Contactanos";
import Login2 from "./components/Login2";
import Ppc from "./components/Ppc";
import Inicio from "./components/Dashboard/Inicio";
import Personalizar from "./components/Dashboard/Personalizar";
import AddUser from "./components/Dashboard/AddUser";
import ViewUser from "./components/Dashboard/ViewUser";
import Calendario from './components/Dashboard/Calendario';
import Recuperacion from './components/Missing/PasswordMissing';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registro" element={<Registro/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Contactanos" element={<Contactanos/>}/>
      <Route path="/Login2" element={<Login2/>} />
      <Route path="/Ppc" element={<Ppc/>} />
      <Route path="Inicio/*" element={<Inicio/>} />
      <Route path="/Usuario" element={<AddUser/>}/>
      <Route path="/ViewUser" element={<ViewUser/>} />
      <Route path="/Calendario" element={<Calendario/>}/>
      <Route path="/Recuperacion" element={<Recuperacion/>}/>


      
    </Routes>
  </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from "./components/Principal";
import Login from "./components/Login";
import Registro from "./components/Registro";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registro" element={<Registro/>}/>
    </Routes>
  </Router>
  );
}

export default App;

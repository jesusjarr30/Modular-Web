import React from 'react'
import {NavBar} from "./ComPrincipal/NavBar";
import {Home} from "./ComPrincipal/Home";
import {PiePagina} from "./ComPrincipal/PiePagina";
import {Mision} from "./ComPrincipal/Mision";
import {Productos}from "./ComPrincipal/Productos";
import {Objetivos} from "./ComPrincipal/Objetivos";

function Principal() {
    return (

      <>
      <NavBar />
      <Home />
      <Mision/>
      <Productos/>
      <Objetivos/>
      <PiePagina />
       
      
      </>

      
    )
  }
  
  export default Principal;
  
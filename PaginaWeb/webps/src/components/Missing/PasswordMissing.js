import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import AlertasDefinidas from "../Alertas/AlertaDefinidas";

const PasswordMissing = () =>{

    const [email,SetEmail] = useState();

    const mensaje = () => {
        AlertasDefinidas.MissingPassword();

    }
    return(

            <div>
                <h1>Recuperacion de cuenta</h1>

            <input type="email" className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent' 
            placeholder="Ingresa tu nombre" 
            value={email}
            onChange={(e) => SetEmail(e.target.value)}/>

        <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={mensaje}
            ></button>

            </div>

            

    )
}
export default PasswordMissing;
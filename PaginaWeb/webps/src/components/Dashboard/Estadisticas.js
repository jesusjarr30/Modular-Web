import React from "react";

function Estadisticas (){
    return (
        <div className="w-full h-screen">
            <h1>Apartado de estadisticas</h1>
            <div className="grid grid-cols-2 gap-4">
                {/* Elemento 1 */}
                <div className="bg-gray-200 p-4">Numero de usuarios registrados</div>

                {/* Elemento 2 */}
                <div className="bg-gray-200 p-4">Numero de test completados</div>

                {/* Elemento 3 */}
                <div className="bg-gray-200 p-4">Grafico de horas en la que se realiza los test</div>

                {/* Elemento 4 */}
                <div className="bg-gray-200 p-4">Prueba mas dificil</div>

                {/* Elemento 5 */}
                <div className="bg-gray-200 p-4">prueba mas facil</div>

                {/* Elemento 6 */}
                <div className="bg-gray-200 p-4">No se que poner aqui xd</div>
            </div>
        </div>
    
    )
}
export default Estadisticas;
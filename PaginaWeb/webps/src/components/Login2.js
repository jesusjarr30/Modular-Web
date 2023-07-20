import React from "react";

function Login2(){
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="bg-white">
                    <h1 className="text-5xl font-semibold">Bienvenidos</h1>
                    <p className="font-medium text-lg text-gray-600 mt-4">Bienvenido, porfavor ingrese sus datos.</p>
                    <div className="mt-8">
                        <div>
                            <label className="text-lg font-medium">Correo</label>
                            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                 
                             placeholder="Ingresa tu correo"></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Contraseña</label>
                            <input classname="" placeholder="Ingresa tu contraseña" type="password"/>
                        </div>
                    </div>
                        <div>
                            <input
                            type="checkbox"
                            />
                            <lable>Recuerda contraseña pro 30 dias</lable>
                        </div>
                        <button>¿Olvido su contraseña?</button>
                </div>
            </div>

            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"> 
                    <div classname="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
                </div>
            <a>Hello World</a>
            </div>

        </div>
    )
}
export default Login2;
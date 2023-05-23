import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../dashboard/administrador/Error";
import { fetchLogin } from "../../data/usuarios";

const FormularioLogin = () => {

    const[email,setEmail]=useState("")
    const[contrasenia,setContrasenia]=useState("")
    const[error,setError]=useState(false)
    const[mensaje,setMensaje]=useState("")


    const handleSubmit= async (e)=>{
        e.preventDefault();
    if([email,contrasenia].includes("")){
        setMensaje("Complete los campos")
        setError(true)
    }
    
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
    setMensaje("el formato de mail no es valido")
    setError(true)
    }
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(specialChars.test(contrasenia)){
        setMensaje("La contraseña no puede tener caracteres especiales")
        setError(true)
        
    }
    //si todo sale bien...
    const resultado = await fetchLogin(email,contrasenia);



    console.log(resultado.status)
}


return (
    
    <div className="flex justify-center items-center w-full h-3/4">
        <form action="" className=" bg-white p-16 rounded-md shadow-lg w-96"
        onSubmit={handleSubmit}
        >
            {error&&<Error>{mensaje}</Error>}
        <label className="uppercase font-bold justify-center flex" htmlFor="usuario">
            Ingrese su Usuario:
        </label>
        <input
            className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
            type="text"
            id="usuario"
            placeholder="ejemplo@ejemplo.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
        />
        <label className="uppercase font-bold justify-center flex" htmlFor="contraseña">
            Ingrese su Contraseña:
        </label>
        <input
            className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
            type="password"
            value={contrasenia}
            onChange={e=>setContrasenia(e.target.value)}
        />
        <button
            className="bg-sky-600 text-white text-center font-bold p-3 uppercase rounded-md w-full hover:bg-sky-700 transition-colors"
            type="submit"
        >Ingresar
        </button>
        </form>
    </div>
    
);
};

export default FormularioLogin;

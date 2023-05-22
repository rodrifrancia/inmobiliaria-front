import React from "react";
import { Link } from "react-router-dom";

const FormularioLogin = () => {


return (
    
    <div className="flex justify-center items-center w-full h-3/4">
        <form action="" className=" bg-white p-16 rounded-md shadow-lg">
        <label className="m-6 uppercase font-bold" htmlFor="usuario">
            Ingrese su Usuario:
        </label>
        <input
            className="block border-2 m-6 p-3 rounded-sm"
            type="text"
            id="usuario"
            placeholder="ejemplo@ejemplo.com"
        />
        <label className="m-6 uppercase font-bold" htmlFor="contraseña">
            Ingrese su Contraseña:
        </label>
        <input
            className="block border-2 m-6 p-3 rounded-sm"
            type="password"
        />
        <Link
            className="bg-sky-600 text-white text-center font-bold p-3 uppercase rounded-md w-full hover:bg-sky-700 transition-colors"
            type="submit"
            to="/dashboard"
        >Ingresar
        </Link>
        </form>
    </div>
    
);
};

export default FormularioLogin;

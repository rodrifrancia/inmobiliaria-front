import React from "react";
import { Link } from "react-router-dom";

const FormularioRegister = () => {
return (
    <div className="flex justify-center items-center w-full h-3/4 mt-5 mb-5">
        <form
        action=""
        className="max-w-md bg-white p-10  rounded-md shadow-lg
        grid grid-cols-2 gap-2 place-items-baseline"
        >
        <label className="uppercase font-bold" htmlFor="nombre">
            Nombre:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="nombre"
        />
        <label className="uppercase font-bold" htmlFor="apellido">
            Apellido:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="apellido"
        />
        <label className="uppercase font-bold" htmlFor="dni">
            Dni:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="number"
            id="dni"
        />
        <label className="uppercase font-bold" htmlFor="usuario">
            Correo electronico:
        </label>
        <input
            className="border-2  p-1.5 rounded-sm mb-2 w-full"
            type="email"
            id="usuario"
        />
        <label className="uppercase font-bold " htmlFor="contraseña">
            Contraseña:
        </label>
        <input
            className="border-2  p-1.5 rounded-sm mb-2 w-full"
            type="password"
        />
        <label className="uppercase font-bold " htmlFor="contraseña">
            Repetir contraseña:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="password"
        />
        <Link
            className="bg-sky-600 text-white text-center font-bold p-3 w-full col-span-2 uppercase rounded-md mt-3 hover:bg-sky-700 transition-colors"
            type="submit"
            to="/dashboard"
        >
            Registro
        </Link>
        </form>
    </div>
);
};

export default FormularioRegister;

import React, { useState } from "react";
import CorreoImg from "../../img/correo.png";
import TelefonoImg from "../../img/telefono.png";
import { Outlet, Link, useNavigate,useLocation } from "react-router-dom";


const Header = ({ setTablaInmu, setTablaUsu, setFormul }) => {
    const navigate = useNavigate();
    const location= useLocation();
    const cuenta = JSON.parse(localStorage.getItem("datos"));

    let tipoUsuario;
    
    if(cuenta){
        tipoUsuario=cuenta[0].tipo_usuario;
    }else{
        tipoUsuario=null;
    }
    console.log(tipoUsuario)
    

    const handleCerrarSesion=()=>{
        localStorage.clear()
        navigate("/login")
    }

return (
    <div className="header">
    <div className="bg-sky-600 h-7 pr-48 pt-1 flex justify-end text-white ">
        <img className="w-6 h-6 p-1" src={TelefonoImg} alt="Icono Teléfono" />
        <p className="text-sm">351 4723512 - (11) 532157</p>
        <img className="w-6 h-6 p-1" src={CorreoImg} alt="Icono Correo" />
        <p className="text-sm">rodrigofrancia98@gmail.com</p>
    </div>
    <div className="flex justify-around bg-white py-1 shadow-md">
        <h3 className="text-3xl cursor-pointer p-4  font-bold w-52 hover:-translate-y-px">
        <Link to="/">
            Team{" "}
            <span className="bg-sky-600 shadow-lg text-white rounded-md p-1">
            Five
            </span>
        </Link>
        </h3>
        <nav>
        <ul className="flex space-x-16 pt-4 text-sky-600 font-bold uppercase">
            {tipoUsuario===null?(
                <>
                <li className="p-2 hover:-translate-y-px uppercase">
                <Link to="/">Inicio</Link>
                </li>
                <li className="p-2 hover:-translate-y-px uppercase">
                <Link to="/Login">Ingresar</Link>
                </li>
                <li className=" flex hover:-translate-y-px items-center">
                <Link className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer" to="/Register">Registrarse</Link>
                </li>
                </>
            ): tipoUsuario==="Admin" ? (
                <>
                {location.pathname==="/"?(
                    <>
                    <li className=" flex hover:-translate-y-px items-center">
                    <Link to="/dashboard">panel</Link>
                    </li>
                    <li className=" flex hover:-translate-y-px items-center">
                    <button className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer uppercase"
                    onClick={handleCerrarSesion}
                    >Cerrar Sesión</button>
                    </li>
                    </>
                ):(
                    <>
                    <li>
                <button
                    className="p-2 hover:-translate-y-px uppercase"
                    onClick={() => {
                    setTablaUsu(false);
                    setFormul(true);
                    setTablaInmu(true);
                    }}
                >Inmuebles</button>
                </li>
                <li>
                <button
                    className="p-2 hover:-translate-y-px uppercase"
                    onClick={() => {
                    setTablaUsu(true);
                    setFormul(false);
                    setTablaInmu(false);
                    }}
                >Usuarios</button>
                </li>
                <li className="p-2 hover:-translate-y-px uppercase">
                <Link to="/">Inicio</Link>
                </li>
                <li className=" flex hover:-translate-y-px items-center">
            <button className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer uppercase"
            onClick={handleCerrarSesion}
            >Cerrar Sesión</button>
            </li>
                    </>
                )}
                
            </>
            ) :tipoUsuario==="Usuario"? (
                <>
            <li className="p-2 hover:-translate-y-px uppercase">
            <Link to="/">Inicio</Link>
            </li>
            <li className="p-2 hover:-translate-y-px uppercase">
            <Link to="/account">Perfil</Link>
            </li>
            <li className=" flex hover:-translate-y-px items-center">
            <button className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer uppercase"
            onClick={handleCerrarSesion}
            >Cerrar Sesión</button>
            </li>
            </>
            ):null}
        </ul>
        </nav>
    </div>
    <Outlet />
    </div>
);
};

export default Header;

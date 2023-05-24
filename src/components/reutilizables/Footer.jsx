import React from "react";
import TelefonoImg from "../../img/telefono.png";
import CorreoImg from "../../img/correo.png";

const Footer = () => {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();

  return (
    <div className="bottom-0 w-full relative mt-10">
      <div className="w-full bg-gray-900 flex justify-evenly text-white items-center">
        <div>
          <p className="text-white p-5">
            © {anio} Team Five. All Rights Reserved.
          </p>
        </div>
        <div className="grid grid-rows-2 items-center p-1">
          <p className="text-white p-1">Contáctenos</p>
          <div className="flex p-1">
            <img
              className="w-8 h-8 p-1 bg-white rounded-sm"
              src={TelefonoImg}
              alt="Icono Teléfono"
            />
            <p className="pl-1">351 4723512 - (11) 532157</p>
          </div>
          <div className="flex p-1">
            <img
              className="w-8 h-8 p-1 bg-white rounded-sm"
              src={CorreoImg}
              alt="Icono Correo"
            />
            <p className="pl-1 pb-4 ">rodrigofrancia98@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import FormularioContacto from "./FormularioContacto";
import Carrusel from "./Carrusel";
import imgCasa from "../../img/casa1.jpg"
import obelisco from "../../img/obelisco2.jpg"

const fotos= [imgCasa,obelisco];


const Inmueble = ({ setVistaInmu, setPrincipal, abrirInmu }) => {
  const { titulo, descripcion, precio, totales, cubiertos } = abrirInmu;

  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="flex flex-col col-span-2 bg-white w-5/6 mx-auto mr-10 shadow-md rounded-md p-3">
        <h1 className="font-bold text-2xl text-center uppercase">{titulo}</h1>
        <p className="font-bold text-end text-xl pr-2">
            USD: <span className="">{precio}</span>
        </p>
        <Carrusel
        fotos={fotos}
        />
        
        <div className="w-full mb-2 mt-2 text-lg">
          <h2 className="font-bold border-b-2 p-2">Descripcion:</h2>
          <p className="p-2"><span>{descripcion}</span></p>
          <h3 className="font-bold border-b-2 p-2">Detalles:</h3>
          <p className="p-2">
            Metros totales: <span>{totales}</span>
          </p>
          <p className="p-2">
            Metros cubiertos: <span>{cubiertos}</span>
          </p>
        </div>
        <button
          className="bg-sky-600 text-white uppercase font-bold p-2 rounded-sm cursor-pointer hover:bg-sky-700 w-full mx-auto transition-colors"
          onClick={() => {
            setVistaInmu(false);
            setPrincipal(true);
          }}
        >
          Volver
        </button>
      </div>
      <div>
        <FormularioContacto />
      </div>
    </div>
  );
};

export default Inmueble;

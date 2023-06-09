import React from "react";
import Oferta from "./Oferta";

const ListadoOfertas = ({propiedades,setVistaInmu,setAbrirInmu}) => {
    const primeraOfertas = propiedades.slice(0, 6);
return (
    <div className="mb-8 bt-8">
    {propiedades && propiedades.length ? (
        <div>
    <div className="grid grid-cols-3 gap-5 mx-auto">
        {primeraOfertas.map((propi) => (
            <Oferta
            propie={propi}
            key={propi.id}
            setVistaInmu={setVistaInmu}
            setAbrirInmu={setAbrirInmu}
            />
        ))}
        </div>
        </div>
    ) : (
        <h1>No hay Propiedades en oferta</h1>
    )}
    </div>
);
};

export default ListadoOfertas;

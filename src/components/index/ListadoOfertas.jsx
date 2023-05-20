import React from "react";
import Oferta from "./Oferta";

const ListadoOfertas = ({propiedades}) => {


    console.log(propiedades)
return (
    <div className="mb-8 bt-8">
        
    {propiedades && propiedades.length ? (
        <div>
    <div className="grid grid-cols-3 gap-5 mx-auto">
        {propiedades.map((propi) => (
            <Oferta propie={propi}
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

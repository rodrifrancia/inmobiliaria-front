import React from 'react'
import Img from "../../img/foto-inmo.jpg";

const Principal = (principal, setPrincipal) => {
return (
    
        <div className="relative">
        <div className="absolute top-28 left-28 ">
            <h2 className="text-3xl text-white">
            " Tu propiedad al alcance <br />
            de tu mano "
            </h2>
            <h1 className="mt-5 text-4xl text-gray-950 font-bold hover:scale-110 hover:text-black transition-colors">
            Team Five inmuebles
            </h1>
        </div>
        <div>
            <img className="w-full h-96" src={Img} alt="Imagen Principal" />
        </div>
        <h3 className="text-3xl font-bold uppercase text-center py-6">
            Propiedades en oferta
        </h3>
        </div>
    
)
}

export default Principal
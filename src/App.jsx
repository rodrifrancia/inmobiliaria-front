import React, { useState } from "react";
import Img from "./img/foto-inmo.jpg";
import Ofertas from "./assets/Oferta";
import Footer from "./assets/Footer";
import Header from "./assets/Header";
import imgCasa from "./img/casa1.jpg"
import ListadoOfertas from "./assets/ListadoOfertas";

function App() {
  //const[propie,setPropie] = useState([])


  const propiedades =[
    {
      titulo: "Casa en Venta",
    descripcion: "Hermosa casa en carlos Paz etc...",
    precio:"500000",
    metrosTot:400,
    metrosCub:300,
    foto:imgCasa,
    },
    {
    titulo: "Terreno en Venta",
    descripcion: "Hermoso terreno en carlos Paz etc...",
    precio:"500000",
    metrosTot:400,
    metrosCub:300,
    foto:imgCasa,
    },
    {
    titulo: "Departamento en Venta",
    descripcion: "Hermoso departamento en carlos Paz etc...",
    precio:"500000",
    metrosTot:400,
    metrosCub:300,
    foto:imgCasa,
    },
    
]

  //setPropie(Propiedades)
  //console.log(Propiedades)

  return (
    <div className="">
        <Header/>
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
      <div className="flex justify-center">
        <ListadoOfertas
        propiedades={propiedades}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

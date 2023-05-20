import React, { useState } from "react";
import Footer from "../components/reutilizables/Footer";
import imgCasa from "../img/casa1.jpg";
import Header from "../components/reutilizables/Header";
import ListadoOfertas from "../components/index/ListadoOfertas";
import Principal from "../components/index/Principal";
import Inmueble from "../components/index/Inmueble";

function App() {
  const [principal, setPrincipal] = useState(true);
  const [formu, setFormu] = useState(false);
  const [tabla, setTabla] = useState(false);
  //vista inmueble
  const[vistaInmu,setVistaInmu]=useState(false)
  const[abrirInmu,setAbrirInmu]=useState({})


  const propiedades = [
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Terreno en Venta",
      descripcion: "Hermoso terreno en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Departamento en Venta",
      descripcion: "Hermoso departamento en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    }
  ];

  return (
    <div>
      <Header/>
      {vistaInmu?(
        <Inmueble
        setPrincipal={setPrincipal}
        setVistaInmu={setVistaInmu}
        abrirInmu={abrirInmu}
        />
      ):(
        <>
        <Principal/>
        <div className="flex justify-center">
          <ListadoOfertas
          propiedades={propiedades}
          setVistaInmu={setVistaInmu}
          setAbrirInmu={setAbrirInmu}
          />
        </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;

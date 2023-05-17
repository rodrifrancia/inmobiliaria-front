import React, { useState } from "react";
import Footer from "../components/reutilizables/Footer";
import imgCasa from "../img/casa1.jpg";
import Header from "../components/reutilizables/Header";
import ListadoOfertas from "../components/index/ListadoOfertas";
import Principal from "../components/index/Principal";

function App() {
  const [principal, setPrincipal] = useState(true);
  const [formu, setFormu] = useState(false);
  const [tabla, setTabla] = useState(false);
 

  const propiedades = [
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Terreno en Venta",
      descripcion: "Hermoso terreno en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Departamento en Venta",
      descripcion: "Hermoso departamento en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      metrosTot: 400,
      metrosCub: 300,
      foto: imgCasa,
    }
  ];

  return (
    <div>
      <Header />
        <Principal />
        <div className="flex justify-center">
          <ListadoOfertas propiedades={propiedades} />
        </div>
      <Footer />
    </div>
  );
}

export default App;

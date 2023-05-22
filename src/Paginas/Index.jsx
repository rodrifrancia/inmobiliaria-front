import React, { useRef, useState,useEffect } from "react";
import Footer from "../components/reutilizables/Footer";
import imgCasa from "../img/casa1.jpg";
import obelisco2 from "../img/obelisco2.jpg"
import Header from "../components/reutilizables/Header";
import ListadoOfertas from "../components/index/ListadoOfertas";
import Principal from "../components/index/Principal";
import Inmueble from "../components/index/Inmueble";
import { Fade } from "react-awesome-reveal";

function App() {
  const [principal, setPrincipal] = useState(true);
  const [formu, setFormu] = useState(false);
  const [tabla, setTabla] = useState(false);
  //vista inmueble
  const[vistaInmu,setVistaInmu]=useState(false)
  const[abrirInmu,setAbrirInmu]=useState({})
  const imageRef = useRef(null)

  
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agregar estilos en línea para aplicar la transición
          imageRef.current.style.opacity = 1;
          imageRef.current.style.transition = 'opacity 1s ease-in-out';         
        }else{
          imageRef.current.style.opacity = 0;
        }
      });
    };
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersection,options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);



  const propiedades = [
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
    },
    {
      titulo: "Terreno en Venta",
      descripcion: "Hermoso terreno en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
    },
    {
      titulo: "Departamento en Venta",
      descripcion: "Hermoso departamento en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
    },
    {
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
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
        <div ref={imageRef} className="relative opacity-0 transition-opacity mt-10 mb-10">
        <img className="w-full h-80" src={obelisco2} alt="9 de Julio" />
        <div className="bg-black bg-opacity-70 absolute w-full h-full flex top-0 left-0 items-center ">
          <Fade delay={1e3} cascade damping={1e-2} className="text-white text-3xl border-l-2 p-2 ml-36">Elegí tu mejor opción</Fade>
        </div>
        </div>
        <div className="flex justify-center">
        <ListadoOfertas
          propiedades={propiedades}
          setVistaInmu={setVistaInmu}
          setAbrirInmu={setAbrirInmu}
          />
        </div>
        <button className="flex justify-center bg-black mx-auto text-white uppercase font-bold p-2
          rounded-sm cursor-pointer hover:bg-opacity-80 transition-opacity">VER MAS</button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;

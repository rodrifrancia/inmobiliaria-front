import React, { useState } from 'react'
import Header from '../components/reutilizables/Header'
import Footer from '../components/reutilizables/Footer'
import Formulario from '../components/dashboard/administrador/Formulario'
import TablaInmuebles from '../components/dashboard/administrador/TablaInmuebles'

const Dashboard = () => {

  //arreglo de inmuebles
  const [inmuebles,setInmuebles] = useState([])
  //objeto inmueble
  const [inmueble, setInmueble] = useState({})
  //mensaje error
  const[error,setError] = useState(false)
  //estrellitas
  const [estrellas,setEstrellas]=useState("");

  console.log(inmueble)

  const fetchInmuebles =[
    {
      id:1,
      titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "786000",
      direccion:"manzana 94",
      ambientes: "3",
      metrosTot: 400,
      metrosCub: 300,
      calificacion: 1
    },
    {
      id:2,
      titulo: "Terreno en Venta",
      descripcion: "Hermoso terreno en carlos Paz etc...",
      precio: "234000",
      direccion:"manzana 21",
      ambientes: "3",
      metrosTot: 400,
      metrosCub: 300,
      calificacion: 3
    },
    {
      id:3,
      titulo: "Departamento en Venta",
      descripcion: "Hermoso departamento en Rio Tercero...",
      precio: "500000",
      direccion:"manzana 41",
      ambientes: "3",
      metrosTot: 400,
      metrosCub: 300,
      calificacion: 4
    },
    {
      id:4,
      titulo: "Casona en Venta",
      descripcion: "Hermosa casa en Mayu Sumaj...",
      precio: "2354000",
      direccion:"manzana 96",
      ambientes: "3",
      metrosTot: 400,
      metrosCub: 300,
      calificacion: 5
    }
  ]
  
  

  return (
    <div className='flex flex-col h-full '>
        <Header/>
        <div className='flex grid-cols-2 gap-9 lg:p-10 md:p-20 mx-auto min-w-full justify-center'>
        <Formulario
        inmueble={inmueble}
        setInmueble={setInmueble}
        inmuebles={inmuebles}
        setInmuebles={setInmuebles}
        error={error}
        setError={setError}
        fetchInmuebles={fetchInmuebles}
        estrellas={estrellas}
        setEstrellas={setEstrellas}
        />
        <TablaInmuebles
        //inmueble={inmueble}
        setInmueble={setInmueble}
        inmuebles={inmuebles}
        fetchInmuebles={fetchInmuebles}
        />
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard
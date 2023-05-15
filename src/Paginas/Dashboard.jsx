import React, { useEffect, useState } from 'react'
import Header from '../components/reutilizables/Header'
import Footer from '../components/reutilizables/Footer'
import Formulario from '../components/dashboard/administrador/Formulario'
import TablaInmuebles from '../components/dashboard/administrador/TablaInmuebles'
import Modal from '../components/dashboard/administrador/Modal'
import { fetchObtenerInmuebles,fetchEliminarInmueble } from '../data/inmuebles'

const Dashboard = () => {

  //todos los inmuebles
  const [todosInmuebles, settodosInmuebles] = useState([])
  //objeto inmueble
  const [inmueble, setInmueble] = useState({})
  //mensaje error
  const[error,setError] = useState(false)
  //modal advertencia
  const[modal,setModal] = useState(false)
  
  const[idEliminar,setIdEliminar] = useState(0)


  

    useEffect(() => {
      async function fetchData() {
        try {
          const datos = await fetchObtenerInmuebles()
          settodosInmuebles(datos) 
        } catch (error) {
          setError("Error fetching data");
        }
      }
      fetchData();
    }, []);

  
  
  const eliminarInmueble =async (id)=>{
    const inmueblesNoBorrados  = todosInmuebles.filter(inmu=> inmu.id!==id)
    settodosInmuebles(inmueblesNoBorrados)
    await fetchEliminarInmueble(id)
    await fetchObtenerInmuebles()
  }


  return (
    <div>
    {modal&&<Modal
    setModal={setModal}
    eliminarInmueble={eliminarInmueble}
    idEliminar={idEliminar}
    setIDeliminar={setIdEliminar}
    />}
    <div className='flex flex-col h-full '>
        <Header/>
        <div className='flex grid-cols-2 gap-9 lg:p-10 md:p-20 mx-auto min-w-full justify-center'>
        <Formulario
        inmueble={inmueble}
        setInmueble={setInmueble}
        error={error}
        setError={setError}
        todosInmuebles= {todosInmuebles}
        settodosInmuebles={settodosInmuebles}
        />
        <TablaInmuebles
        //inmueble={inmueble}
        setInmueble={setInmueble}
        eliminarInmueble={eliminarInmueble}
        todosInmuebles= {todosInmuebles}
        modal={modal}
        setModal={setModal}
        setIdEliminar={setIdEliminar}
        />
        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default Dashboard
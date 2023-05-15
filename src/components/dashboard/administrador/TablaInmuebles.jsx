import React, { useEffect } from 'react'
import Propiedad from './Propiedad'

const TablaInmuebles = ({setInmueble,eliminarInmueble, todosInmuebles,modal,setModal,setIdEliminar }) => {
  
  return (
    <div className='w-11/12'>
        <h3 className='font-bold text-center uppercase text-2xl '>tabla de propiedades</h3>
        <div className='h-screen overflow-y-scroll'>

          {todosInmuebles &&todosInmuebles.length>0?(
            <>
            {todosInmuebles.map(propie=>(

            <Propiedad
            key={propie.id}
            setInmueble={setInmueble}
            propie={propie}
            eliminarInmueble={eliminarInmueble}
            modal={modal}
            setModal={setModal}
            setIdEliminar={setIdEliminar}
            />

            ))}
            
            </>
          ):(
            <>
            <h3 className='text-2xl text-center mt-5'>Aún no tiene inmuebles cargados</h3>
            </>
          )}
          
          
        </div>
    </div>
  )
}

export default TablaInmuebles
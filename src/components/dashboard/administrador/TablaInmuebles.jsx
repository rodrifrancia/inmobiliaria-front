import React from 'react'
import Propiedad from './Propiedad'

const TablaInmuebles = ({inmuebles,fetchInmuebles,inmueble,setInmueble,eliminarInmueble}) => {
  return (
    <div className='w-11/12'>
        <h3 className='font-bold text-center uppercase text-2xl '>tabla de propiedades</h3>
        <div className='h-screen overflow-y-scroll'>

          {fetchInmuebles &&fetchInmuebles.length>0?(
            <>
            {fetchInmuebles.map(propie=>(

            <Propiedad
            setInmueble={setInmueble}
            propie={propie}
            eliminarInmueble={eliminarInmueble}
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
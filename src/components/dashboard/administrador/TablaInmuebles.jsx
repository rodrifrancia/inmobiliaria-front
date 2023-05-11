import React from 'react'
import Propiedad from './Propiedad'

const TablaInmuebles = () => {
  return (
    <div>
        <h3 className='font-bold text-center uppercase text-2xl'>tabla de propiedades</h3>
        <div className='h-1/2 overflow-y-scroll'>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
          <Propiedad/>
        </div>
    </div>
  )
}

export default TablaInmuebles
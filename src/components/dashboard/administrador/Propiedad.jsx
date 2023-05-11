import React from 'react'

const Propiedad = () => {
  return (
    <div className='bg-white p-5 mb-3 rounded-md shadow-md'>
        <p className='font-bold uppercase text-base'>
            Titulo: <span className='text-base font-normal lowercase'>casa en venta</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Precio: <span className='text-base font-normal lowercase'>80.000</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Ambientes: <span className='text-base font-normal lowercase'>4</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Superficie Total: <span className='text-base font-normal lowercase'>500</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Superficie Cubierta: <span className='text-base font-normal lowercase'>300</span>
        </p>
      
    </div>
  )
}

export default Propiedad

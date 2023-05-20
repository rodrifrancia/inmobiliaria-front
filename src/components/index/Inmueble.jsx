import React from 'react'
import FormularioContacto from './FormularioContacto'
import Carousel from './Carousel'


const Inmueble = ({setVistaInmu,setPrincipal,abrirInmu}) => {
  
  const{titulo,descripcion,precio,metrosTot,metrosCub,foto}=abrirInmu

  
  
  return (
    <div className='grid grid-cols-3 mt-10 gap-4 ml-16'>
      <div className='flex flex-col col-span-2 bg-white shadow-md rounded-md p-2'>
      <h1 className='font-bold text-2xl text-center p-2'>{titulo}</h1>
      <Carousel
      />
        <div className='w-3/4 mx-auto mb-2 mt-2 text-lg'>
        <h2 className='font-normal'><span>{descripcion}</span></h2>
        <p className='font-bold'>Precio: <span className=''>{precio}</span></p>
        <p className='font-bold'>Metros totales: <span>{metrosTot}</span></p>
        <p className='font-bold'>Metros cubiertos: <span>{metrosCub}</span></p>
        </div>
        <button className="bg-sky-600 text-white uppercase font-bold p-2 rounded-sm cursor-pointer hover:bg-sky-700 w-3/4 mx-auto transition-colors"
        onClick={()=>{
            setVistaInmu(false)
            setPrincipal(true)}}
        >Volver</button>
      </div>
      <div>
        <FormularioContacto/>
      </div>
    </div>
  )
}

export default Inmueble
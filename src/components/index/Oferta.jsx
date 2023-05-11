import React from 'react'


const Oferta = ({propie,setPropie}) => {

    const{titulo,descripcion,precio,metrosTot,metrosCub,foto}= propie


  return (
    <div className="w-auto bg-white shadow-md hover:translate-y-px hover:opacity-80 hover:cursor-pointer transition-opacity rounded-md"> 
        <div className=' text-gray-900 font-bold'>
            <img className='w-full h-56' src={foto} alt="Imagen Casa" />
            <div className='p-2'>
            <p>Titulo: <span>{titulo}</span></p>
            <p>Precio: <span>{precio}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Oferta
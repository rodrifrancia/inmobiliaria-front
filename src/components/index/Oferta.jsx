import React from 'react'


const Oferta = ({propie,setAbrirInmu,setVistaInmu}) => {

    const{titulo,descripcion,precio,direccion,totales,cubiertos,foto}= propie

    const handleVer=()=>{
      setVistaInmu(true)
      setAbrirInmu(propie)
    }

  return (
    <div className="w-auto bg-white shadow-md hover:translate-y-px rounded-sm"
    > 
        <div className='font-bold'>
            <img className='w-80 h-56 p-2 hover:opacity-80 hover:cursor-pointer' src={foto[0]} alt="Imagen Casa"
            onClick={handleVer}
            />
            <div className='p-2 grid grid-rows-2'>
            <div>
            <p className='col-span-2 text-center'><span>{titulo}</span></p>
            <p className='col-span-2 font-normal text-gray-500'>{direccion}</p>
            </div>
            <div className='flex justify-between pt-2'>
            <p>USD <span>{precio}</span></p>
            <button className='bg-sky-600 p-2 text-white rounded-sm hover:opacity-80 transition-opacity cursor-pointer'
            onClick={handleVer}
            >Ver Detalles</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Oferta
import React from 'react'


const Oferta = ({propie,setPropie,setVistaInmu}) => {

    const{titulo,descripcion,precio,metrosTot,metrosCub,foto}= propie

    const handleVer=()=>{
      setVistaInmu(true)
    }

  return (
    <div className="w-auto bg-white shadow-md hover:translate-y-px hover:opacity-80 hover:cursor-pointer transition-opacity rounded-md"> 
        <div className='font-bold'>
            <img className='w-full h-56' src={foto} alt="Imagen Casa" />
            <div className='p-2'>
            <p>Titulo: <span>{titulo}</span></p>
            <p>Precio: <span>{precio}</span></p>
            <button
            onClick={handleVer}
            >VER</button>
            </div>
        </div>
    </div>
  )
}

export default Oferta
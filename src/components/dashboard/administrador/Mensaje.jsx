import React from 'react'

const Mensaje = ({setModal,idEliminar,eliminarInmueble}) => {
  console.log(idEliminar)
  return (
    <div className='bg-white mx-auto max-w-md p-3 rounded-md'>
        <p className='p-3 mb-2 text-xl font-bold text-center'>¿Está seguro que desea eliminar este inmueble?</p>
        <div className='flex justify-evenly'>
        <button className='bg-red-600 p-3 px-5 hover:bg-red-700
        transition-color rounded-md text-white font-bold uppercase'
        onClick={()=>{setModal(false);
           eliminarInmueble(idEliminar);
          }}
        >Si</button>
        <button className='bg-emerald-600 p-3 px-5 hover:bg-emerald-700
        transition-colors rounded-md text-white font-bold uppercase'
        onClick={()=>setModal(false)}
        >No</button>
        </div>
    </div>
  )
}

export default Mensaje
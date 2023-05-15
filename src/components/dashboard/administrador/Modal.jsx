import React from 'react'
import Mensaje from './Mensaje'

const Modal = ({setModal,idEliminar,setIdEliminar,eliminarInmueble}) => {
  return (
    <div className='fixed flex items-center inset-0 w-full bg-black opacity-80'>
    <Mensaje
    setModal={setModal}
    idEliminar={idEliminar}
    setIdEliminar={setIdEliminar}
    eliminarInmueble={eliminarInmueble}
    />
    </div>
  )
}

export default Modal
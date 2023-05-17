import React from 'react'
import { fetchEliminarInmueble,fetchObtenerInmuebles } from '../../../data/inmuebles';
import { fetchEliminarUsuario ,fetchObtenerUsuarios } from '../../../data/usuarios';

const Modal = ({setModal,idEliminar,queEliminar, settodosInmuebles,setTodosUsuarios, setHideTable}) => {
 
  const handleEliminar= async()=>{
    console.log(queEliminar)
    
    switch (queEliminar) {

      case queEliminar= "propiedad":
        const resul1 = await fetchEliminarInmueble(idEliminar);
        console.log(resul1)
        if(resul1[0].status == 200){
          const respuesta1 = await fetchObtenerInmuebles()
          settodosInmuebles(respuesta1)
        } else {
          console.log(resul1[0].error)
        }
        setModal(false);
        break;
      case queEliminar = "usuario":
        const resul2 = await fetchEliminarUsuario(idEliminar);
        console.log(resul2)
        if(resul2[0].status == 200){
          const respuesta2 = await fetchObtenerUsuarios()
          setTodosUsuarios(respuesta2)
        } else {
          console.log(resul2[0].error)
        }
        setModal(false);
        break;
  }
  }
  const handleCerrar = () => {
    setModal(false);
    setHideTable(false)
  }


  return (
      <div className='fixed flex items-center inset-0 w-full bg-black bg-opacity-90'>
      <div className='bg-white mx-auto max-w-md p-3 rounded-md'>
        <p className='p-3 mb-2 text-xl font-bold text-center'>¿Está seguro que desea eliminar este {queEliminar}?</p>
        <div className='flex justify-evenly'>
        <button className='bg-red-600 p-3 px-5 hover:bg-red-700
        transition-color rounded-md text-white font-bold uppercase'
        onClick={handleEliminar}
        >Si</button>
        <button className='bg-emerald-600 p-3 px-5 hover:bg-emerald-700
        transition-colors rounded-md text-white font-bold uppercase'
        onClick={handleCerrar}
        >No</button>
        </div>
    </div>
    </div>
  )
}
export default Modal
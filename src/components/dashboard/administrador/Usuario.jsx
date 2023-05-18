import React,{useState} from 'react'
import { fetchObtenerTipoUsuario } from '../../../data/tipoUsuario'

const Usuario = ({usua, setHideTable, setModal,setIdEliminar,setEditUsua,setUsuario,setTiposUsu }) => {


    const{nombre,apellido,email,telefono,tipo,id}=usua
    const handleEliminar=(e)=>{
        e.preventDefault()
        setHideTable(true)
        setModal(true)
        setIdEliminar(id)
    }

    const handleEditar= async(e)=>{
        e.preventDefault()
        const resp = await fetchObtenerTipoUsuario()
        setTiposUsu(resp)
        setEditUsua(true)
        setUsuario(usua)
    }

return (
    <>
    <tr className='border-2 text-center '>
    <td className='border-2'>{nombre}</td>
    <td className='border-2'>{apellido}</td>
    <td className='border-2'>{email}</td>
    <td className='border-2'>{telefono}</td>
    <td className='border-2'>{tipo}</td>
    <td className='border-2'>
    <div className='flex p-1 space-x-3'>
        <button className='bg-emerald-600 p-1 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors'
        onClick={handleEditar}
        >Editar</button>
        <button className='bg-red-600 p-1 text-white font-bold rounded-md hover:bg-red-700 transition-colors'
        onClick={handleEliminar}
        >Eliminar</button>
    </div>
    </td>
</tr>
    </>
)
}

export default Usuario
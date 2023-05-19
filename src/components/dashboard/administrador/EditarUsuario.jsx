import React, { useEffect,useState } from 'react'
import { fetchObtenerUsuarios,fetchEditarUsuario } from '../../../data/usuarios'
import { Zoom,Fade } from 'react-awesome-reveal'
import "animate.css"


const EditarUsuario = ({usuario,editUsua,setEditUsua,tiposUsu,setTodosUsuarios}) => {
    const[nombreEd,setNombreEd]=useState(usuario.nombre)
    const[apellidoEd,setApellidoEd]=useState(usuario.apellido)
    const[telefonoEd,setTelefonoEd]=useState(usuario.telefono)
    const[tipo,setTipo]=useState(usuario.tipo)
    const[idUsuario,setId]=useState(usuario.id)

    const handleEditar= async(e)=>{
        e.preventDefault()
        const respu= await fetchEditarUsuario(nombreEd, apellidoEd,usuario.email, telefonoEd, tipo, idUsuario);
        if(respu.status===200){
            const actualizado= await fetchObtenerUsuarios()
            setTodosUsuarios(actualizado)
                setEditUsua(false)
        }
    }
    const handleCancelar=()=>{
            setEditUsua(false)
    }

return (
    <div className={'animate__animated animate__fadeIn w-2/4 bg-white mx-auto justify-center rounded-md shadow-md p-5 mt-10 max-md:h-80 transition-opacity'}>
        <form action="" className='flex flex-col'
        onSubmit={handleEditar}
        >
            <h3 className='text-center font-bold text-xl'>Editar usuario</h3>
        <label className="uppercase font-bold" htmlFor="nombre">
            Nombre:
        </label>
        <input
            className="border-2 p-1 rounded-md mb-2"
            type="text"
            id="nombre"
            value={nombreEd}
            onChange={(e)=>setNombreEd(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="apellido">
            Apellido:
        </label>
        <input
            className="border-2 p-1 rounded-md mb-2"
            type="text"
            id="apellido"
            value={apellidoEd}
            onChange={(e)=>setApellidoEd(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="mail">
            Teléfono:
        </label>
        <input
            className="border-2  p-1 rounded-md mb-2"
            type="telefono"
            id="telefono"
            value={telefonoEd}
            onChange={(e)=>setTelefonoEd(e.target.value)}
        />
        <label className='font-bold uppercase' htmlFor="tipo">Tipo de usuario</label>
        <select className='bg-gray-200 p-2 rounded-md mb-4 font-bold uppercase' name="tipo" id="tipo"
        defaultValue={tipo}
        onChange={e=>setTipo(e.target.value)}
        >
            <option className="p-1 uppercase" value="Seleccione">Seleccione</option>
            {tiposUsu.map(tipo=>(
            <option className='p-1 font-bold uppercase'
            defaultValue={tipo.nombreTipo}
                    key={tipo.id}
            >{tipo.nombreTipo}</option>))
            }
        </select>
        <div className='flex justify-around'>
        <button className='bg-emerald-600 p-2 rounded-md font-bold text-white uppercase hover:bg-emerald-700 transition-colors' 
        type='submit'
        value={idUsuario}
        >
            guardar cambios
        </button>
        <button className='bg-red-600 p-2 rounded-md font-bold text-white uppercase hover:bg-red-700 transition-colors'
        onClick={handleCancelar}
        >
            Cancelar
        </button>
        </div>
        </form>
    </div>
)
}

export default EditarUsuario
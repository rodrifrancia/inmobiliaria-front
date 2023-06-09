import React from 'react'
import Modal from "./Modal"
import { useState } from 'react'



const Propiedad = ({propie,settodosInmuebles,setInmueble }) => {

//modal advertencia
const[modal,setModal] = useState(false)
const[idEliminar,setIdEliminar]= useState("")
const[eliminarPropie,setEliminarPropie]=useState("")

    const handleEliminar=()=>{
        setModal(true)
        setIdEliminar(id)
        setEliminarPropie(propie)
    }


const {titulo,descripcion,precio,direccion,ambientes,totales,cubiertos,estrellas,id}=propie

return (
    <div className='bg-white p-5 mb-3 rounded-md shadow-md flex'>
        {modal&&<Modal
        idEliminar={idEliminar}
        setModal={setModal}
        queEliminar={"propiedad"}
        settodosInmuebles={settodosInmuebles}
        eliminarPropie={eliminarPropie}
        />}
        <div className='flex-grow'>
        <p className='font-bold uppercase text-base'>
            Titulo: <span className='text-base font-normal lowercase'>{titulo}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Descripcion: <span className='text-base font-normal lowercase'>{descripcion}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Precio: <span className='text-base font-normal lowercase'>{precio}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Dirección: <span className='text-base font-normal lowercase'>{direccion}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Ambientes: <span className='text-base font-normal lowercase'>{ambientes}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Superficie Total: <span className='text-base font-normal lowercase'>{totales}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Superficie Cubierta: <span className='text-base font-normal lowercase'>{cubiertos}</span>
        </p>
        <p className='font-bold uppercase text-base'>
            Calificación: <span className='text-base font-normal lowercase'>{estrellas}</span>
        </p>
        </div>
    <div className='flex items-center space-x-3'>
        <button className='bg-emerald-600 text-white font-bold p-2  rounded-md uppercase
        hover:bg-emerald-700 cursor-pointer transition-colors'
        onClick={()=>{setInmueble(propie)}}
        >Editar</button>
        <button className='bg-red-600 text-white font-bold p-2  rounded-md uppercase
        hover:bg-red-700 cursor-pointer transition-colors'
        onClick={handleEliminar}
        >Eliminar</button>
    </div>
    </div>
)
}

export default Propiedad

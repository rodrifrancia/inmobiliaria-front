import React from 'react'
import Error from '../dashboard/administrador/Error'
import { useState } from 'react'

const FormularioContacto = () => {

    const[nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")
    const[email,setEmail]=useState("")
    const[telefono,setTelefono] =useState("")
    const[error,setError]=useState(false)
    const[mensajeError,setMensajeError]=useState("")
    const[mensaje,setMensaje]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if([nombre,apellido,email,telefono,mensaje].includes("")){
            setMensajeError("Debe completar todos los campos")
            setError(true)
        }
    }

  return (
    <div>
        <form
        action=""
        className="max-w-md bg-white p-10 rounded-md shadow-lg
        grid grid-cols-2 gap-2 place-items-baseline"
        >
        <div className='flex w-full col-span-2 bg-gray-100 justify-center'>
        <h2 className='font-bold text-xl p-2'>Formulario de contacto</h2>
        </div>
        <div className='flex w-full col-span-2'>
        {error&&<Error>{mensajeError}</Error>}
        </div>
        <label className="uppercase font-bold" htmlFor="nombre">
            Nombre:
        </label>
        <input
            className="border-1 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="apellido">
            Apellido:
        </label>
        <input
            className="border-1 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="mail">
            Correo electronico:
        </label>
        <input
            className="border-1  p-1.5 rounded-sm mb-2 w-full"
            type="email"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="telefono">
            Teléfono:
        </label>
        <input
            className="border-2  p-1.5 rounded-sm mb-2 w-full"
            type="telefono"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
        />
        <label htmlFor="mensaje" className="uppercase font-bold col-span-2" >Mensaje:</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="10" className="border-1  p-1.5 rounded-sm mb-2 w-full col-span-2"
        value={mensaje}
        onChange={e=>setMensaje(e.target.value)}
        placeholder='¡Hola Team Five Inmuebles! Me interesa esta propiedad...'
        ></textarea>
        <button
            className="bg-sky-600 text-white text-center font-bold p-3 w-full col-span-2 uppercase rounded-md mt-3 hover:bg-sky-700 transition-colors"
            type="submit"
            onClick={handleSubmit}
        >
            Enviar
        </button>
        </form>
    </div>
  )
}

export default FormularioContacto
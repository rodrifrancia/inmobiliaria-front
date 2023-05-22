import React, { useState } from 'react'
import Error from "../dashboard/administrador/Error"
import { fetchAgregarUsuario } from '../../data/usuarios'


const FormularioRegistro = () => {

    const[nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")
    const[email,setEmail]=useState("")
    const[telefono,setTelefono] =useState("")
    const[tipo,setTipo]=useState("")
    const[contrasenia,setContrasenia]=useState("")
    const[repContra,setRepContra]= useState("")
    //mensajeError
    const[error,setError]=useState(false)
    const[mensaje,setMensaje]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if([nombre,apellido,email,telefono,contrasenia,repContra].includes("")){
            setMensaje("Complete todos los campos")
            setError(true)
            return;
        }
        if(contrasenia!=repContra){
            setMensaje("Las contraseñas deben ser iguales")
            setError(true)
            return;
        }
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        if(!regex.test(email)){
        setMensaje("el formato de mail no es valido")
        setError(true)
        return;
        }
        //si esta todo ok creamos el objeto
        const objUsuario={
            nombre,
            apellido,
            email,
            telefono,
            tipo,
            contrasenia
        }
        //enviamos el objeto al backend
        fetchAgregarUsuario(objUsuario)
        //limpiamos el form
        setNombre("")
        setApellido("")
        setEmail("")
        setTelefono("")
        setContrasenia("")
        setRepContra("")
        setMensaje("")
        setError(false)
        window.location.href = "/login"
    }

return (
    <div className="flex justify-center items-center w-full h-3/4 mt-5 mb-5">
        <form
        action=""
        className="max-w-md bg-white p-10  rounded-md shadow-lg
        grid grid-cols-2 gap-2 place-items-baseline"
        >
        <div className='flex w-full col-span-2'>
        {error&&<Error>{mensaje}</Error>}
        </div>
        <label className="uppercase font-bold" htmlFor="nombre">
            Nombre:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="apellido">
            Apellido:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
        />
        <label className="uppercase font-bold" htmlFor="mail">
            Correo electronico:
        </label>
        <input
            className="border-2  p-1.5 rounded-sm mb-2 w-full"
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
        <label className="uppercase font-bold " htmlFor="contrasenia">
            Contraseña:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="password"
            id='contrasenia'
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
        />
        <label className="uppercase font-bold " htmlFor="contrasenia2">
            Repetir contraseña:
        </label>
        <input
            className="border-2 p-1.5 rounded-sm mb-2 w-full"
            type="password"
            id='contrasenia2'
            value={repContra}
            onChange={(e) => setRepContra(e.target.value)}
        />
        <button
            className="bg-sky-600 text-white text-center font-bold p-3 w-full col-span-2 uppercase rounded-md mt-3 hover:bg-sky-700 transition-colors"
            type="submit"
            onClick={handleSubmit}
        >
            Registro
        </button>
        </form>
    </div>
)
}

export default FormularioRegistro
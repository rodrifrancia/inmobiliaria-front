import React from 'react'

const Inmueble = ({setVistaInmu,setPrincipal}) => {
  return (
    <div>
        <h1>Inmueble</h1>
        <button
        onClick={()=>{
            setVistaInmu(false)
            setPrincipal(true)}}
        >Volver</button>
    </div>
  )
}

export default Inmueble
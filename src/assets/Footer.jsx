import React from 'react'
import TelefonoImg from "../img/telefono.png"
import CorreoImg from "../img/correo.png"

const Footer = () => {

    const fechaActual = new Date()
    const anio = fechaActual.getFullYear()
  return (
    <div className='w-full bg-gray-900 mt-10 flex justify-evenly text-white'>
        <div><p className='text-white p-5 mt-12'>© {anio} Team Five. All Rights Reserved.</p>
        </div>
        <div className='grid grid-rows-2'>
        <p className='text-white p-5'>Contáctenos</p>
        <div>
        <img className="w-8 h-8 p-1 bg-white rounded-sm" src={TelefonoImg} alt="Icono Teléfono" />
        <p className="">351 4723512 - (11) 532157</p>
        </div>
        <div>
        <img className="w-8 h-8 p-1 bg-white rounded-sm" src={CorreoImg} alt="Icono Correo" />
        <p className="pb-5">rodrigofrancia98@gmail.com</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
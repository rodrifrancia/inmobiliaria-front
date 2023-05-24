import React from 'react';
import imgCasa from "../../../img/casa1.jpg"
import obelisco2 from "../../../img/obelisco2.jpg"
import avatar from "../../../img/avatar.jpg"

function PropietarioVista({objPersona}) {
  const propiedad = 
    {
    titulo: "Casa en Venta",
      descripcion: "Hermosa casa en carlos Paz etc...",
      precio: "500000",
      direccion:"Tucuman 241,Córdoba,Argentina",
      totales: 400,
      cubiertos: 300,
      foto: [imgCasa,obelisco2]
  }

  return (
      <div className="grid grid-cols-2 bg-white shadow-md rounded-md w-2/3 h-1/2 mt-10 mx-auto">
        <div>
        <h1 className="text-2xl font-bold p-4 uppercase">Propietario</h1>
      <img className='flex w-80 h-60 p-3' src={avatar} alt="foto perfil" />
        <p className='pl-2 mt-3 mb-2'><span className='font-bold'>Nombre:</span>  {objPersona.nombre}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Apellido:</span> {objPersona.apellido}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Teléfono:</span> {objPersona.telefono}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Email:</span> {objPersona.email}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Direccion:</span> {objPersona.direccion}</p>
        <div className='2xl:h-36'>

        </div>
        </div>
        <div>
          <h2 className='text-xl font-bold p-4 uppercase'>Propiedades a su nombre</h2>
        </div>
      </div>
  );
}

export default PropietarioVista;
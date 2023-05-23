import React from 'react';
import imgCasa from "../../../img/casa1.jpg"
import obelisco2 from "../../../img/obelisco2.jpg"
import avatar from "../../../img/avatar.jpg"

function PropietarioVista() {
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
  const propietario={
    nombre:"Carlos Eduardo",
    apellido:"Paez",
    telefono:"3123123",
    email:"example@example.com",
    direccion:"Tucuman 241,Córdoba,Argentina",
    foto:avatar
    }

  return (
      <div className="grid grid-cols-2 bg-white shadow-md rounded-md w-2/3 h-1/2 mt-10 mx-auto">
        <div>
        <h1 className="text-2xl font-bold p-4 uppercase">Propietario</h1>
      <img className='flex w-80 h-60 p-3' src={avatar} alt="foto perfil" />
        <p className='pl-2 mt-3 mb-2'><span className='font-bold'>Nombre:</span>  {propietario.nombre}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Apellido:</span> {propietario.apellido}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Teléfono:</span> {propietario.telefono}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Email:</span> {propietario.email}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Direccion:</span> {propietario.direccion}</p>
        </div>
        <div>
          <h2 className='text-xl font-bold p-4 uppercase'>Propiedades a su nombre</h2>
        </div>
      </div>
  );
}

export default PropietarioVista;
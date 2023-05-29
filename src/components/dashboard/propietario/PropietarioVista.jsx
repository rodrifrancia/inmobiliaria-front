import React, { useState } from 'react';
import imgCasa from "../../../img/casa1.jpg"
import obelisco2 from "../../../img/obelisco2.jpg"
import avatar from "../../../img/avatar.jpg"

function PropietarioVista({cuenta}) {
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
  const[foto,setFoto] = useState(null)
  
  const handleImagen=(e)=>{
    setFoto(e.target.files[0]);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData();
    console.log(foto)
    formData.append('file', foto);
    console.log(formData)
  }

  return (
      <div className="grid grid-cols-2 bg-white shadow-md rounded-md w-2/3 h-1/2 mt-10 mx-auto">
        <div>
        <h1 className="text-2xl font-bold p-4 uppercase">Propietario</h1>
      <img className='flex w-80 h-60 p-3' src={avatar} alt="foto perfil" />
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="foto" className='pl-2 mt-3 mb-2 font-bold'>Editar Foto</label>
        <input className='p-2 block' type="file" onChange={handleImagen}/>
        {foto&&<button className='bg-emerald-600 p-2 rounded-md m-2 font-bold text-white hover:bg-emerald-700 transition-colors'
        type='submit'>Guardar Cambios</button>}
        </form>
        <p className='pl-2 mt-3 mb-2'><span className='font-bold'>Nombre:</span>  {cuenta[0].nombre}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Apellido:</span> {cuenta[0].apellido}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Teléfono:</span> {cuenta[0].telefono}</p>
        <p className='pl-2 mb-2'><span className='font-bold'>Email:</span> {cuenta[0].email}</p>
        {/* <p className='pl-2 mb-2'><span className='font-bold'>Direccion:</span> {cuenta[0].direccion}</p> */}
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
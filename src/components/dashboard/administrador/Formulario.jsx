import React from 'react'

/*
id
descripcion
direccion
precio
ambientes
supTotal
supCubierta
calificacion
*/

const Formulario = () => {
  return (
    <div>
        <form action="" className='grid bg-white rounded-md p-5 shadow-lg'>
            <label htmlFor="" className='font-bold text-center text-2xl uppercase'>Cargar nueva propiedad</label>
            <label htmlFor="titulo" className='font-bold uppercase p-1'>Ingrese Titulo</label>
            <input type="text" id='titulo' className='rounded-sm border-2'/>
            <label htmlFor="descripcion" className='font-bold uppercase p-1'>Descripcion</label>
            <textarea name="descrip" id="descripcion" cols="30" rows="10" className='rounded-sm border-2'></textarea>
            <label htmlFor="precio" className='font-bold uppercase p-1'>Precio</label>
            <input type="text" id='precio' className='rounded-sm border-2'/>
            <label htmlFor="ambientes" className='font-bold uppercase p-1'>Cantidad de Ambientes</label>
            <input type="text" id='ambientes' className='rounded-sm border-2'/>
            <label htmlFor="supTotal" className='font-bold uppercase p-1'>Superficie Total</label>
            <input type="text" id='supTotal' className='rounded-sm border-2'/>
            <label htmlFor="supCubierta" className='font-bold uppercase p-1'>Superficie Cubierta</label>
            <input type="text" id='supCubierta' className='rounded-sm border-2'/>
            <label htmlFor="calificacion" className='font-bold uppercase p-1'>Calificacion</label>
            <input type="submit" className='w-full rounded-md bg-sky-600 p-3 mt-4 hover:bg-sky-700 transition-colors cursor-pointer text-white font-bold uppercase'
             value="Agregar Propiedad"/>
        </form>
    </div>
  )
}

export default Formulario
import React, { useState } from "react";
import { useEffect } from "react";
import Estrellitas from "./Estrellitas"
import Error from "./Error";

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

const Formulario = ({ inmueble, setInmueble, inmuebles, setInmuebles,error,setError,fetchInmuebles,estrellas,setEstrellas }) => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [direccion,setDireccion] = useState("");
  const [ambientes, setAmbientes] = useState("");
  const [totales, setTotales] = useState("");
  const [cubiertos, setCubiertos] = useState("");
  

  useEffect(() => {
    if (Object.keys(inmueble).length > 0) {
        setTitulo(inmueble.titulo)
        setDescripcion(inmueble.descripcion)
        setDireccion(inmueble.direccion)
        setPrecio(inmueble.precio)
        setAmbientes(inmueble.ambientes)
        setTotales(inmueble.metrosTot)
        setCubiertos(inmueble.metrosCub)
        setEstrellas(inmueble.estrellas)
    }
}, [inmueble])


  // useEffect(()=>{
  //   const consultarApi = async()=>{
  //     const url = "https://www.api.pedidosedificor.com.ar/alumnas"
  //     const respuesta= await fetch(url)
  //     const resultado = await respuesta.json()
  //     console.log(resultado)
  //   }
  //   consultarApi()
  // },[])

      const handleSubmit =(e)=>{
        e.preventDefault()
          //verificamos si hay espacios en blanco
        if([titulo,descripcion,precio,direccion,ambientes,totales,cubiertos,estrellas].includes("")){
          setError(true)
          return;
        }
        
        //si esta todo bien creamos el objeto inmueble
          const objInmueble ={
            titulo,
            descripcion,
            precio,
            direccion,
            ambientes,
            totales,
            cubiertos,
            estrellas
          }
          setError(false)
          
        
          if(inmueble.id){
            //si es editar lo actualizamos
            objInmueble.id= inmueble.id
            const inmueblesActualizados = inmuebles.map(inmuebleState => inmuebleState.id ===
              inmueble.id ? objInmueble : inmuebleState)
          setInmuebles(inmueblesActualizados)
          setInmueble({})
          }else{
            //si es crear lo guardamos
            setInmuebles([...fetchInmuebles,objInmueble])
          }
        //limpiar el form
        setTitulo("");
        setDescripcion("");
        setPrecio("");
        setDireccion("");
        setAmbientes("");
        setTotales("");
        setCubiertos("");
        setEstrellas("");

      }

  return (
    <div className="w-11/12">
      <h3 htmlFor="" className="font-bold text-center text-2xl uppercase ">
        Cargar nueva propiedad
      </h3>
      <form action="" className="grid bg-white rounded-md p-5 shadow-lg">
        <label htmlFor="titulo" className="font-bold uppercase p-1">
          Ingrese Titulo:
        </label>
        <input
          type="text"
          id="titulo"
          className="rounded-sm border-2"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="descripcion" className="font-bold uppercase p-1">
          Descripcion:
        </label>
        <textarea
          name="descrip"
          id="descripcion"
          cols="30"
          rows="10"
          className="rounded-sm border-2"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <label htmlFor="precio" className="font-bold uppercase p-1">
          Precio:
        </label>
        <input
          type="number"
          id="precio"
          className="rounded-sm border-2"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

<label htmlFor="direccion" className="font-bold uppercase p-1">
          Ingrese Direccion:
        </label>
        <input
          type="text"
          id="direccion"
          className="rounded-sm border-2"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <label htmlFor="ambientes" className="font-bold uppercase p-1">
          Cantidad de Ambientes:
        </label>
        <input
          type="text"
          id="ambientes"
          className="rounded-sm border-2"
          value={ambientes}
          onChange={(e) => setAmbientes(e.target.value)}
        />

        <label htmlFor="supTotal" className="font-bold uppercase p-1">
          Superficie Total:
        </label>
        <input
          type="text"
          id="supTotal"
          className="rounded-sm border-2"
          value={totales}
          onChange={(e) => setTotales(e.target.value)}
        />

        <label htmlFor="supCubierta" className="font-bold uppercase p-1">
          Superficie Cubierta:
        </label>
        <input
          type="text"
          id="supCubierta"
          className="rounded-sm border-2"
          value={cubiertos}
          onChange={(e) => setCubiertos(e.target.value)}
        />
        <Estrellitas
        estrellas={estrellas}
        setEstrellas={setEstrellas}
        />
        {error&&<Error/>}
        <button
          type="submit"
          className="w-full rounded-md bg-sky-600 p-3 mt-4 hover:bg-sky-700 transition-colors cursor-pointer text-white font-bold uppercase"
          value="Agregar Propiedad"
          onClick={handleSubmit}
        > {inmueble.id?"Actualizar Inmueble":"Agregar Inmueble"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;

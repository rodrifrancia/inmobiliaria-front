import React, { useState } from "react";
import { useEffect } from "react";
import Estrellitas from "./Estrellitas";
import Error from "./Error"
import { fetchAgregarinmueble, fetchEditarInmueble, fetchObtenerInmuebles } from "../../../data/inmuebles";


const Formulario = ({ inmueble, setInmueble, inmuebles, setInmuebles,error,setError,todosInmuebles, settodosInmuebles }) => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [direccion,setDireccion] = useState("");
  const [ambientes, setAmbientes] = useState("");
  const [totales, setTotales] = useState("");
  const [cubiertos, setCubiertos] = useState("");
  const [fotos,setFotos] = useState([]);
  //estrellas
  const [estrellas,setEstrellas]=useState("");
  //mensaje error
  const[mensaje,setMensaje]=useState("")
  

  useEffect(() => {
    if (Object.keys(inmueble).length > 0) {
        setTitulo(inmueble.titulo)
        setDescripcion(inmueble.descripcion)
        setDireccion(inmueble.direccion)
        setPrecio(inmueble.precio)
        setAmbientes(inmueble.ambientes)
        setTotales(inmueble.totales)
        setCubiertos(inmueble.cubiertos)
        setEstrellas(inmueble.estrellas)
    } 
}, [inmueble])

      const subirFotos=(e)=>{
        setFotos(e)
      }

      const handleSubmit = async(e)=>{
        e.preventDefault()
          //verificamos si hay espacios en blanco
        if([titulo,descripcion,precio,direccion,ambientes,totales,cubiertos,estrellas].includes("")){
          setMensaje("Complete todos los campos")
          setError(true)
          return;
        }
        const formData = new FormData();
            for (let index = 0; index < fotos.length; index++) {
            formData.append('images', fotos[index]);
            };
        console.log(formData)    
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
            const inmueblesActualizados = todosInmuebles.map((inmuebleState) =>{
              if(inmuebleState.id === inmueble.id){
                return objInmueble;
              }else{
              return inmuebleState;} 
              }) 
          settodosInmuebles(inmueblesActualizados) 
          await fetchEditarInmueble(objInmueble) 
          await fetchObtenerInmuebles()
          setInmueble({})
          }else{
            //si es crear lo guardamos
            await fetchAgregarinmueble(objInmueble)
            const inmuebles = await fetchObtenerInmuebles()     
            settodosInmuebles(inmuebles) 
          }
          setTitulo("")
          setDescripcion("")
          setDireccion("")
          setPrecio("")
          setAmbientes("")
          setTotales("")
          setCubiertos("")
          setEstrellas("")
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
          type="number"
          id="ambientes"
          className="rounded-sm border-2"
          value={ambientes}
          onChange={(e) => setAmbientes(e.target.value)}
        />

        <label htmlFor="supTotal" className="font-bold uppercase p-1">
          Superficie Total:
        </label>
        <input
          type="number"
          id="supTotal"
          className="rounded-sm border-2"
          value={totales}
          onChange={(e) => setTotales(e.target.value)}
        />

        <label htmlFor="supCubierta" className="font-bold uppercase p-1">
          Superficie Cubierta:
        </label>
        <input
          type="number"
          id="supCubierta"
          className="rounded-sm border-2"
          value={cubiertos}
          onChange={(e) => setCubiertos(e.target.value)}
        />
        <Estrellitas
        estrellas={estrellas}
        setEstrellas={setEstrellas}
        />
        <label htmlFor="fotos" className="font-bold uppercase p-1">Fotos</label>
        <input type="file" accept="image/*" name="fotos" id="fotos" multiple onChange={(e)=>subirFotos(e.target.files)}/>
        {error?<Error>{mensaje}</Error>:null}
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

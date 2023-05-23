import React from "react";
import {
  fetchEliminarInmueble,
  fetchObtenerInmuebles,
} from "../../../data/inmuebles";
import {
  fetchEliminarUsuario,
  fetchObtenerUsuarios,
} from "../../../data/usuarios";
import { Bounce } from "react-awesome-reveal";
import AlertaImg from "../../../img/advertencia.png"

const Modal = ({
  setModal,
  idEliminar,
  queEliminar,
  settodosInmuebles,
  setTodosUsuarios,
  eliminarUsu,
  eliminarPropie
  }) => {

    

    
  const handleEliminar = async () => {
    
    switch (queEliminar) {
      case (queEliminar = "propiedad"):
        const resul1 = await fetchEliminarInmueble(idEliminar);
        console.log(resul1);
        if (resul1[0].status == 200) {
          const respuesta1 = await fetchObtenerInmuebles();
          settodosInmuebles(respuesta1);
        } else {
          console.log(resul1[0].error);
        }
        setModal(false);
        break;
      case (queEliminar = "usuario"):
        const resul2 = await fetchEliminarUsuario(idEliminar);
        console.log(resul2);
        if (resul2[0].status == 200) {
          const respuesta2 = await fetchObtenerUsuarios();
          setTodosUsuarios(respuesta2);
        } else {
          console.log(resul2[0].error);
        }
        setModal(false);
        break;
    }
  };
  const handleCerrar = () => {
    setModal(false);
  };

  return (
    <div className="fixed flex items-center justify-center inset-0 w-full h-full bg-black bg-opacity-90">
      <Bounce>
        <div className="bg-white mx-auto p-3 rounded-md">
          <div className="flex justify-center">
            <img className="w-28 h-28" src={AlertaImg} alt="imagen alerta" />
          </div>
          <p className="p-3 mb-2 text-xl font-bold text-center">
            ¿Está seguro que desea eliminar a
            {eliminarUsu ? ` "${eliminarUsu.nombre} ${eliminarUsu.apellido}"`
            : eliminarPropie ? ` "${eliminarPropie.titulo}"` : null}?
          </p>
          <div className="flex justify-evenly">
            <button
              className="bg-red-600 p-3 px-8 hover:bg-red-700
        transition-color rounded-md text-white font-bold uppercase"
              onClick={handleEliminar}
            >
              Si
            </button>
            <button
              className="bg-emerald-600 p-3 px-8 hover:bg-emerald-700
        transition-colors rounded-md text-white font-bold uppercase"
              onClick={handleCerrar}
            >
              No
            </button>
          </div>
        </div>
      </Bounce>
    </div>
  );
};
export default Modal;

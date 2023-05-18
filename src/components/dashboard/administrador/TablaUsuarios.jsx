import React, { useEffect, useState } from "react";
import { fetchObtenerUsuarios } from "../../../data/usuarios";
import Usuario from "./Usuario";
import Modal from "./Modal";

const TablaUsuarios = ({fetchEliminarUsuario,todosUsuarios,setTodosUsuarios,setEditUsua,setUsuario,setTiposUsu}) => {
    const [hideTable, setHideTable] = useState(false);
    const [idEliminar, setIdEliminar] = useState(null);
    const[modal,setModal] = useState(false);
    useEffect(()=>{
        async function fetchData(){
            try {
                const datos= await fetchObtenerUsuarios()
                setTodosUsuarios(datos)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
return (
        <>                
        {modal&& <Modal
        idEliminar={idEliminar}
        queEliminar={"usuario"}
        setModal={setModal}
        setHideTable={setHideTable}
        setTodosUsuarios={setTodosUsuarios}
        />}
        <div className={` ${ hideTable ? "block justify-center w-3/4 m-auto bg-white rounded-md shadow-md" : "block justify-center w-3/4 m-auto bg-white mt-10 mb-10 rounded-md shadow-md" }`}>
            <h3 className="block font-bold text-xl text-center p-4 border-2">TABLA DE USUARIOS</h3>
        <table className="w-full shadow-md ">
            <thead className="">
            <tr className="border-2 bg-gray-200">
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Tipo</th>
                <th className="w-10">Acciones</th>
            </tr>
            </thead>
            <tbody>
                {todosUsuarios&&todosUsuarios.length>0?(
                    <>
                    {todosUsuarios.map(usua=>(
                        <Usuario
                        key={usua.id}
                        usua={usua}
                        fetchEliminarUsuario={fetchEliminarUsuario}
                        setHideTable={setHideTable}
                        setModal={setModal}
                        setIdEliminar={setIdEliminar}
                        setEditUsua={setEditUsua}
                        setUsuario={setUsuario}
                        setTiposUsu={setTiposUsu}
                        />
                    ))}
                    </>
                ):(
                    <>
                    <tr>
                        <td></td>
                    </tr>
                    </>
                )
                }
            </tbody>
        </table>
        </div>
        </>
);
};

export default TablaUsuarios;

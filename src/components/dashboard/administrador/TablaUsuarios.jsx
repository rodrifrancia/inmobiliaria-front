import React, { useEffect, useState } from "react";
import { fetchObtenerUsuarios } from "../../../data/usuarios";
import Usuario from "./Usuario";
import Modal from "./Modal";
import "animate.css"

const TablaUsuarios = ({fetchEliminarUsuario,todosUsuarios,setTodosUsuarios,editUsua, setEditUsua,setUsuario,setTiposUsu}) => {
    const [idEliminar, setIdEliminar] = useState(null);
    const[modal,setModal] = useState(false);
    const[eliminarUsu,setEliminarUsu]=useState("")
    const[buscar,setBuscar]=useState("")

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
        {modal?(
            <Modal
            idEliminar={idEliminar}
            queEliminar={"usuario"}
            setModal={setModal}
            setTodosUsuarios={setTodosUsuarios}
            eliminarUsu={eliminarUsu}
            />
        ):(
            <>
            <h3 className="flex justify-center mx-auto w-3/4 mt-20 items-center font-bold text-xl text-center p-4 bg-white">TABLA DE USUARIOS</h3>

        <div className="animate__animated animate__fadeIn justify-center w-3/4 m-auto bg-white mb-10 rounded-md shadow-md max-h-96 overflow-auto">
            <input className="p-2 w-full border-1" type="text" placeholder="Buscar usuario..."
            value={buscar}
            onChange={(e)=>setBuscar(e.target.value)}
            />
        <table className="w-full shadow-md ">
            <thead>
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
                {buscar?(
                    <>
                    {todosUsuarios.filter((usu)=>{
                    const busqueda = buscar.toLowerCase()
                    return usu.nombre.toLowerCase().includes(busqueda)
                    ||usu.apellido.toLowerCase().includes(busqueda)
                    ||usu.email.toLowerCase().includes(busqueda)
                    ||usu.telefono.toLowerCase().includes(busqueda)
                    ||usu.tipo.toLowerCase().includes(busqueda)
                    }).map(usua=>(
                        <Usuario
                        key={usua.id}
                        usua={usua}
                        fetchEliminarUsuario={fetchEliminarUsuario}
                        setModal={setModal}
                        setIdEliminar={setIdEliminar}
                        editUsua={editUsua}
                        setEditUsua={setEditUsua}
                        setUsuario={setUsuario}
                        setTiposUsu={setTiposUsu}
                        setEliminarUsu={setEliminarUsu}
                        />
                    ))}
                    </>
                ):(
                    <>
                    {todosUsuarios&&todosUsuarios.length>0?(
                    <>
                    {todosUsuarios.map(usua=>(
                        <Usuario
                        key={usua.id}
                        usua={usua}
                        fetchEliminarUsuario={fetchEliminarUsuario}
                        setModal={setModal}
                        setIdEliminar={setIdEliminar}
                        editUsua={editUsua}
                        setEditUsua={setEditUsua}
                        setUsuario={setUsuario}
                        setTiposUsu={setTiposUsu}
                        setEliminarUsu={setEliminarUsu}
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
                    </>
                )}
            </tbody>
        </table>
        </div>
        </>
        )}
    </>
);
};

export default TablaUsuarios;

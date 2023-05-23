import React,{ useEffect, useState } from 'react'
import Header from '../components/reutilizables/Header'
import Footer from '../components/reutilizables/Footer'
import Formulario from '../components/dashboard/administrador/Formulario'
import TablaInmuebles from '../components/dashboard/administrador/TablaInmuebles'
import { fetchObtenerInmuebles } from '../data/inmuebles'
import TablaUsuarios from '../components/dashboard/administrador/TablaUsuarios'
import EditarUsuario from '../components/dashboard/administrador/EditarUsuario'
import AuthLogin from '../components/reutilizables/AuthLogin'


const Dashboard = () => {

  //todos los inmuebles
  const [todosInmuebles, settodosInmuebles] = useState([])
  //objeto inmueble
  const [inmueble, setInmueble] = useState({})
  //mensaje error
  const[error,setError] = useState(false)
  //id para eliminar
  const[idEliminar,setIdEliminar] = useState(0)
   //es administrador?
  const[isAdmin,setIsAdmin] = useState(true)
  const[formul,setFormul] = useState(true)
  const[tablaInmu,setTablaInmu] = useState(true)
  const[tablaUsu,setTablaUsu] = useState(false)
  const[todosUsuarios,setTodosUsuarios]=useState([])
  //editar usuario
  const[editUsua,setEditUsua] = useState(false)
  const[usuario,setUsuario] = useState([])
  const[tiposUsu,setTiposUsu] = useState([])

  
    useEffect(() => {
      async function fetchData() {
        try {
          const datos = await fetchObtenerInmuebles()
          settodosInmuebles(datos)
        } catch (error) {
          setError("Error fetching data");
        }
      }
      fetchData();
    }, []);
    
  return (
    <div className='flex flex-col h-full'>
    <AuthLogin/>

        <Header
        isAdmin={isAdmin}
        setFormul={setFormul}
        setTablaUsu={setTablaUsu}
        setTablaInmu={setTablaInmu}
        />
        {formul&&tablaInmu?(
          <div className='flex grid-cols-2 gap-9 lg:p-10 md:p-20 mx-auto min-w-full justify-center'>
          <Formulario
          inmueble={inmueble}
          setInmueble={setInmueble}
          error={error}
          setError={setError}
          todosInmuebles= {todosInmuebles}
          settodosInmuebles={settodosInmuebles}
          />
          <TablaInmuebles
          todosInmuebles= {todosInmuebles}
          settodosInmuebles={settodosInmuebles}
          setInmueble={setInmueble}
          />
          </div>
        ):(
          <div className="h-3/4">
            {editUsua?(
            <EditarUsuario
            usuario={usuario}
            setEditUsua={setEditUsua}
            tiposUsu={tiposUsu}
            setTodosUsuarios={setTodosUsuarios}
            />

            ):(
              <TablaUsuarios
              todosUsuarios={todosUsuarios}
              setTodosUsuarios={setTodosUsuarios}
              editUsua={editUsua}
              setEditUsua={setEditUsua}
              setUsuario={setUsuario}
              setTiposUsu={setTiposUsu}
              />
            )}
          </div>
        )}
        
        {/* <Footer
        tablaUsu={tablaUsu}
        /> */}
    </div>
  )
}

export default Dashboard
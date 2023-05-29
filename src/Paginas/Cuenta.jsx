import React, { useState } from 'react'
import Header from '../components/reutilizables/Header'
import PropietarioVista from "../components/dashboard/propietario/PropietarioVista"
import Footer from '../components/reutilizables/Footer'
import AuthLogin from '../components/reutilizables/AuthLogin'
//import { useLocation } from 'react-router-dom'
const Cuenta = () => {

  //para recibir los datos de registro pasador por una prop
  // const location = useLocation();
  // const propPasada = location.state.resultado;
  // const objPersona = propPasada[0];
  //const[cuenta,setCuenta] = useState()
  const cuenta = JSON.parse(localStorage.getItem("datos"));
  
  
  return (
    <>
    <AuthLogin/>
    <Header
    />
    <div className=' md:mt-10 md:mb-10'>
    <PropietarioVista
    cuenta={cuenta}
    />
    </div>
    <Footer/>
    </>
  )
}

export default Cuenta
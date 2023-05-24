import React from 'react'
import Header from '../components/reutilizables/Header'
import PropietarioVista from "../components/dashboard/propietario/PropietarioVista"
import Footer from '../components/reutilizables/Footer'
import AuthLogin from '../components/reutilizables/AuthLogin'
import { useLocation } from 'react-router-dom'
const Cuenta = () => {

  const location = useLocation();
  const propPasada = location.state.resultado;
  console.log(propPasada)

  const objPersona = propPasada[0];

  return (
    <>
    <AuthLogin/>
    <Header/>
    <div className=' md:mt-10 md:mb-10'>
    <PropietarioVista
    objPersona={objPersona}
    />
    </div>
    <Footer/>
    </>
  )
}

export default Cuenta
import React from 'react'
import Header from '../components/reutilizables/Header'
import PropietarioVista from "../components/dashboard/propietario/PropietarioVista"
import Footer from '../components/reutilizables/Footer'
import AuthLoginAcc from '../components/reutilizables/AuthLoginAcc'
const Cuenta = () => {
  return (
    <>
    <AuthLoginAcc/>
    <Header/>
    <PropietarioVista/>
    <Footer/>
    </>
  )
}

export default Cuenta
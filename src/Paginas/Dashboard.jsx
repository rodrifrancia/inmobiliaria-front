import React from 'react'
import Header from '../components/reutilizables/Header'
import Footer from '../components/reutilizables/Footer'
import Formulario from '../components/dashboard/administrador/Formulario'
import TablaInmuebles from '../components/dashboard/administrador/TablaInmuebles'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className='grid grid-cols-2 gap-9 p-8'>
        <Formulario/>
        <TablaInmuebles/>
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard
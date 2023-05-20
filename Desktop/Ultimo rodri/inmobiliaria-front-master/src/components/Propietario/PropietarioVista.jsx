import React from 'react';
import Footer from '../reutilizables/Footer';
import Header from '../reutilizables/Header';
import './PropietarioVista.css';

function PropietarioVista() {
  const propiedad = {
    direccion: 'Solis 2039',
    ciudad: 'Palermo',
    pagoAlDia: true,
    fechaVencimientoContrato: '31 de diciembre de 2024'
  };

  return (
    <div>
      <Header />
      <div className="property-info">
      <h1 className="title">Información de su Propiedad</h1>
        <div className="property-details">
          <p><strong>Dirección:</strong> {propiedad.direccion}</p>
          <p><strong>Ciudad:</strong> {propiedad.ciudad}</p>
          <p><strong>Estado de pago:</strong> {propiedad.pagoAlDia ? 'Al día' : 'Pendiente'}</p>
          <p><strong>Fecha de vencimiento del contrato:</strong> {propiedad.fechaVencimientoContrato}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropietarioVista;
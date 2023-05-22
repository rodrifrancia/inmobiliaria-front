import React, { useEffect, useState } from "react";
import Propiedad from "./Propiedad";

const TablaInmuebles = ({todosInmuebles,settodosInmuebles,setInmueble}) => {
  const [buscar, setBuscar] = useState("");

  return (
    <div className="w-11/12">
      <h3 className="font-bold text-center uppercase text-2xl ">
        tabla de inmuebles
      </h3>
      <input
        className="w-full p-2 rounded-md border-2 mb-2"
        type="text"
        placeholder="Buscar inmueble..."
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />

      <div className="h-screen overflow-y-scroll">
        {todosInmuebles && todosInmuebles.length > 0 ? (
          <>
            {buscar ? (
              <>
                {todosInmuebles.filter((inmu) => {
                    const buscarMin= buscar.toLowerCase()
                    return inmu.titulo.toLowerCase().includes(buscarMin)
                    ||inmu.descripcion.toLowerCase().includes(buscarMin)
                    ||inmu.precio.toLowerCase().includes(buscarMin)
                    ||inmu.direccion.toLowerCase().includes(buscarMin)
                    ||inmu.totales.toLowerCase().includes(buscarMin)
                    ||inmu.cubiertos.toLowerCase().includes(buscarMin)
                    ||inmu.estrellas.toLowerCase().includes(buscarMin)
                  })
                  .map((propie) => (
                    <Propiedad
                      key={propie.id}
                      propie={propie}
                      settodosInmuebles={settodosInmuebles}
                      setInmueble={setInmueble}
                    />
                  ))}
              </>
            ) : (
              <>
                {todosInmuebles.map((propie) => (
                  <Propiedad
                    key={propie.id}
                    propie={propie}
                    settodosInmuebles={settodosInmuebles}
                    setInmueble={setInmueble}
                  />
                ))}
              </>
            )}
          </>
        ) : (
          <>
            <h3 className="text-2xl text-center mt-5">
              Aún no tiene inmuebles cargados
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default TablaInmuebles;

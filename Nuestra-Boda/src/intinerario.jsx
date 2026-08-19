import React from "react";

import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import CuentaRegresiva from "./componentes-encabezado/CuentaRegresiva";
import Musica from "./componentes-encabezado/musica";

export default function Itinerario() {
  return (
    <div>
       
       <Musica/>

       <CuentaRegresiva/>
      {/* =========================================
          SECCIÓN NOVIOS / PADRES / PADRINOS
      ========================================== */}

      <Novios />


      {/* =========================================
          CEREMONIA + RECEPCIÓN
      ========================================== */}

      <div className="overflow-hidden">

        <Celebracion
          /* FECHA */
          dia="Jueves"
          fecha="11"
          mesAnio="Junio 2026"

          /* CEREMONIA */
          horaCeremonia="14:00"
          lugarCeremonia="Templo Sagrada Familia"
          direccionCeremonia="Puebla, Puebla"
          ubicacionCeremonia="https://maps.app.goo.gl/TsSDUBKAractwi8F8"

          /* RECEPCIÓN */
          horaRecepcion="15:30"
          lugarRecepcion="Palapa la escondida"
          direccionRecepcion="Supermanzana Carretera, 38155 Rincón de Tamayo, Gto."
          ubicacionRecepcion="https://maps.app.goo.gl/qGBc5GASYLjrD7Fd8"
        />

      </div>




      {/* =========================================
          SECCIÓN ITINERARIO
      ========================================== */}

      <Intinerario2 />


    </div>
  );
}
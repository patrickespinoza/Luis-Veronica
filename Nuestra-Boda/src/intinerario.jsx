import React from "react";

import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import CuentaRegresiva from "./componentes-encabezado/CuentaRegresiva";
import Musica from "./componentes-encabezado/musica";
import Frase from "./componentes-encabezado/Frase";

export default function Itinerario() {
  return (
    <div>
       
       <Musica/>
       
      <Frase/>

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
          dia="Domingo"
          fecha="27"
          mesAnio="Diciembre 2026"

          /* CEREMONIA */
          horaCeremonia="14:00"
          lugarCeremonia="Templo Sagrado Familia"
          direccionCeremonia="38159 Celaya, Gto."
          ubicacionCeremonia="https://maps.app.goo.gl/gp284A35dcVduX2t9"

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
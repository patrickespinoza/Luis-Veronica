import React from "react";

export default function Portada() {
  return (
    <section className="relative w-full h-[100svh] min-h-[620px] overflow-hidden">
      
      {/* IMAGEN DE FONDO */}
      <img
        src="/portada.JPG"
        alt="Luis y Veronica"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[35%_40%]
        "
      />

      {/* SOMBRA SUAVE PARA LEGIBILIDAD */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/15
          via-black/5
          to-black/45
        "
      />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          w-full
          h-full
          flex
          flex-col
          items-center
          justify-end
          text-center
          px-6
          pb-16
          sm:pb-20
          md:pb-24
        "
      >
      

        {/* NOMBRES */}
        <div className="flex flex-col items-center">
          <h1
            className="
              font-serif
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-none
              drop-shadow-lg
            "
          >
            Luis
          </h1>

          <span
            className="
              font-serif
              italic
              text-white/90
              text-xl
              sm:text-2xl
              md:text-3xl
              my-1
            "
          >
            &
          </span>

          <h1
            className="
              font-serif
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-none
              drop-shadow-lg
            "
          >
            Veronica
          </h1>
        </div>

        {/* LÍNEA DECORATIVA */}
        <div
          className="
            w-24
            sm:w-28
            h-px
            bg-white/70
            my-6
          "
        />

        {/* FECHA */}
        <p
          className="
            font-serif
            text-white
            text-lg
            sm:text-xl
            md:text-2xl
            tracking-[0.20em]
          "
        >
          27 · 12 · 2026
        </p>
      </div>
    </section>
  );
}
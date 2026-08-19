import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  CakeSlice,
  Wine,
  Music,
} from "lucide-react";

const Itinerario2 = () => {
  /* =========================================
     ANIMACIÓN DEL CONTENEDOR
  ========================================== */

  const containerFade = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================================
     ANIMACIÓN DE TARJETAS
  ========================================== */

  const cardFade = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.96,
      filter: "blur(6px)",
    },

    show: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",

      transition: {
        duration: 0.75,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  /* =========================================
     EVENTOS
  ========================================== */

  const eventos = [
    {
      titulo: "Comida",
      icono: UtensilsCrossed,
      hora: "4:00 pm",
    },
    {
      titulo: "Pastel",
      icono: CakeSlice,
      hora: "6:15 pm",
    },
    {
      titulo: "Brindis",
      icono: Wine,
      hora: "7:00 pm",
    },
    {
      titulo: "Baile",
      icono: Music,
      hora: "8:00 pm",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5F6F8]
        px-4
        py-20
        sm:px-6
        md:py-28
      "
    >
      {/* =========================================
          FONDOS DECORATIVOS
      ========================================== */}

      <div
        className="
          absolute
          -top-36
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#DCE5EE]/60
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#8498B3]/20
          blur-3xl
          pointer-events-none
        "
      />

      {/* =========================================
          FLOR SUPERIOR IZQUIERDA
      ========================================== */}

      <motion.img
        src="/flores.png"
        alt=""
        initial={{
          opacity: 0,
          x: -40,
          rotate: -6,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="
          absolute
          -top-4
          -left-6
          w-[180px]
          sm:w-[240px]
          md:w-[300px]
          object-contain
          pointer-events-none
          z-10
        "
      />

{/* =========================================
    FLOR INFERIOR DERECHA
========================================= */}

<div
  className="
    absolute
    -bottom-2
    -right-2
    rotate-180
    z-10
    pointer-events-none
  "
>
  <motion.img
    src="/flores.png"
    alt=""
    initial={{
      opacity: 0,
      x: -30,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    viewport={{ once: true }}
    className="
      w-[170px]
      sm:w-[220px]
      md:w-[280px]
      object-contain
      select-none
    "
  />
</div>


      {/* =========================================
          CONTENEDOR PRINCIPAL
      ========================================== */}

      <motion.div
        variants={containerFade}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          z-20
          max-w-6xl
          mx-auto
          w-full
          bg-white
          rounded-[36px]
          border
          border-[#8498B3]/15
          shadow-[0_20px_60px_rgba(90,111,127,0.13)]
          px-6
          py-16
          sm:px-10
          md:px-16
          md:py-20
        "
      >
        {/* =========================================
            ENCABEZADO
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#6D86A3]
              text-[11px]
              sm:text-xs
              font-semibold
            "
          >
            Nuestro Día
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-playfair
              text-black
              mt-4
            "
          >
            Itinerario
          </h1>

          {/* ORNAMENTO */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div className="w-12 h-px bg-[#8498B3]/60" />

            <div
              className="
                w-2
                h-2
                rotate-45
                bg-[#A6B7AA]
              "
            />

            <div className="w-12 h-px bg-[#8498B3]/60" />
          </div>
        </motion.div>

        {/* =========================================
            ITINERARIO
        ========================================== */}

        <div className="relative mt-16 md:mt-20">

          {/* LÍNEA CENTRAL EN COMPUTADORA */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-4
              bottom-4
              w-[2px]
              bg-gradient-to-b
              from-[#DCE5EE]
              via-[#6D86A3]/60
              to-[#DCE5EE]
              -translate-x-1/2
            "
          />

          {/* =========================================
              EVENTOS
          ========================================== */}

          <div className="flex flex-col gap-8 md:gap-12">
            {eventos.map((evento, index) => {
              const izquierda = index % 2 === 0;

              const Icono = evento.icono;

              return (
                <motion.div
                  key={evento.titulo}
                  custom={index}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  className={`
                    relative
                    w-full
                    flex
                    ${
                      izquierda
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >
                  {/* =========================================
                      PUNTO CENTRAL
                  ========================================== */}

                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-5
                      h-5
                      rounded-full
                      bg-white
                      border-[3px]
                      border-[#6D86A3]
                      z-20
                      shadow-[0_0_0_6px_rgba(220,229,238,0.8)]
                    "
                  />

                  {/* =========================================
                      LÍNEA HACIA LA TARJETA
                  ========================================== */}

                  <div
                    className={`
                      hidden
                      md:block
                      absolute
                      top-1/2
                      -translate-y-1/2
                      h-px
                      w-[6%]
                      bg-[#8498B3]/50
                      ${
                        izquierda
                          ? "left-[44%]"
                          : "right-[44%]"
                      }
                    `}
                  />

                  {/* =========================================
                      TARJETA
                  ========================================== */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                      transition: {
                        duration: 0.25,
                      },
                    }}
                    className="
                      relative
                      w-full
                      md:w-[43%]
                      overflow-hidden
                      bg-[#F8FAFC]
                      rounded-[28px]
                      px-6
                      py-8
                      sm:px-8
                      text-center
                      border
                      border-[#8498B3]/20
                      shadow-[0_12px_35px_rgba(90,111,127,0.10)]
                    "
                  >
                    {/* DETALLE SUPERIOR */}

                    <div
                      className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2
                        w-20
                        h-[3px]
                        rounded-b-full
                        bg-[#6D86A3]
                      "
                    />

                    {/* =========================================
                        ICONO
                    ========================================== */}

                    <div
                      className="
                        mx-auto
                        w-24
                        h-24
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-[#DCE5EE]/55
                        border
                        border-[#8498B3]/15
                      "
                    >
                      <Icono
                        size={46}
                        strokeWidth={1.4}
                        className="
                          text-[#5A6F7F]
                          transition-transform
                          duration-300
                        "
                      />
                    </div>

                    {/* =========================================
                        TÍTULO
                    ========================================== */}

                    <h2
                      className="
                        mt-6
                        text-2xl
                        sm:text-3xl
                        font-playfair
                        text-black
                      "
                    >
                      {evento.titulo}
                    </h2>

                    {/* =========================================
                        HORA
                    ========================================== */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      <div className="w-6 h-px bg-[#A6B7AA]" />

                      <p
                        className="
                          text-[#5A6F7F]
                          font-[Cedarville_Cursive]
                          text-xl
                          sm:text-2xl
                        "
                      >
                        {evento.hora}
                      </p>

                      <div className="w-6 h-px bg-[#A6B7AA]" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            FRASE FINAL
        ========================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
            mt-14
            text-center
            font-[Cedarville_Cursive]
            text-xl
            sm:text-2xl
            text-[#5A6F7F]
          "
        >
          Cada momento será más especial si lo compartimos contigo
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Itinerario2;
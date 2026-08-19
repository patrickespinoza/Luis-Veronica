import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const CuentaRegresiva = () => {


  const fechaBoda = new Date("2026-12-27T14:00:00");



  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [finalizado, setFinalizado] = useState(false);

  /* =========================================
     CALCULAR TIEMPO
  ========================================== */

  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date();
      const diferencia = fechaBoda.getTime() - ahora.getTime();

      if (diferencia <= 0) {
        setTiempo({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });

        setFinalizado(true);
        return;
      }

      const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
      );

      const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      );

      const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
      );

      const segundos = Math.floor(
        (diferencia / 1000) % 60
      );

      setTiempo({
        dias,
        horas,
        minutos,
        segundos,
      });
    };

    calcularTiempo();

    const intervalo = setInterval(calcularTiempo, 1000);

    return () => clearInterval(intervalo);
  }, []);

  /* =========================================
     BLOQUES
  ========================================== */

  const bloques = [
    {
      numero: tiempo.dias,
      texto: "Días",
    },
    {
      numero: tiempo.horas,
      texto: "Horas",
    },
    {
      numero: tiempo.minutos,
      texto: "Minutos",
    },
    {
      numero: tiempo.segundos,
      texto: "Segundos",
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
          DECORACIÓN DE FONDO
      ========================================== */}

      <div
        className="
          absolute
          -top-32
          -right-28
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#DCE5EE]/60
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-28
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#8498B3]/20
          blur-3xl
          pointer-events-none
        "
      />

      {/* =========================================
          FLOR SUPERIOR
          
          USA LA MISMA:
          public/flores.png
      ========================================== */}

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
          absolute
          -top-3
          -left-4
          w-[170px]
          sm:w-[220px]
          md:w-[280px]
          object-contain
          pointer-events-none
          select-none
          z-10
          
        "
      />

      {/* =========================================
    FLOR INFERIOR DERECHA
========================================= */}

<div
  className="
    absolute
    -bottom-4
    -right-6
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
          CONTENEDOR
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-5xl
          text-center
        "
      >
        {/* =========================================
            ICONO
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#DCE5EE]/70
            border
            border-[#8498B3]/20
          "
        >
          <CalendarDays
            size={25}
            strokeWidth={1.4}
            className="text-[#5A6F7F]"
          />
        </motion.div>

        {/* =========================================
            ENCABEZADO
        ========================================== */}

        <p
          className="
            mt-7
            uppercase
            tracking-[0.35em]
            text-[10px]
            sm:text-xs
            font-semibold
            text-[#6D86A3]
          "
        >
          Cada vez falta menos
        </p>

        <h2
          className="
            mt-4
            font-playfair
            text-4xl
            sm:text-5xl
            md:text-6xl
            text-black
          "
        >
          Cuenta Regresiva
        </h2>

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
          <div className="h-px w-12 bg-[#8498B3]/60" />

          <div
            className="
              h-2
              w-2
              rotate-45
              bg-[#A6B7AA]
            "
          />

          <div className="h-px w-12 bg-[#8498B3]/60" />
        </div>

        {/* =========================================
            MENSAJE
        ========================================== */}

        {!finalizado ? (
          <p
            className="
              mt-7
              font-[Cedarville_Cursive]
              text-xl
              sm:text-2xl
              text-[#5A6F7F]
            "
          >
            Para celebrar nuestro gran día
          </p>
        ) : (
          <p
            className="
              mt-7
              font-[Cedarville_Cursive]
              text-2xl
              sm:text-3xl
              text-[#5A6F7F]
            "
          >
            ¡Nuestro gran día ha llegado!
          </p>
        )}

        {/* =========================================
            CONTADOR
        ========================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-3xl
            grid-cols-2
            gap-3
            sm:gap-5
            md:grid-cols-4
          "
        >
          {bloques.map((bloque, index) => (
            <motion.div
              key={bloque.texto}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#8498B3]/20
                bg-white
                px-3
                py-7
                sm:py-8
                shadow-[0_12px_30px_rgba(90,111,127,0.10)]
              "
            >
              {/* DETALLE SUPERIOR */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  h-[3px]
                  w-12
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#6D86A3]
                "
              />

              {/* NÚMERO */}

              <motion.p
                key={bloque.numero}
                initial={{
                  opacity: 0.5,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  font-playfair
                  text-4xl
                  sm:text-5xl
                  text-[#5A6F7F]
                "
              >
                {String(bloque.numero).padStart(2, "0")}
              </motion.p>

              {/* TEXTO */}

              <p
                className="
                  mt-3
                  uppercase
                  tracking-[0.18em]
                  text-[9px]
                  sm:text-[10px]
                  font-semibold
                  text-black/50
                "
              >
                {bloque.texto}
              </p>
            </motion.div>
          ))}
        </div>



      </motion.div>
    </section>
  );
};

export default CuentaRegresiva;
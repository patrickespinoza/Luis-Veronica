import React from "react";
import { motion } from "framer-motion";

const FinalBoda = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[620px]
        sm:min-h-[700px]
        md:min-h-[780px]
        overflow-hidden
        flex
        items-end
        justify-center
      "
    >
      {/* =========================================
          IMAGEN DE FONDO
      ========================================== */}

      <img
        src="/transPortada.png"
        alt="Luis y Veronica"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* =========================================
          DEGRADADO INFERIOR

          Solo oscurece ligeramente la parte donde
          estará el texto para mejorar la lectura.
      ========================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[65%]
          bg-gradient-to-t
          from-black/65
          via-black/25
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* =========================================
          CONTENIDO INFERIOR
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
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          relative
          z-20
          w-full
          max-w-4xl
          px-6
          pb-14
          sm:pb-16
          md:pb-20
          text-center
        "
      >
        {/* =========================================
            TÍTULO
        ========================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-medium
            leading-tight
            text-white
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
          "
        >
          Te esperamos 
        </motion.h2>

        {/* =========================================
            ORNAMENTO
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-6
            flex
            w-[160px]
            items-center
            justify-center
            gap-3
          "
        >
          <div className="h-px flex-1 bg-white/70" />

          <div
            className="
              h-2
              w-2
              rotate-45
              bg-white
            "
          />

          <div className="h-px flex-1 bg-white/70" />
        </motion.div>




        {/* =========================================
            INICIALES
        ========================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mt-7
            font-playfair
            text-2xl
            sm:text-3xl
            md:text-4xl
            text-white
            tracking-[0.15em]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          "
        >
          L & V
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalBoda;
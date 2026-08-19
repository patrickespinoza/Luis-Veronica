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
        items-center
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
          CONTENIDO
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
            mt-7
            font-[Cedarville_Cursive]
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            leading-tight
            text-[#243746]
            drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]
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
            mt-8
            flex
            w-[160px]
            items-center
            justify-center
            gap-3
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-[#243746]
            "
          />

          <div
            className="
              h-2
              w-2
              rotate-45
              bg-[#71847A]
            "
          />

          <div
            className="
              h-px
              flex-1
              bg-[#243746]
            "
          />
        </motion.div>

        {/* =========================================
            FRASE PRINCIPAL
        ========================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-9
            max-w-2xl
            font-playfair
            text-xl
            sm:text-2xl
            md:text-3xl
            font-medium
            leading-relaxed
            text-[#060708]
            drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]
          "
        >
          Será un honor compartir contigo uno de los momentos más importantes
          de nuestra historia.
        </motion.p>

        {/* =========================================
            DETALLE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span
            className="
              block
              w-1.5
              h-1.5
              rounded-full
              bg-[#71847A]
            "
          />

          <span
            className="
              block
              w-2
              h-2
              rotate-45
              border
              border-[#243746]
            "
          />

          <span
            className="
              block
              w-1.5
              h-1.5
              rounded-full
              bg-[#71847A]
            "
          />
        </motion.div>

        {/* =========================================
            NOMBRES FINALES
        ========================================== */}

        <motion.div
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
          className="mt-9"
        >
          <p
            className="
              font-[Cedarville_Cursive]
              text-3xl
              sm:text-4xl
              md:text-5xl
              text-[#243746]
              drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]
            "
          >
            Luis & Veronica
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalBoda;
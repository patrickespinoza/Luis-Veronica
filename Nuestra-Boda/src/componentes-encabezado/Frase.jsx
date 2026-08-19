import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Frase = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[430px]
        sm:min-h-[500px]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#F5F6F8]
        px-6
        py-20
      "
    >
      {/* =========================================
          FONDO DECORATIVO
      ========================================== */}

      <div
        className="
          absolute
          -top-32
          -right-32
          w-[360px]
          h-[360px]
          rounded-full
          bg-[#DCE5EE]/70
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          w-[360px]
          h-[360px]
          rounded-full
          bg-[#A6B7AA]/15
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
          y: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="
          absolute
          -top-4
          -left-8
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
          Contenedor girado para evitar conflicto
          con Framer Motion
      ========================================== */}

      <div
        className="
          absolute
          -bottom-4
          -right-8
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
          FRASE
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="
          relative
          z-20
          w-full
          max-w-3xl
          text-center
        "
      >



        {/* FRASE */}

        <motion.blockquote
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="
            mt-7
            font-playfair
            text-2xl
            sm:text-3xl
            md:text-4xl
            text-black
            leading-relaxed
          "
        >
          “Amar no es mirarse el uno al otro,
          <br className="hidden sm:block" />
          sino mirar juntos en la misma dirección.”
        </motion.blockquote>

        {/* ORNAMENTO */}

        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          whileInView={{
            opacity: 1,
            width: "140px",
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <div className="h-px flex-1 bg-[#8498B3]/60" />

          <div
            className="
              h-2
              w-2
              rotate-45
              bg-[#A6B7AA]
            "
          />

          <div className="h-px flex-1 bg-[#8498B3]/60" />
        </motion.div>

        {/* AUTOR */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
          viewport={{ once: true }}
          className="
            mt-6
            text-sm
            sm:text-base
            tracking-[0.12em]
            text-[#5A6F7F]
            italic
            font-playfair
          "
        >
          — Antoine de Saint-Exupéry
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Frase;
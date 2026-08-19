import React from "react";
import { motion } from "framer-motion";

/* =========================================
   RAMA FLORAL DECORATIVA
========================================= */

const RamaFloral = ({ className = "", rotate = false }) => {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`
        pointer-events-none
        ${rotate ? "rotate-180" : ""}
        ${className}
      `}
    >
      {/* Tallo principal */}
      <path
        d="M20 200C58 165 76 129 91 93C105 60 133 33 190 19"
        stroke="#6D86A3"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ramas */}
      <path
        d="M60 158C46 136 43 115 49 95"
        stroke="#A6B7AA"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M91 94C76 79 70 60 73 43"
        stroke="#A6B7AA"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M118 64C122 45 135 30 151 21"
        stroke="#A6B7AA"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Hojas azules */}
      <ellipse
        cx="55"
        cy="134"
        rx="8"
        ry="17"
        transform="rotate(-37 55 134)"
        fill="#8498B3"
        fillOpacity="0.75"
      />

      <ellipse
        cx="73"
        cy="110"
        rx="8"
        ry="17"
        transform="rotate(42 73 110)"
        fill="#6D86A3"
        fillOpacity="0.68"
      />

      <ellipse
        cx="92"
        cy="79"
        rx="8"
        ry="17"
        transform="rotate(-36 92 79)"
        fill="#8498B3"
        fillOpacity="0.72"
      />

      <ellipse
        cx="121"
        cy="55"
        rx="8"
        ry="17"
        transform="rotate(48 121 55)"
        fill="#5A6F7F"
        fillOpacity="0.65"
      />

      {/* Hojas verdes como acento */}
      <ellipse
        cx="47"
        cy="102"
        rx="7"
        ry="15"
        transform="rotate(-20 47 102)"
        fill="#A6B7AA"
        fillOpacity="0.75"
      />

      <ellipse
        cx="74"
        cy="54"
        rx="7"
        ry="15"
        transform="rotate(-18 74 54)"
        fill="#7F8973"
        fillOpacity="0.55"
      />

      {/* Flor principal */}
      <g transform="translate(139 31)">
        <circle cx="0" cy="-10" r="10" fill="#DCE5EE" />
        <circle cx="10" cy="0" r="10" fill="#B9C8D8" />
        <circle cx="0" cy="10" r="10" fill="#DCE5EE" />
        <circle cx="-10" cy="0" r="10" fill="#B9C8D8" />
        <circle cx="0" cy="0" r="7" fill="#6D86A3" />
      </g>

      {/* Flor secundaria */}
      <g transform="translate(54 158) scale(.72)">
        <circle cx="0" cy="-10" r="10" fill="#DCE5EE" />
        <circle cx="10" cy="0" r="10" fill="#B9C8D8" />
        <circle cx="0" cy="10" r="10" fill="#DCE5EE" />
        <circle cx="-10" cy="0" r="10" fill="#B9C8D8" />
        <circle cx="0" cy="0" r="7" fill="#8498B3" />
      </g>
    </svg>
  );
};

/* =========================================
   COMPONENTE NOVIOS
========================================= */

const Novios = () => {
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
          DECORACIÓN DEL FONDO
      ========================================== */}

      <div
        className="
          absolute
          -top-28
          -left-28
          w-[330px]
          h-[330px]
          rounded-full
          bg-[#DCE5EE]/50
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-36
          -right-28
          w-[390px]
          h-[390px]
          rounded-full
          bg-[#8498B3]/20
          blur-3xl
        "
      />

      {/* =========================================
          CONTENEDOR PRINCIPAL
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* =========================================
            TARJETA PRINCIPAL
        ========================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-white
            border
            border-[#6D86A3]/15
            shadow-[0_24px_70px_rgba(90,111,127,0.13)]
            px-6
            py-16
            sm:px-10
            md:px-16
            md:py-20
          "
        >
          {/* Flores esquina superior */}
          <RamaFloral
            className="
              absolute
              -top-5
              -left-8
              w-40
              sm:w-52
              opacity-70
            "
          />

          {/* Flores esquina inferior */}
          <RamaFloral
            rotate
            className="
              absolute
              -bottom-6
              -right-8
              w-40
              sm:w-52
              opacity-60
            "
          />

          {/* =========================================
              ENCABEZADO
          ========================================== */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mb-7
              h-px
              w-20
              origin-center
              bg-[#6D86A3]
            "
          />

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.45em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.28em",
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              text-center
              uppercase
              text-[10px]
              sm:text-xs
              font-medium
              tracking-[0.28em]
              text-[#5A6F7F]
            "
          >
            Nuestra Boda
          </motion.p>

          {/* =========================================
              NOMBRES
          ========================================== */}

          <div className="relative mt-10 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
                font-playfair
                text-[42px]
                leading-[1.05]
                text-black
                sm:text-5xl
                md:text-6xl
              "
            >
              Luis
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              viewport={{ once: true }}
              className="
                my-3
                font-[Cedarville_Cursive]
                text-4xl
                sm:text-5xl
                text-[#6D86A3]
              "
            >
              &
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="
                font-playfair
                text-[42px]
                leading-[1.05]
                text-black
                sm:text-5xl
                md:text-6xl
              "
            >
              Veronica
            </motion.h1>
          </div>

          {/* =========================================
              SEPARADOR
          ========================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="
              my-10
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <div className="h-px w-14 sm:w-20 bg-[#8498B3]/50" />

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-[#A6B7AA]
              "
            />

            <div className="h-px w-14 sm:w-20 bg-[#8498B3]/50" />
          </motion.div>

          {/* =========================================
              BENDICIÓN
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
              duration: 0.9,
              delay: 0.55,
            }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p
              className="
                font-[Cedarville_Cursive]
                text-2xl
                sm:text-3xl
                text-[#5A6F7F]
              "
            >
              Con la bendición de nuestros padres
            </p>
          </motion.div>

          {/* =========================================
              PADRES
          ========================================== */}

          <div
            className="
              relative
              z-10
              mt-12
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
            "
          >
            {/* PADRES DEL NOVIO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.65,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#8498B3]/20
                bg-[#F7F9FB]
                px-6
                py-9
                text-center
                transition
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(90,111,127,0.12)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  h-[3px]
                  w-20
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#6D86A3]
                "
              />

              <p
                className="
                  mb-7
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  text-[#6D86A3]
                "
              >
                Padres del Novio
              </p>

              <p
                className="
                  font-playfair
                  text-xl
                  sm:text-2xl
                  text-black
                "
              >
                Pilar Ruiz
              </p>
            </motion.div>

            {/* PADRES DE LA NOVIA */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.75,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#8498B3]/20
                bg-[#F7F9FB]
                px-6
                py-9
                text-center
                transition
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(90,111,127,0.12)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  h-[3px]
                  w-20
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#6D86A3]
                "
              />

              <p
                className="
                  mb-7
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  text-[#6D86A3]
                "
              >
                Padres de la Novia
              </p>

              <p
                className="
                  font-playfair
                  text-xl
                  sm:text-2xl
                  text-black
                "
              >
                Edith Mancera
              </p>

              <div
                className="
                  mx-auto
                  my-3
                  h-px
                  w-6
                  bg-[#A6B7AA]
                "
              />

              <p
                className="
                  font-playfair
                  text-xl
                  sm:text-2xl
                  text-black
                "
              >
                Jose Carmen Renteria
              </p>
            </motion.div>
          </div>

          {/* =========================================
              PADRINOS
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
              duration: 0.9,
              delay: 0.9,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mx-auto
              mt-7
              w-full
              md:w-[65%]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#6D86A3]/25
                bg-gradient-to-br
                from-[#F7F9FB]
                via-white
                to-[#DCE5EE]/40
                px-6
                py-10
                text-center
                shadow-[0_12px_35px_rgba(90,111,127,0.10)]
              "
            >
              {/* Línea superior */}
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  h-[3px]
                  w-24
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#5A6F7F]
                "
              />

              {/* Ornamento */}
              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <div className="h-px w-8 bg-[#8498B3]/50" />

                <div
                  className="
                    h-2
                    w-2
                    rotate-45
                    bg-[#A6B7AA]
                  "
                />

                <div className="h-px w-8 bg-[#8498B3]/50" />
              </div>

              {/* Título */}
              <p
                className="
                  mb-7
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.3em]
                  font-semibold
                  text-[#5A6F7F]
                "
              >
                Nuestros Padrinos
              </p>

              {/* Padrino */}
              <p
                className="
                  font-playfair
                  text-xl
                  sm:text-2xl
                  text-black
                "
              >
                Jose Socorro Mancera
              </p>

              <div
                className="
                  mx-auto
                  my-4
                  h-px
                  w-8
                  bg-[#A6B7AA]
                "
              />

              {/* Madrina */}
              <p
                className="
                  font-playfair
                  text-xl
                  sm:text-2xl
                  text-black
                "
              >
                Rosario Rojas
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;
import React from "react";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,

  horaCeremonia,
  lugarCeremonia,
  direccionCeremonia,
  ubicacionCeremonia,

  horaRecepcion,
  lugarRecepcion,
  direccionRecepcion,
  ubicacionRecepcion,
}) => {
  return (
    <div
      className="
        relative
        w-full
        bg-[#F5F6F8]
        py-20
        px-6
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* FONDO DECORATIVO */}
      <div
        className="
          absolute
          -top-32
          -right-28
          w-[380px]
          h-[380px]
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
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#8498B3]/20
          blur-3xl
          pointer-events-none
        "
      />

      {/* FLOR SUPERIOR IZQUIERDA */}
      <img
        src="/flores.png"
        alt=""
        className="
          absolute
          -top-2
          -left-4
          w-[170px]
          sm:w-[230px]
          md:w-[290px]
          object-contain
          pointer-events-none
          z-10
        "
      />

      {/* FLOR INFERIOR DERECHA */}
      <img
        src="/flores.png"
        alt=""
        className="
          absolute
          -bottom-6
          -right-8
          w-[180px]
          sm:w-[240px]
          md:w-[300px]
          object-contain
          pointer-events-none
          z-10
          rotate-180
        "
      />

      <div className="relative z-20 w-full max-w-5xl">
        {/* TÍTULO */}
        <div className="text-center mb-10">
          <p
            className="
              text-[#6D86A3]
              tracking-[0.35em]
              uppercase
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Celebremos juntos
          </p>

          <h2
            className="
              mt-4
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-playfair
              text-black
            "
          >
            Nuestra Boda
          </h2>

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div className="w-12 h-[1px] bg-[#8498B3]" />

            <div
              className="
                w-2
                h-2
                rotate-45
                bg-[#A6B7AA]
              "
            />

            <div className="w-12 h-[1px] bg-[#8498B3]" />
          </div>
        </div>

        {/* FECHA */}
        <div className="text-center mb-14">
          <p
            className="
              text-[#6D86A3]
              tracking-[0.35em]
              uppercase
              text-sm
              sm:text-base
              font-semibold
            "
          >
            {dia}
          </p>

          <div
            className="
              relative
              flex
              items-center
              justify-center
              my-4
            "
          >
            <div
              className="
                absolute
                w-28
                h-28
                sm:w-32
                sm:h-32
                rounded-full
                bg-[#DCE5EE]/60
              "
            />

            <h1
              className="
                relative
                z-10
                text-7xl
                sm:text-8xl
                font-playfair
                text-[#5A6F7F]
                leading-none
              "
            >
              {fecha}
            </h1>
          </div>

          <p
            className="
              text-black
              text-xl
              sm:text-2xl
              tracking-[0.2em]
              mt-3
              font-playfair
            "
          >
            {mesAnio}
          </p>
        </div>

        {/* CEREMONIA + RECEPCIÓN */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >
          {/* CEREMONIA */}
          <div
            className="
              relative
              bg-white
              w-full
              p-10
              sm:p-12
              shadow-[0_15px_45px_rgba(90,111,127,0.14)]
              border
              border-[#8498B3]/20
              rounded-tl-[4rem]
              rounded-br-[4rem]
              rounded-tr-[1rem]
              rounded-bl-[1rem]
            "
          >
            <div
              className="
                absolute
                top-5
                left-1/2
                -translate-x-1/2
                w-24
                h-[2px]
                bg-[#6D86A3]
              "
            />

            <div className="text-center space-y-3 mt-3">
              <p
                className="
                  text-[#6D86A3]
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  font-semibold
                "
              >
                Ceremonia
              </p>

              <div
                className="
                  w-16
                  h-[1px]
                  mx-auto
                  bg-[#A6B7AA]
                "
              />
            </div>

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                text-center
                space-y-7
              "
            >
              <div>
                <p
                  className="
                    text-[#6D86A3]
                    uppercase
                    tracking-[0.25em]
                    text-xs
                  "
                >
                  Hora
                </p>

                <p
                  className="
                    text-2xl
                    font-playfair
                    text-black
                    mt-2
                  "
                >
                  {horaCeremonia}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[#6D86A3]
                    uppercase
                    tracking-[0.25em]
                    text-xs
                  "
                >
                  Lugar
                </p>

                <p
                  className="
                    text-2xl
                    font-playfair
                    text-black
                    mt-2
                  "
                >
                  {lugarCeremonia}
                </p>

                <p
                  className="
                    text-black/60
                    mt-3
                    leading-relaxed
                    text-sm
                    sm:text-base
                    max-w-md
                  "
                >
                  {direccionCeremonia}
                </p>
              </div>

              <a
                href={ubicacionCeremonia}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  bg-[#5A6F7F]
                  hover:bg-[#6D86A3]
                  hover:scale-105
                  transition
                  duration-300
                  text-white
                  px-8
                  py-3
                  rounded-full
                  shadow-lg
                  tracking-wide
                "
              >
                Ver Ubicación
              </a>
            </div>

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                w-24
                h-[2px]
                bg-[#A6B7AA]
              "
            />
          </div>

          {/* RECEPCIÓN */}
          <div
            className="
              relative
              bg-white
              w-full
              p-10
              sm:p-12
              shadow-[0_15px_45px_rgba(90,111,127,0.14)]
              border
              border-[#8498B3]/20
              rounded-tr-[4rem]
              rounded-bl-[4rem]
              rounded-tl-[1rem]
              rounded-br-[1rem]
            "
          >
            <div
              className="
                absolute
                top-5
                left-1/2
                -translate-x-1/2
                w-24
                h-[2px]
                bg-[#6D86A3]
              "
            />

            <div className="text-center space-y-3 mt-3">
              <p
                className="
                  text-[#6D86A3]
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  font-semibold
                "
              >
                Recepción
              </p>

              <div
                className="
                  w-16
                  h-[1px]
                  mx-auto
                  bg-[#A6B7AA]
                "
              />
            </div>

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                text-center
                space-y-7
              "
            >
              <div>
                <p
                  className="
                    text-[#6D86A3]
                    uppercase
                    tracking-[0.25em]
                    text-xs
                  "
                >
                  Hora
                </p>

                <p
                  className="
                    text-2xl
                    font-playfair
                    text-black
                    mt-2
                  "
                >
                  {horaRecepcion}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[#6D86A3]
                    uppercase
                    tracking-[0.25em]
                    text-xs
                  "
                >
                  Lugar
                </p>

                <p
                  className="
                    text-2xl
                    font-playfair
                    text-black
                    mt-2
                  "
                >
                  {lugarRecepcion}
                </p>

                <p
                  className="
                    text-black/60
                    mt-3
                    leading-relaxed
                    text-sm
                    sm:text-base
                    max-w-md
                  "
                >
                  {direccionRecepcion}
                </p>
              </div>

              <a
                href={ubicacionRecepcion}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  bg-[#5A6F7F]
                  hover:bg-[#6D86A3]
                  hover:scale-105
                  transition
                  duration-300
                  text-white
                  px-8
                  py-3
                  rounded-full
                  shadow-lg
                  tracking-wide
                "
              >
                Ver Ubicación
              </a>
            </div>

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                w-24
                h-[2px]
                bg-[#A6B7AA]
              "
            />
          </div>
        </div>

        <p
          className="
            mt-14
            text-center
            text-[#5A6F7F]
            text-xl
            sm:text-2xl
            font-[Cedarville_Cursive]
          "
        >
          Será un honor compartir este momento contigo
        </p>
      </div>
    </div>
  );
};

export default Celebracion;
import React, { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Musica = () => {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);

  /* =========================================
     CONFIGURACIÓN DEL AUDIO
  ========================================== */

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.45;
  }, []);

  /* =========================================
     INICIAR EXPERIENCIA CON MÚSICA
  ========================================== */

  const iniciarMusica = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
    }
  };

  /* =========================================
     ENTRAR SIN MÚSICA
  ========================================== */

  const entrarSinMusica = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
  };

  /* =========================================
     PAUSAR / REANUDAR
  ========================================== */

  const toggleMusica = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setReproduciendo(true);
      } catch (error) {
        console.error("No se pudo reproducir la música:", error);
      }
    } else {
      audioRef.current.pause();
      setReproduciendo(false);
    }
  };

  return (
    <>
      {/* =========================================
          AUDIO

          Guarda tu canción en:
          public/musica.mp3
      ========================================== */}

      <audio
        ref={audioRef}
        src="/musica.mp3"
        loop
        preload="auto"
      />

      {/* =========================================
          VENTANA EMERGENTE
      ========================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/60
              backdrop-blur-sm
              px-5
            "
          >
            {/* TARJETA */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-[32px]
                bg-white
                px-7
                py-10
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                border
                border-[#8498B3]/20
              "
            >
              {/* DECORACIÓN */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  h-[4px]
                  w-28
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#6D86A3]
                "
              />

              {/* FLOR */}

              <img
                src="/flores.png"
                alt=""
                className="
                  absolute
                  -top-10
                  -left-12
                  w-[150px]
                  opacity-70
                  pointer-events-none
                "
              />

              {/* CERRAR */}

              <button
                type="button"
                onClick={entrarSinMusica}
                aria-label="Cerrar"
                className="
                  absolute
                  top-4
                  right-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5F6F8]
                  text-[#5A6F7F]
                  transition
                  hover:bg-[#DCE5EE]
                "
              >
                <X size={18} />
              </button>

              {/* ICONO */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCE5EE]/70
                  border
                  border-[#8498B3]/20
                "
              >
                <Music
                  size={34}
                  strokeWidth={1.4}
                  className="text-[#5A6F7F]"
                />
              </motion.div>

              {/* TEXTO */}

              <p
                className="
                  mt-7
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  font-semibold
                  text-[#6D86A3]
                "
              >
                Luis & Veronica
              </p>

              <h2
                className="
                  mt-4
                  font-playfair
                  text-3xl
                  sm:text-4xl
                  text-black
                "
              >
                Nuestra historia tiene una canción
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-black/60
                "
              >
                Hemos preparado esta invitación para que la disfrutes con
                música.
              </p>

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
                <div className="h-px w-10 bg-[#8498B3]/50" />

                <div
                  className="
                    h-2
                    w-2
                    rotate-45
                    bg-[#A6B7AA]
                  "
                />

                <div className="h-px w-10 bg-[#8498B3]/50" />
              </div>

              {/* BOTONES */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                "
              >
                <button
                  type="button"
                  onClick={iniciarMusica}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#5A6F7F]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    tracking-wide
                    text-white
                    shadow-lg
                    transition
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-[#6D86A3]
                  "
                >
                  <Volume2 size={18} />

                  Entrar con música
                </button>

                <button
                  type="button"
                  onClick={entrarSinMusica}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#8498B3]/30
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    tracking-wide
                    text-[#5A6F7F]
                    transition
                    duration-300
                    hover:bg-[#F5F6F8]
                  "
                >
                  <VolumeX size={18} />

                  Continuar sin música
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          BOTÓN FLOTANTE DE MÚSICA
      ========================================== */}

      {!mostrarModal && (
        <motion.button
          type="button"
          onClick={toggleMusica}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileTap={{
            scale: 0.92,
          }}
          aria-label={
            reproduciendo
              ? "Pausar música"
              : "Reproducir música"
          }
          className="
            fixed
            bottom-5
            right-5
            z-[9998]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#5A6F7F]
            text-white
            shadow-[0_10px_30px_rgba(90,111,127,0.35)]
            border
            border-white/30
          "
        >
          {reproduciendo ? (
            <Volume2
              size={23}
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              size={23}
              strokeWidth={1.5}
            />
          )}

          {/* EFECTO CUANDO ESTÁ SONANDO */}

          {reproduciendo && (
            <span
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#8498B3]
                animate-ping
                opacity-30
              "
            />
          )}
        </motion.button>
      )}
    </>
  );
};

export default Musica;
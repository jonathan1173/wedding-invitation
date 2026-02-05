import { useState } from "react";
import { motion } from "framer-motion";
import WelcomeCard from "../intro/WelcomeCard";
import { useMusic } from "../../hooks/musicContext/MusicContext";
import videoBg from "../../assets/video/playa.mp4";

export default function Hero() {
  const { isPlaying, playMusic, toggleMusic } = useMusic();
  const [showWelcome, setShowWelcome] = useState(true);

  const handleOpenWelcome = () => {
    playMusic();
    setShowWelcome(false);
  };

  return (
    <section className="relative py-4 h-screen w-full overflow-hidden "> {/* Aplicada globalmente al componente si lo deseas */}

      {/* VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {showWelcome && <WelcomeCard onOpen={handleOpenWelcome} />}

      {/* CONTENIDO */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >
        {/* SUBTÍTULO */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-wedding text-sm md:text-lg uppercase tracking-[0.3em] mb-4 opacity-90"
        >
          Nuestra Boda
        </motion.p>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          /* Usamos font-wedding aquí para los nombres */
          className="font-wedding !text-white text-6xl md:text-8xl lg:text-9xl mb-6 drop-shadow-sm leading-tight italic"
        >
          <span className="tracking-wide">Julio</span>{" "}
          <span className="text-4xl md:text-6xl align-middle mx-2">&</span>{" "}
          <span className="tracking-wide">Scarleth</span>
        </motion.h1>

        {/* LÍNEA */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="w-24 h-1 bg-white/50 mb-6 rounded-full origin-left"
        />

        {/* BOTÓN */}
        <motion.button
          onClick={toggleMusic}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="group flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          {isPlaying ? (
            <>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-serif italic uppercase text-xs font-semibold">
                PAUSAR MÚSICA
              </span>
            </>
          ) : (
            <>
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="font-serif italic uppercase tracking-widest text-xs font-semibold">
                REPRODUCIR MÚSICA
              </span>
            </>
          )}
        </motion.button>
      </motion.div>
    </section>
  );
}
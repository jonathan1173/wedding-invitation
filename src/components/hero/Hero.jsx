import { useState } from "react";
import WelcomeCard from "../intro/WelcomeCard";
import { useMusic } from "../../hooks/musicContext/MusicContext"; 

// 1. IMPORTANTE: Importamos el archivo de video. 
// Ajusta la cantidad de '../' según tu estructura de carpetas.
// Si Hero.jsx está en src/components/hero/, y el video en src/assets/video/, sería así:
import videoBg from "../../assets/video/parejaAtardecer.mp4"; 

export default function Hero() {
  const { isPlaying, playMusic, toggleMusic } = useMusic();
  const [showWelcome, setShowWelcome] = useState(true);

  const handleOpenWelcome = () => {
    playMusic(); 
    setShowWelcome(false); 
  };

  return (
    <section className="relative py-4 h-screen w-full overflow-hidden font-serif italic">
      
      {/* --- VIDEO DE FONDO --- */}
      {/* Se coloca absoluto y con z-0 para que quede al fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay 
        loop 
        muted // OBLIGATORIO: Los navegadores bloquean el autoplay si tiene sonido
        playsInline // OBLIGATORIO: Para que funcione bien en iPhone/Android
      >
        <source src={videoBg} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* CARTA DE BIENVENIDA (MODAL) */}
      {showWelcome && (
        <WelcomeCard onOpen={handleOpenWelcome} />
      )}

      {/* Overlay Oscuro (Ahora va encima del video) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Contenido Principal (Con z-10 para estar encima de todo) */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        
        <p className="text-sm text-amber-50 md:text-lg uppercase tracking-[0.3em] font-light mb-4 opacity-90">
          Nuestra Boda
        </p>

        <h1 className="text-6xl text-amber-50 md:text-8xl lg:text-9xl font-serif italic mb-6 drop-shadow-lg leading-tight">
          Julio <span className="text-4xl text-amber-50 md:text-6xl align-middle text-gray-300">&</span> Scarleth
        </h1>

        <div className="w-24 h-1 bg-white/50 mb-6 rounded-full"></div> 
        
        <p className="text-lg text-amber-50 md:text-2xl font-light italic opacity-90 mb-10 max-w-2xl">
          "Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos." - Cantar de los Cantares 8:7
        </p>

        {/* BOTÓN CONTROLADOR DE MÚSICA */}
        <button
          onClick={toggleMusic}
          className="group flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          {isPlaying ? (
            <>
              <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="uppercase tracking-widest text-xs font-semibold">
                PAUSAR MÚSICA
              </span>
            </>
          ) : (
            <>
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="uppercase tracking-widest text-xs font-semibold">
                REPRODUCIR MÚSICA
              </span>
            </>
          )}
        </button>

      </div>
    </section>
  )
}
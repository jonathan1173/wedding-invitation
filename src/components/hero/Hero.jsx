import { useState } from "react";
import CountdownClock from "../count/CountdownClock";
import WelcomeCard from "../intro/WelcomeCard";
import { useMusic } from "../../hooks/musicContext/MusicContext"; // Importamos el Hook

export default function Hero() {
  // 1. Usamos el contexto para controlar la música globalmente
  const { isPlaying, playMusic, toggleMusic } = useMusic();
  
  // 2. Estado local solo para saber si mostramos la carta o no
  const [showWelcome, setShowWelcome] = useState(true);

  // Esta función se ejecuta cuando el usuario le da "Abrir" al sobre
  const handleOpenWelcome = () => {
    playMusic(); // Activamos la música del contexto
    setShowWelcome(false); // Ocultamos la carta
  };

  return (
    <section
      className="relative md:h-screen py-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://we.shyamjos.com/images/bg.jpg')",
      }}
    >
      {/* CARTA DE BIENVENIDA (MODAL) */}
      {showWelcome && (
        <WelcomeCard onOpen={handleOpenWelcome} />
      )}

      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido Principal */}
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
            // ESTADO: REPRODUCIENDO
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
             // ESTADO: PAUSADO
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
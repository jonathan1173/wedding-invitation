  import { Heart } from "lucide-react";

  export default function FinalSection() {
    const finalImage = "/assets/images/pareja/pareja-4.jpg";

    return (
      // CAMBIO 1: Usamos 'min-h-[100dvh]' para asegurar que cubra TODA la pantalla en móvil
      // y 'flex' para manejar el contenido mejor.
      <footer className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden font-serif italic">
        
        {/* 1. IMAGEN DE FONDO */}
        <div className="absolute inset-0">
          <img 
            src={finalImage} 
            alt="Despedida Novios" 
            className=" h-full object-cover object-center"
          />
        </div>

        {/* 2. DEGRADADO (Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-90"></div>

        {/* 3. CONTENIDO DEL TEXTO */}
        {/* CAMBIO 2: Quitamos 'absolute inset-0' y dejamos que el flex del padre maneje la posición. 
            Esto evita que el texto se corte arriba si la pantalla es muy pequeña. */}
        <div className="relative z-10 w-full flex flex-col items-center pb-12 px-6 text-center md:pb-20">
          
          {/* Icono decorativo */}
          <div className="mb-4 md:mb-6 animate-bounce duration-[2000ms]">
              <Heart className="w-8 h-8 text-white/80 fill-white/20" />
          </div>

          {/* Mensaje de Despedida */}
          {/* Ajustamos tamaños de texto para móvil */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
            ¡Los Esperamos!
          </h2>

          <p className="text-base md:text-2xl text-blue-100 font-light max-w-2xl leading-relaxed drop-shadow-md px-4">
            Gracias por ser parte de nuestra historia y acompañarnos en el comienzo de este nuevo capítulo.
          </p>

          {/* Hashtag de la Boda */}
          <div className="mt-8 md:mt-12 border-t border-white/20 pt-6 md:pt-8 w-full max-w-[200px] md:max-w-md">
              <p className="text-xs md:text-base tracking-[0.3em] md:tracking-[0.4em] text-white/60 uppercase font-bold">
                  #JulioYScarleth
              </p>
          </div>

          {/* Créditos pequeños */}
          <p className="mt-8 text-[10px] text-white/30">
            Hecho con amor para nuestra boda &copy; 2026
          </p>

        </div>
      </footer>
    );
  }
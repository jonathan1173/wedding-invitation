import { Heart } from "lucide-react";

export default function FinalSection() {
  const finalImage = "/assets/images/pareja/pareja-4.jpg";

  return (
    <footer className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-blue-950 font-serif italic">

      {/* 1. IMAGEN CENTRADA CON DIFUMINADO LATERAL (SIN LÍNEAS) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative h-full w-full flex items-center justify-center">
<img
  src={finalImage}
  alt="Despedida Novios"
  className="h-full w-auto object-contain"
  style={{
    WebkitMaskImage:
      'radial-gradient(ellipse 70% 48% at center, black 55%, transparent 72%)',
    maskImage:
      'radial-gradient(ellipse 60% 40% at center, black 55%, transparent 72%)',
  }}
/>



          {/* Overlay para suavizar la imagen y que no brille tanto */}
          <div className="absolute inset-0 bg-blue-950/30 pointer-events-none"></div>
        </div>
      </div>

      {/* 2. DEGRADADO DE FONDO (Para que el texto resalte) */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent z-[5]"></div>

      {/* 3. CONTENIDO DEL TEXTO */}
      <div className="relative z-10 w-full flex flex-col items-center pb-16 px-6 text-center md:pb-24">

        {/* Icono decorativo */}
        <div className="mb-6 md:mb-8 animate-pulse">
          <Heart className="w-10 h-10 text-white/90 fill-white/30" />
        </div>

        {/* Mensaje de Despedida */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-wedding text-white mb-6 drop-shadow-2xl leading-tight">
          ¡Los Esperamos!
        </h2>

        <p className="text-lg md:text-2xl text-blue-100 font-light max-w-2xl leading-relaxed drop-shadow-md px-4 opacity-90">
          Gracias por ser parte de nuestra historia y acompañarnos en el comienzo de este nuevo capítulo.
        </p>

        {/* Hashtag de la Boda */}
        <div className="mt-10 md:mt-14 border-t border-white/20 pt-8 w-full max-w-[250px] md:max-w-md">
          <p className="text-sm md:text-lg tracking-[0.4em] text-white/70 uppercase font-bold">
            #JulioYScarleth
          </p>
        </div>

        {/* Créditos pequeños */}
        <p className="mt-12 text-[10px] md:text-xs text-white/40 tracking-widest uppercase">
          Hecho con amor para nuestra boda &copy; 2026
        </p>

      </div>
    </footer>
  );
}
import { Heart } from "lucide-react";
// Imagen en `public`
const handBg = '/assets/images/hand.png'; 

export default function Gallery() {
  const phrase = "Nuestro amor da un paso más y nos encantaría que seas parte de este día inolvidable.";

  return (
    <section className="relative h-screen bg-amber-50 flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 font-serif italic">

      {/* --- Fondo decorativo --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src={handBg} 
          alt="Decoración de fondo" 
          className="w-[90%] md:w-[60%] lg:w-[40%] opacity-10 object-contain mix-blend-multiply grayscale contrast-125"
        />
      </div>

      {/* --- Contenido centrado --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Icono Heart */}
        <div className="flex justify-center mb-6">
          <Heart className="font-wedding text-[var(--color-wedding)] w-8 h-8 fill-blue-50/50" />
        </div>

        {/* Frase */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-wedding text-[var(--color-wedding)] leading-tight max-w-4xl drop-shadow-sm">
          "{phrase}"
        </h2>

      </div>
    </section>
  );
}

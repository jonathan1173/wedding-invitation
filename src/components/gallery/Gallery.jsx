import { Heart } from "lucide-react";

export default function Gallery() {
  return (
    <section className="relative min-h-screen bg-amber-50 flex items-center justify-center py-10 px-6 font-serif italic">

      {/* Contenedor Principal: Con espacio mínimo entre hijos (gap) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full gap-2">

        {/* 0. ORNAMENTO FLORAL (superior) - Pegado lo más posible a las manos */}
        <div className="w-full -mt-2">
          <img
            src="./assets/images/ornamentos/ornamento-2.png"
            alt="Decoración floral"
            className="w-full max-w-[400px] mx-auto object-contain mix-blend-multiply opacity-90"
          />
        </div>

        {/* 1. FRASE (Arriba) - Reducimos el leading y el margen inferior */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-wedding text-[var(--color-wedding)] leading-[1.1] mb-2">
          Nuestro amor da un paso más y nos emociona que seas parte de este día inolvidable.
        </h2>

        {/* 2. ILUSTRACIÓN MANOS (Centro) - Reducimos márgenes y ajustamos corazones */}
        <div className="flex flex-col items-center">
          {/* Corazón superior */}
          <Heart className="text-[var(--color-wedding)] w-4 h-4 fill-current mb-1" />

          <img
            src="./assets/images/hand.png"
            alt="Manos con anillo"
            className="w-[250px] md:w-[350px] object-contain mix-blend-multiply"
          />

          {/* Corazón inferior */}
          <Heart className="text-[var(--color-wedding)] w-4 h-4 fill-current mt-1" />
        </div>

        {/* 3. ORNAMENTO FLORAL (Abajo) - Pegado lo más posible a las manos */}
        <div className="w-full -mt-2">
          <img
            src="./assets/images/ornamentos/ornamento-1.png"
            alt="Decoración floral"
            className="w-full max-w-[400px] mx-auto object-contain mix-blend-multiply opacity-90"
          />
        </div>

      </div>
    </section>
  );
}
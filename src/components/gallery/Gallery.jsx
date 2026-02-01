import { Heart } from "lucide-react";
// IMPORTANTE: Importa la imagen para que Vite/Webpack la procese bien
// Ajusta la cantidad de '../' según tu estructura de carpetas
import handBg from '../../assets/images/hand.png'; 

export default function Gallery() {
  const phrase = "Nuestro amor da un paso más y nos encantaría que seas parte de este día inolvidable.";

  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", 
  ];

  return (
    <section className="relative h-screen bg-amber-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* --- 1. FONDO DECORATIVO (Las Manos) --- */}
      {/* Lo colocamos absoluto, centrado y con muy baja opacidad para que parezca marca de agua */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
            src={handBg} 
            alt="Decoración de fondo" 
            className="w-[90%] md:w-[60%] lg:w-[40%] opacity-10 object-contain mix-blend-multiply grayscale contrast-125"
        />
      </div>

      {/* --- 2. CONTENIDO (Con z-10 para estar encima de las manos) --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Decoración Superior */}
        <div className="flex justify-center mb-6">
          <Heart className="text-blue-800 w-8 h-8 fill-blue-50/50" />
        </div>

        {/* La Frase */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-blue-900 mb-16 leading-tight max-w-4xl mx-auto drop-shadow-sm">
          "{phrase}"
        </h2>

      </div>
    </section>
  );
}
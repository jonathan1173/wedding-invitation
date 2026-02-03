import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function Carousel3D() {
  // CONFIGURACIÓN: Estado inicial en la foto central (índice 2)
  const [activeIndex, setActiveIndex] = useState(1);

  // FOTOS DE EJEMPLO (Reemplaza con las del Pre-Wedding real)
  const images = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
  ];

  // Función para manejar el clic en "Anterior"
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Función para manejar el clic en "Siguiente"
  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Lógica principal: Calcula el estilo 3D de cada carta según su distancia al centro
  const getCardStyle = (index) => {
    // Distancia relativa considerando el array circular
    // Esto asegura que la transición sea suave incluso al ir del último al primero
    const length = images.length;
    
    // Calculamos la distancia más corta (izquierda o derecha)
    let offset = (index - activeIndex + length) % length;
    if (offset > length / 2) offset -= length;

    // ESTILOS SEGÚN POSICIÓN
    
    // 1. CENTRO (La foto activa)
    if (offset === 0) {
      return {
        opacity: 1,
        transform: "translateX(0) translateZ(0) rotateY(0deg) scale(1.1)",
        zIndex: 30,
        filter: "brightness(100%)", // Foto brillante
      };
    } 
    
    // 2. IZQUIERDA INMEDIATA
    else if (offset === -1) {
      return {
        opacity: 0.8,
        transform: "translateX(-120%) translateZ(-300px) rotateY(45deg)",
        zIndex: 20,
        filter: "brightness(70%)", // Un poco oscurecida para dar profundidad
      };
    } 
    
    // 3. DERECHA INMEDIATA
    else if (offset === 1) {
      return {
        opacity: 0.8,
        transform: "translateX(120%) translateZ(-300px) rotateY(-45deg)",
        zIndex: 20,
        filter: "brightness(70%)",
      };
    } 
    
    // 4. MÁS LEJANAS (Ocultas o muy atrás)
    else {
      // Determinamos si van a la izquierda o derecha lejana
      const direction = offset < 0 ? "-100%" : "100%";
      const rotation = offset < 0 ? "60deg" : "-60deg";
      return {
        opacity: 0, // Las ocultamos para no saturar, o puedes poner 0.5 si quieres verlas al fondo
        transform: `translateX(${direction}) translateZ(-500px) rotateY(${rotation})`,
        zIndex: 10,
      };
    }
  };

  return (
    <section className="bg-amber-50 py-20 px-4 w-full overflow-hidden font-serif italic">
      
      {/* TÍTULO
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif italic text-blue-900 drop-shadow-sm flex items-center justify-center gap-4">
          <Camera className="w-8 h-8 opacity-50" />
          Album Pre-Wedding
          <Camera className="w-8 h-8 opacity-50" />
        </h2>
        <div className="w-32 h-1 bg-blue-800/20 mx-auto mt-6 rounded-full"></div>
      </div> */}

      {/* CONTENEDOR 3D (ESCENARIO) */}
      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] flex justify-center items-center perspective-container">
        
        {/* Renderizado de las cartas */}
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="absolute w-[280px] md:w-[400px] aspect-[4/5] rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-4 border-white bg-white"
            style={getCardStyle(index)}
          >
            <img
              src={img}
              alt={`Pre-wedding ${index}`}
              className="w-full h-full object-cover"
            />
            {/* Brillo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <span className="text-white font-serif italic text-xl">Ver foto</span>
            </div>
          </div>
        ))}

        {/* CONTROLES DE NAVEGACIÓN (FLECHAS) */}
        {/* Botón Izquierda */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-0 z-40 p-3 rounded-full bg-blue-900/10 text-blue-900 hover:bg-blue-900 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Botón Derecha */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-0 z-40 p-3 rounded-full bg-blue-900/10 text-blue-900 hover:bg-blue-900 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>

      </div>

    </section>
  );
}
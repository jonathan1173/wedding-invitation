import { Quote } from "lucide-react";
// Ajusta la ruta a tu imagen de fondo
import handBg from '../../assets/images/hand.png'; 

export default function StoryGallery() {
  // TEXTO 1: El párrafo principal
  const mainText = "Dios es quien establece nuestro camino; con Él como fundamento, su amor nos une y nuestra familia es testigo de su obra.";
  
  // TEXTO 2: La Cita Bíblica
  const bibleVerse = "Y sobre todas estas cosas, vestíos de amor, que es el vínculo perfecto.";
  const bibleRef = "Colosenses 3: 14";

  // IMÁGENES DE LA HISTORIA
  const gallery = [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&auto=format&fit=crop", 
  ];

  return (
    <section className="relative bg-amber-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* --- 1. MARCA DE AGUA (FONDO) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
            src={handBg} 
            alt="Decoración de fondo" 
            className="w-[100%] md:w-[70%] opacity-5 object-contain mix-blend-multiply grayscale contrast-125 rotate-180" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- 2. TEXTO SUPERIOR --- */}
        <div className="max-w-4xl text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-blue-900 leading-loose drop-shadow-sm px-4">
                {mainText}
            </h2>
            <div className="w-24 h-1 bg-blue-800/20 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* --- 3. GALERÍA --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-20 items-center">
            {/* Foto Izquierda */}
            <div className="md:col-span-4 h-[350px] md:h-[450px] relative group transform transition-all duration-500 hover:-rotate-1">
                <div className="absolute inset-0 bg-white shadow-lg transform rotate-2 rounded-xl border border-gray-100"></div>
                <div className="absolute inset-2 overflow-hidden rounded-lg bg-gray-100">
                    <img src={gallery[0]} alt="Historia 1" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Foto Centro */}
            <div className="md:col-span-4 h-[400px] md:h-[500px] relative group z-10 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white shadow-2xl rounded-xl border-[6px] border-white">
                    <img src={gallery[1]} alt="Historia 2" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

            {/* Foto Derecha */}
            <div className="md:col-span-4 h-[350px] md:h-[450px] relative group transform transition-all duration-500 hover:rotate-1">
                <div className="absolute inset-0 bg-white shadow-lg transform -rotate-2 rounded-xl border border-gray-100"></div>
                <div className="absolute inset-2 overflow-hidden rounded-lg bg-gray-100">
                    <img src={gallery[2]} alt="Historia 3" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* --- 4. VERSÍCULO BÍBLICO (CORREGIDO) --- */}
        {/* Usamos un contenedor más estrecho (max-w-2xl) y fondo sólido (bg-white) */}
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative bg-white py-10 px-8 md:px-12 rounded-lg shadow-xl border border-blue-50 text-center">
                
                {/* Comillas decorativas grandes y sutiles */}
                <Quote className="absolute top-4 left-6 w-10 h-10 text-blue-100 fill-current opacity-50" />
                
                <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-serif text-blue-900 leading-relaxed mb-6 italic">
                        “{bibleVerse}”
                    </p>
                    
                    {/* Línea divisoria pequeña */}
                    <div className="w-12 h-px bg-blue-200 mx-auto mb-4"></div>

                    <p className="text-sm font-bold tracking-[0.2em] text-blue-800 uppercase">
                        {bibleRef}
                    </p>
                </div>
                
                {/* Comillas cierre */}
                <Quote className="absolute bottom-4 right-6 w-10 h-10 text-blue-100 fill-current opacity-50 rotate-180" />
            </div>
        </div>

      </div>
    </section>
  );
}
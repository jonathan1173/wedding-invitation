import { useState } from "react";
import { MapPin, Church, PartyPopper } from "lucide-react"; 

export default function Location() {
  const [activeLocation, setActiveLocation] = useState("ceremony");

  // Enlaces (Ejemplos)
  const mapSrcCeremony = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6276839339153!2d-84.187592!3d10.047549999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f74b6e4b0a17%3A0x740b95ddc35f6acd!2sBosque%20Mariposa!5e0!3m2!1ses-419!2sni!4v1769976425956!5m2!1ses-419!2sni";
  const mapSrcReception =  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6276839339153!2d-84.187592!3d10.047549999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f74b6e4b0a17%3A0x740b95ddc35f6acd!2sBosque%20Mariposa!5e0!3m2!1ses-419!2sni!4v1769976425956!5m2!1ses-419!2sni";
  const linkCeremony = "https://maps.app.goo.gl/j1hx8pAeNvxauDDE6";
  const linkReception = "https://maps.app.goo.gl/j1hx8pAeNvxauDDE6";

  return (
    <section className="relative bg-amber-50 py-12 px-4 md:px-12 lg:px-24 text-gray-900  text-[var(----color-wedding)]">
      
      {/* Contenedor Principal: Alineación centrada y topeada para escritorio */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
        
        {/* --- COLUMNA 1: EL MAPA Y PESTAÑAS (IZQUIERDA) --- */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
            
            {/* Pestañas compactas */}
            <div className="flex gap-2">
                <button 
                    onClick={() => setActiveLocation("ceremony")}
                    className={`flex-1 font-serif italic py-2 px-4 rounded-lg text-xs md:text-sm  text-[var(--color-wedding)] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border
                        ${activeLocation === "ceremony" 
                            ? "bg-[var(--color-wedding)] text-white border-blue-800 shadow-md" 
                            : "bg-white text-gray-600 border-transparent hover:bg-blue-50 hover:text-blue-800"}`}
                >
                    <Church size={16} /> Ceremonia
                </button>
                <button 
                    onClick={() => setActiveLocation("reception")}
                    className={`flex-1 font-serif italic py-2 px-4 rounded-lg text-xs md:text-sm  text-[var(--color-wedding)] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border
                        ${activeLocation === "reception" 
                            ? "bg-[var(--color-wedding)] text-white border-blue-800 shadow-md" 
                            : "bg-white text-gray-600 border-transparent hover:bg-blue-50 hover:text-blue-800"}`}
                >
                    <PartyPopper size={16} /> Recepción
                </button>
            </div>

            {/* Mapa: Altura fija controlada (h-[450px] suele ser buen balance) */}
            <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200 relative bg-gray-200">
                <iframe
                    title="Mapa Ceremonia"
                    src={mapSrcCeremony}
                    className={`w-full h-full absolute inset-0 transition-opacity duration-500 ${activeLocation === 'ceremony' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                
                <iframe
                    title="Mapa Recepción"
                    src={mapSrcReception}
                    className={`w-full h-full absolute inset-0 transition-opacity duration-500 ${activeLocation === 'reception' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>

        {/* --- COLUMNA 2: INFORMACIÓN (DERECHA) --- */}
        {/* Usamos h-[450px] aprox para que coincida con el mapa o h-auto si es móvil */}
        <div className="w-full md:w-1/2 flex flex-col justify-between md:h-[500px] py-1">
          
          <div>
            {/* Título un poco más pequeño para compactar */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-wedding)] font-wedding mb-6 drop-shadow-sm leading-tight">
                Nuestra Ubicación
            </h2>

            <div className="space-y-3">
                {/* Tarjeta Ceremonia Compacta */}
                <div 
                    onClick={() => setActiveLocation("ceremony")}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border-l-4 ${
                        activeLocation === 'ceremony' 
                        ? 'bg-white border-blue-800 shadow-sm' 
                        : 'border-transparent hover:bg-black/5'
                    }`}
                >
                    <h3 className="text-lg md:text-2xl font-wedding text-[var(--color-wedding)] text-blue-900 mb-1 flex items-center gap-2">
                    <Church className="w-5 h-5 text-blue-800" /> Ceremonia
                    </h3>
                    <p className="text-[var(--color-wedding)] text-xl md:text-2xl lg:text-3xl font-semibold font-wedding ">
                    Bosque Mariposa Alajuera
                    </p>
                    {/* <p className="text-sm md:text-base text-gray-700">
                    Calle Principal 123, Ciudad
                    </p> */}
                    <p className="text-sm font-bold text-gray-500 mt-1">
                    3:00 PM
                    </p>
                </div>

                {/* Tarjeta Recepción Compacta */}
                <div 
                    onClick={() => setActiveLocation("reception")}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border-l-4 ${
                        activeLocation === 'reception' 
                        ? 'bg-white border-blue-800 shadow-sm' 
                        : 'border-transparent hover:bg-black/5'
                    }`}
                >
                    <h3 className="text-lg md:text-2xl font-wedding text-[var(--color-wedding)] text-blue-900 mb-1 flex items-center gap-2">
                    <PartyPopper className="w-5 h-5 text-blue-800" /> Recepción
                    </h3>
                    <p className="text-[var(--color-wedding)] text-xl md:text-2xl lg:text-3xl font-semibold font-wedding text-[var(--color-wedding)] ">
                    Bosque Mariposa Alajuera
                    </p>
                    {/* <p className="text-sm md:text-base text-gray-700">
                    Avenida Elegancia 456, Ciudad
                    </p> */}
                    <p className="text-sm font-bold text-gray-500 mt-1">
                    6:00 PM
                    </p>
                </div>
            </div>
          </div>

          {/* Sección Inferior: Divisor y Botón */}
          <div className="mt-4 md:mt-0">
            <div className="w-full h-px bg-gray-300 mb-6"></div>

            <a
                href={activeLocation === 'ceremony' ? linkCeremony : linkReception}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic group w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-wedding)] px-8 py-3 text-white shadow-lg hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300"
            >
                <MapPin className="h-4 w-4" />
                <span className="uppercase tracking-widest text-xs font-bold">
                {activeLocation === 'ceremony' ? "Ver Destino en Maps" : "Ver Salón en Maps"}
                </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
import { useEffect, useState } from "react";

export default function CountdownSection() {
  // CONFIGURACIÓN: Fecha de la boda
  const targetDate = new Date("2026-02-10T12:00:00");
  
  // CONFIGURACIÓN: Foto de la pareja para esta sección
  const coupleImage = "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop";

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Componente para un número individual (Días, Horas, etc.)
  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      {/* El número grande serif estilo elegante */}
      <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-blue-900 leading-none">
        {value}
      </span>
      {/* La etiqueta pequeña abajo */}
      <span className="text-[10px] md:text-xs tracking-[0.2em] text-blue-800/60 uppercase mt-2">
        {label}
      </span>
    </div>
  );

  // Separador (Los dos puntos :)
  const Separator = () => (
    <span className="text-2xl md:text-4xl text-blue-900 font-serif pb-6 mx-2 md:mx-4">
      :
    </span>
  );

  return (
    <section className="bg-amber-50 w-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
        
        {/* --- COLUMNA 1: IMAGEN DE LOS NOVIOS --- */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
          <img 
            src={coupleImage} 
            alt="Pareja" 
            className="w-full h-full object-cover"
          />
          {/* Overlay sutil para unificar tonos */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
        </div>

        {/* --- COLUMNA 2: EL CONTADOR (DISEÑO SOLICITADO) --- */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-16 px-6 md:px-12 text-center">
          
          {/* Título Cursivo */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-blue-900 mb-6">
            Falta poco Para...
          </h2>

          {/* BARRA DORADA SUPERIOR (Simulada con gradiente CSS) */}
          <div className="w-full max-w-md h-2 mb-6 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 rounded-full opacity-80"></div>

          {/* Subtítulo "EL GRAN DÍA" */}
          <h3 className="text-sm md:text-base font-bold tracking-[0.3em] text-blue-900 uppercase mb-8">
            El Gran Día
          </h3>

          {/* EL RELOJ */}
          <div className="flex items-center justify-center mb-8">
            <TimeBox value={timeLeft.days} label="DÍAS" />
            <Separator />
            <TimeBox value={timeLeft.hours} label="HORAS" />
            <Separator />
            <TimeBox value={timeLeft.minutes} label="MINUTOS" />
            <Separator />
            <TimeBox value={timeLeft.seconds} label="SEGUNDOS" />
          </div>

          {/* BARRA DORADA INFERIOR */}
          <div className="w-full max-w-md h-2 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 rounded-full opacity-80"></div>

        </div>

      </div>
    </section>
  );
}
// src/components/HeroSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // --- LÓGICA DEL RELOJ ---
  const targetDate = new Date("2026-02-05T15:00:00");
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

  // Sub-componentes visuales del reloj
  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-blue-900 leading-none drop-shadow-sm">
        {value}
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.2em] text-blue-800/60 uppercase mt-2 font-bold">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span className="text-2xl md:text-4xl text-blue-900 font-serif pb-6 opacity-50">
      :
    </span>
  );

  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col lg:flex-row items-center overflow-hidden bg-amber-50">
  
{/* ------------------------------------------------------- */}
      {/* COLUMNA IZQUIERDA: EL RELOJ */}
      {/* ------------------------------------------------------- */}
      <div className="z-40 w-full lg:w-1/2 px-6 lg:px-12 py-12 flex flex-col items-center lg:items-start text-center lg:text-left">

        {/* --- IMAGEN MOBILE MEJORADA --- */}
        {/* Solo visible en pantallas pequeñas (lg:hidden) */}
        <div className="lg:hidden w-full flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" 
              alt="Imagen de la boda" 
              className="w-full h-full object-cover"
            />
            {/* Un brillo sutil encima para dar elegancia */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </motion.div>
        </div>

        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-blue-900 mb-6 drop-shadow-sm">
          Falta poco para...
        </h2>

        {/* Barra Dorada */}
        <div className="w-full max-w-md h-2 mb-6 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 rounded-full opacity-80 lg:mx-0 mx-auto"></div>

        {/* Subtítulo */}
        <h3 className="text-sm md:text-base font-bold tracking-[0.3em] text-blue-900 uppercase mb-10">
          El Gran Día
        </h3>

        {/* El Contador */}
        <div className="flex items-center justify-center lg:justify-start">
          <TimeBox value={timeLeft.days} label="DÍAS" />
          <Separator />
          <TimeBox value={timeLeft.hours} label="HORAS" />
          <Separator />
          <TimeBox value={timeLeft.minutes} label="MIN" />
          <Separator />
          <TimeBox value={timeLeft.seconds} label="SEG" />
        </div>

        {/* Barra Dorada Inferior */}
        <div className="w-full max-w-md h-2 mt-10 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 rounded-full opacity-80 lg:mx-0 mx-auto"></div>
      </div>

      {/* Versión Desktop: Composición Flotante con Framer Motion */}
      <div className="hidden lg:block relative w-full lg:w-1/2 lg:h-[600px]">

        {/* Imagen 1: Superior Izquierda (Novios/Principal) */}
        <figure className="absolute top-10 right-[320px] w-72 z-20">
          <motion.img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"
            alt="Novios Boda"
            loading="lazy"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-2xl w-full border-4 border-white"
          />
        </figure>

        {/* Imagen 2: Inferior Izquierda (Detalle/Anillos/Flores) */}
        <figure className="absolute bottom-20 right-[400px] w-74 z-10">
          <motion.img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop"
            alt="Detalle Boda"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-xl w-full border-4 border-white"
          />
        </figure>

        {/* Imagen 3: Centro Derecha (Vestido/Lugar) */}
        <figure className="absolute top-24 right-10 w-80 z-30">
          <motion.img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop"
            alt="Celebración"
            loading="lazy"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-2xl w-full border-4 border-white"
          />
        </figure>

        {/* Imagen 4: Inferior Derecha (Pequeña decoración) */}
        <figure className="absolute bottom-10 right-20 w-70 z-20">
          <motion.img
            src="data:image/jpeg;base64,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"
            alt="Decoración Boda"
            loading="lazy"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-xl w-full border-4 border-white"
          />
        </figure>

      </div>
    </section>
  );
}
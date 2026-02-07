// src/components/HeroSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // --- LÓGICA DEL RELOJ ---
  const targetDate = new Date("2026-02-05T15:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: "00", hours: "00", minutes: "00", seconds: "00",
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

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <span className="text-5xl md:text-5xl lg:text-6xl font-wedding text-[var(--color-wedding)] font-bold leading-none drop-shadow-sm">
        {value}
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.2em] text-[var(--color-wedding)]/60 font-bold uppercase mt-2 font-bold">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span className="text-2xl md:text-4xl text-blue-900 font-serif pb-6 opacity-50">:</span>
  );

  return (
    /* CAMBIO CLAVE: flex-col-reverse para que el segundo div suba en móvil */
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden bg-amber-50 ">

      {/* COLUMNA: EL RELOJ (Ahora aparece abajo en móvil) */}
      <div className="z-40 w-full lg:w-1/2 px-6 lg:px-12  flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="font-wedding font-semibold text-3xl md:text-4xl lg:text-5xl text-[var(--color-wedding)] mb-4 text-center lg:text-left opacity-90">
          Falta poco para…
        </h2>

        <div className="w-full max-w-md h-2 mb-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 rounded-full mx-auto lg:mx-0"></div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-wedding font-bold text-[var(--color-wedding)] text-center lg:text-left mb-10 tracking-wide drop-shadow-md">
          El Gran Día
        </h2>

        <div className="flex text-2xl md:text-3xl text-[var(--color-wedding)] font-bold items-center justify-center lg:justify-start">
          <TimeBox value={timeLeft.days} label="DÍAS" />
          <Separator />
          <TimeBox value={timeLeft.hours} label="HORAS" />
          <Separator />
          <TimeBox value={timeLeft.minutes} label="MIN" />
          <Separator />
          <TimeBox value={timeLeft.seconds} label="SEG" />
        </div>
        <div className="w-full max-w-md h-2 mt-10 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 rounded-full opacity-80 lg:mx-0 mx-auto"></div>
      </div>

      {/* COLUMNA: IMÁGENES (Aparece arriba en móvil) */}
      {/* En móvil usamos posicionamiento relativo y grid para que no se encimen, en desktop absoluto */}
      <div className="relative w-full lg:w-1/2 h-[700px] sm:h-[750px] md:h-[650px] lg:h-[750px] flex items-center justify-center overflow-hidden">

        {/* 1. Arriba Izquierda */}
        <motion.figure
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute 
               z-10 
               w-[45%] sm:w-[40%] md:w-[35%] lg:w-[40%]
               left-[5%] sm:left-[8%] md:left-[10%] lg:left-[10%]
               top-[5%] sm:top-[7%] md:top-[8%] lg:top-[8%]"
        >
          <img
          loading="lazy"
            src="/assets/images/pareja/pareja-26.webp"
            alt="Boda 1"
            className="rounded-xl shadow-xl w-full border-2 md:border-4 border-white object-cover aspect-[4/5]"
          />
        </motion.figure>

        {/* 2. Arriba Derecha (Fondo) */}
        <motion.figure
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute 
               z-30 
               w-[50%] sm:w-[40%] md:w-[45%] lg:w-[38%]
               right-[5%] sm:right-[8%] md:right-[8%] lg:right-[10%]
               top-[25%] sm:top-[18%] md:top-[12%] lg:top-[15%]"
        >
          <img
          loading="lazy"
            src="/assets/images/pareja/pareja-25.webp"
            alt="Celebración 1"
            className="rounded-xl shadow-lg w-full border-2 md:border-4 border-white object-cover aspect-square"
          />
        </motion.figure>

        {/* 3. Abajo Izquierda (Intermedia) */}
        <motion.figure
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute 
               z-20 
               w-[48%] sm:w-[36%] md:w-[38%] lg:w-[38%]
               left-[8%] sm:left-[18%] md:left-[12%] lg:left-[15%]
               bottom-[24%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-[10%]"
        >
          <img
          loading="lazy"
            src="/assets/images/pareja/pareja-20.webp"
            alt="Boda 2"
            className="rounded-xl shadow-2xl w-full border-2 md:border-4 border-white object-cover aspect-[3/4]"
          />
        </motion.figure>

        {/* 4. Abajo Derecha (Frente/Principal) */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute 
               z-30 
               w-[50%] sm:w-[35%] md:w-[42%] lg:w-[35%]
               right-[5%] sm:right-[10%] md:right-[6%] lg:right-[8%]
               bottom-[10%] sm:bottom-[8%] md:bottom-[5%] lg:bottom-[12%]"
        >
          <img
          loading="lazy"
            src="/assets/images/pareja/pareja-21.webp"
            alt="Celebración 2"
            className="rounded-xl shadow-2xl w-full border-2 md:border-4 border-white object-cover aspect-[4/5]"
          />
        </motion.figure>

      </div>
    </section>
  );
}
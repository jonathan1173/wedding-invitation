import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const targetDate = new Date("2026-05-04T15:00:00");
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
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <span className="text-5xl md:text-5xl lg:text-6xl font-wedding text-[var(--color-wedding)] font-bold leading-none drop-shadow-sm">
        {value}
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.2em] text-[var(--color-wedding)]/60 uppercase mt-2 font-bold">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span className="text-2xl md:text-4xl text-blue-900 font-serif pb-6 opacity-50">:</span>
  );

  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden bg-amber-50">
      
      {/* COLUMNA RELOJ */}
      <div className="relative z-40 w-full lg:w-1/2 px-6 lg:px-12 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[600px] justify-center">
        
        {/* CAPA DE FONDO OPTIMIZADA (MÁSCARA LINEAL PARA EVITAR CORTES IZQUIERDOS) */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('https://we.shyamjos.com/images/bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Aplicamos un desvanecimiento en los 4 costados, especialmente fuerte a la izquierda y derecha
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}
        />

        {/* CONTENIDO */}
        <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
          <h2 className="font-wedding font-semibold text-3xl md:text-4xl lg:text-5xl text-[var(--color-wedding)] mb-4 opacity-90">
            Falta poco para…
          </h2>

          {/* Línea decorativa superior */}
          <div className="w-full max-w-md h-[2px] mb-8 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent lg:from-yellow-500/50 lg:via-yellow-500 lg:to-transparent rounded-full"></div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-wedding font-bold text-[var(--color-wedding)] mb-12 tracking-wide drop-shadow-md">
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

          {/* Línea decorativa inferior */}
          <div className="w-full max-w-md h-[2px] mt-12 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent lg:from-yellow-500/50 lg:via-yellow-500 lg:to-transparent rounded-full opacity-80"></div>
        </div>
      </div>

      {/* COLUMNA IMÁGENES */}
      <div className="relative w-full lg:w-1/2 h-[700px] sm:h-[750px] md:h-[650px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        
        <motion.figure
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute z-10 w-[45%] sm:w-[40%] md:w-[35%] lg:w-[40%] left-[5%] top-[5%]"
        >
          <img src="/assets/images/pareja/pareja-26.webp" className="rounded-xl shadow-xl w-full border-4 border-white object-cover aspect-[4/5]" alt="Boda 1" />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute z-30 w-[50%] sm:w-[40%] md:w-[45%] lg:w-[38%] right-[5%] top-[25%]"
        >
          <img src="/assets/images/pareja/pareja-25.webp" className="rounded-xl shadow-lg w-full border-4 border-white object-cover aspect-square" alt="Boda 2" />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute z-20 w-[48%] sm:w-[36%] md:w-[38%] lg:w-[38%] left-[8%] bottom-[24%]"
        >
          <img src="/assets/images/pareja/pareja-20.webp" className="rounded-xl shadow-2xl w-full border-4 border-white object-cover aspect-[3/4]" alt="Boda 3" />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute z-30 w-[50%] sm:w-[35%] md:w-[42%] lg:w-[35%] right-[5%] bottom-[10%]"
        >
          <img src="/assets/images/pareja/pareja-21.webp" className="rounded-xl shadow-2xl w-full border-4 border-white object-cover aspect-[4/5]" alt="Boda 4" />
        </motion.figure>
      </div>
    </section>
  );
}
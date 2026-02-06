import { motion } from "framer-motion";

export default function WeddingCalendar() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const calendarDays = [30, 31, 1, 2, 3, 4, 5]; 
  const targetDate = 5;

  const heartPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
    }
  };

  return (
    <section className="relative bg-amber-50 px-4 flex flex-col items-center justify-center font-wedding overflow-hidden min-h-[450px]">
      
      {/* 1. Ornamento Superior - Pegado al contenido */}
      <div className="absolute top-6 w-full flex justify-center pointer-events-none">
        <img 
          src="./assets/images/ornamentos/ornamento-4.png" 
          alt="Decoración superior" 
          className="w-full max-w-md opacity-40 object-contain"
        />
      </div>

      {/* 2. Contenido del Calendario - Espacios reducidos */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <h3 className="text-3xl md:text-4xl text-slate-800 mb-4 tracking-normal font-bold">
          Abril 2026
        </h3>

        <div className="grid grid-cols-7 gap-y-2 gap-x-3 md:gap-x-6 text-center items-center">
          {days.map((day, i) => (
            <span key={i} className="text-lg md:text-xl font-bold text-slate-900">
              {day}
            </span>
          ))}

          {calendarDays.map((day, index) => (
            <div key={index} className="relative flex items-center justify-center h-10 w-10 text-xl md:text-2xl text-slate-700">
              {day}

              {day === targetDate && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-14 h-14 md:w-16 md:h-16 drop-shadow-sm"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M50,35 C50,35 45,20 30,20 C15,20 10,35 10,45 C10,65 50,90 50,90 C50,90 90,65 90,45 C90,35 85,20 70,20 C55,20 50,35 50,35"
                      stroke="#f87171" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={heartPath}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Ornamento Inferior - Pegado al contenido */}
      <div className="absolute bottom-2 w-full flex justify-center pointer-events-none">
        <img 
          src="./assets/images/ornamentos/ornamento-5.png" 
          alt="Decoración inferior" 
          className="w-full max-w-md opacity-40 object-contain"
        />
      </div>

    </section>
  );
}
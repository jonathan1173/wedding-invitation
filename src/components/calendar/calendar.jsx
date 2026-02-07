import { motion } from "framer-motion";

export default function WeddingCalendar() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const calendarDays = [30, 31, 1, 2, 3, 4, 5];
  const targetDate = 5;

  return (
    <section className="relative bg-amber-50 px-4 flex flex-col items-center justify-center font-wedding overflow-hidden min-h-[450px]">
      
      {/* Ornamento superior */}
      <div className="absolute top-6 w-full flex justify-center pointer-events-none">
        <img
          src="./assets/images/ornamentos/ornamento-4.png"
          alt="Decoración superior"
          className="w-full max-w-md opacity-40 object-contain"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <h3 className="text-3xl md:text-4xl text-slate-800 mb-4 font-bold">
          Abril 2026
        </h3>

        <div className="grid grid-cols-7 gap-y-2 gap-x-3 md:gap-x-6 text-center items-center">
          {days.map((day, i) => (
            <span key={i} className="text-lg md:text-xl font-bold text-slate-900">
              {day}
            </span>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-10 w-10 text-xl md:text-2xl text-slate-700"
            >
              {day}

              {day === targetDate && (
                <motion.img
                  src="./assets/images/corazon.png"
                  alt="Corazón"
                  className="absolute w-14 h-14 md:w-16 md:h-16 pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ornamento inferior */}
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

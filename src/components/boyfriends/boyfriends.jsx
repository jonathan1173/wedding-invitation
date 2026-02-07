import { motion } from "framer-motion";

export default function Boyfriends() {
  return (
    /* Añadimos py-20 (padding vertical) para separar de otras secciones 
       y min-h-screen para que respire bien 
    */
    <section className="bg-amber-50 min-h-screen flex items-center justify-center py-10 overflow-hidden">
      
      {/* Contenedor del Arco (Puerta Centrada) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        // Reducimos h-[85vh] a una altura más controlada o fija si prefieres
        className="bg-white w-[90%] max-w-lg h-[500px] md:h-[650px] rounded-t-[250px] shadow-2xl border-x-2 border-t-2 border-blue-800/10 flex flex-col items-center pt-24 px-8 relative overflow-hidden my-12"
      >
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/pareja/pareja-27.webp" 
            alt="Background" 
            className="w-full h-full object-cover " 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" /> 
        </div>


        {/* Contenido con z-10 */}
        <div className="relative z-10 w-full mt-10">
          <Participation />
        </div>
      </motion.div>
    </section>
  );
}

function Participation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-center space-y-10"
    >
  

    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function GaleriaDuo() {
  return (
    <section className="py-20 bg-amber-50 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Imagen Principal Grande */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <img 
            src="./assets/images/pareja/pareja-2.jpg" 
            alt="Momento especial" 
            className="w-full h-[500px] object-cover rounded-sm shadow-sm"
          />
        </motion.div>

        {/* Imagen Secundaria más pequeña / Vertical */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-5"
        >
          <img 
            src="./assets/images/pareja/pareja-6.jpg" 
            alt="Detalle boda" 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-sm shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
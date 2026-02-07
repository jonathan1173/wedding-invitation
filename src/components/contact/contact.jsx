import { motion } from "framer-motion";

export default function Contact() {
  // Configuración del enlace
  const telefono = "50672575296";
  const mensaje = "Sí, asistiré"; // Mensaje predeterminado
  
  // Construcción del enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <section className="py-24 bg-amber-50 px-4 text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >


        <div className="font-wedding text-[var(--color-wedding)] italic">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Nuestro “SI” será aún más especial si estás con nosotros.
          </h2>
          
          <p className="not-italic font-sans tracking-[0.2em] text-sm md:text-base uppercase opacity-70 mb-10">
            Agradecemos confirmar tu asistencia al +506 7257-5296
          </p>

          {/* Botón Interactivo */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-wedding)] text-white px-12 py-4 rounded-full font-sans text-xs md:text-sm tracking-[0.3em] uppercase shadow-lg transition-all"
            style={{ backgroundColor: "var(--color-wedding)" }}
          >
            Confirmar Asistencia
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
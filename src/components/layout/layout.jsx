import { motion } from "framer-motion";

export function Layout1() {
  return (
    <section className="py-16 bg-amber-50 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Imagen principal */}
        <motion.div
          className="md:col-span-6 aspect-[4/5] rotate-[-0.5deg]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="./assets/images/pareja/pareja-8.jpg"
            alt="Pareja"
            className="w-full h-full object-cover border-4 border-white rounded-md shadow-md"
          />
        </motion.div>

        {/* Secundarias */}
        <div className="md:col-span-6 grid grid-rows-2 gap-6">
          <motion.div
            className="aspect-[4/5] rotate-[0.5deg]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="./assets/images/pareja/pareja-4.jpg"
              alt="Pareja"
              className="w-full h-full object-cover border-4 border-white rounded-md shadow-sm"
            />
          </motion.div>

          <motion.div
            className="aspect-[4/5] rotate-[-0.5deg]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="./assets/images/pareja/pareja-9.jpg"
              alt="Pareja"
              className="w-full h-full object-cover border-4 border-white rounded-md shadow-sm"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   Layout 2
   Tres horizontales con ritmo
========================= */
export function Layout2() {
  return (
    <section className="py-20 bg-amber-50 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <motion.div
          className="h-[380px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="./assets/images/pareja/pareja-14.jpg"
            alt="Pareja"
            className="w-full h-full object-cover border-4 border-white rounded-md shadow-sm"
          />
        </motion.div>

        <motion.div
          className="h-[420px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="./assets/images/pareja/pareja-11.jpg"
            alt="Pareja"
            className="w-full h-full object-cover border-4 border-white rounded-md shadow-sm"
          />
        </motion.div>

        <motion.div
          className="h-[380px]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="./assets/images/pareja/pareja-16.jpg"
            alt="Pareja"
            className="w-full h-full object-cover border-4 border-white rounded-md shadow-sm"
          />
        </motion.div>

      </div>
    </section>
  );
}
export function Layout3() {
  return (
    <section className="py-20 bg-amber-50 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Dos imágenes verticales distintas */}
        <div className="md:col-span-8 grid grid-cols-2 gap-8">
          <motion.div
            className="aspect-[3/5] rotate-[-2deg] scale-95"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="./assets/images/pareja/pareja-17.jpg"
              className="w-full h-full object-cover border-4 border-white rounded-md shadow-lg"
              alt="Pareja"
            />
          </motion.div>

          <motion.div
            className="aspect-[4/5] rotate-[2deg]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src="./assets/images/pareja/pareja-1.jpg"
              className="w-full h-full object-cover border-4 border-white rounded-md shadow-lg"
              alt="Pareja"
            />
          </motion.div>
        </div>

        {/* Imagen principal más grande */}
        <motion.div
          className="md:col-span-4 aspect-[2/3] rotate-[-1.5deg] scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="./assets/images/pareja/pareja-19.webp"
            className="w-full h-full object-cover border-4 border-white rounded-md shadow-xl"
            alt="Pareja"
          />
        </motion.div>

      </div>
    </section>
  );
}

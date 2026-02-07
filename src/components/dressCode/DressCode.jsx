import React from "react";
import { motion } from "framer-motion";

const DressCode = ({
    title = "Código de Vestimenta",
    prohibitedColors = [
        { name: "white", class: "bg-white border border-gray-200" },
        { name: "gold", class: "bg-gradient-to-tr from-amber-400 to-amber-200" },
        { name: "black", class: "bg-black" },
        { name: "lightBlue", class: "bg-sky-300" },
        { name: "navy", class: "bg-slate-700" },
        { name: "blue", class: "bg-blue-700" },
        { name: "red", class: "bg-red-600" },
    ],
}) => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative bg-amber-50 py-10 px-4 overflow-hidden flex flex-col items-center justify-center">

            {/* Ornamento Superior */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-4"
            >
                <img
                    src="./assets/images/ornamentos/ornamento-6.png"
                    className="w-full max-w-[200px] md:max-w-[300px] opacity-80 rotate-180"
                    alt="ornamento"
                />
            </motion.div>

            <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto font-wedding text-[var(--color-wedding)]">

                {/* Título Compacto */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold  py-3  mb-6"
                >
                    <img src="./assets/images/icono/icono-1.png" alt="Icono izquierdo" className=" h-20 inline-block mr-2" />
                    {title}
                    <img src="./assets/images/icono/icono-2.png" alt="Icono derecho" className=" h-18 inline-block ml-2" />
                </motion.h1>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">Gala</h2>
                {/* Mensaje con interlineado ajustado */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8 italic"
                >
                    Para mantener la armonía de esta celebración, le pedimos evitar los siguientes colores:
                </motion.p>

                {/* Grid de Colores: Centrado en mobile y desktop */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    // 'justify-center' asegura que el color rojo no quede huérfano a la izquierda
                    className="flex flex-wrap justify-center gap-4 w-full max-w-md"
                >
                    {prohibitedColors.map((color, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl border border-gray-500 overflow-hidden"
                            title={color.name}
                        >
                            <div className={`w-full h-full ${color.class}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Ornamento Inferior */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-8"
            >
                <img
                    src="./assets/images/ornamentos/ornamento-6.png"
                    className="w-full max-w-[200px] md:max-w-[300px] opacity-80"
                    alt="ornamento"
                />
            </motion.div>
        </section>
    );
};

export default DressCode;
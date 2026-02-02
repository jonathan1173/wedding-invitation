import React from "react";
import { motion } from "framer-motion";

const DressCode = ({
    title = "Gala",
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
    // Variants para animar los colores con stagger
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="bg-amber-50 ">

            <div className="p-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto rounded-md font-serif italic">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center w-full mb-6"
                >
                    <div className="flex-grow h-[1px] bg-blue-800 opacity-30"></div>
                    <div className="mx-4 flex items-center gap-6 px-6 py-2 border border-amber-200 bg-white shadow-md rounded-md">
                        <h2 className="text-blue-800 font-serif italic tracking-[0.2em] uppercase text-sm">
                            Código de vestimenta
                        </h2>
                    </div>
                    <div className="flex-grow h-[1px] bg-blue-800 opacity-30"></div>
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl text-blue-800 mb-8 font-serif italic"

                >
                    {title}
                </motion.h1>

                {/* Mensaje */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="border border-blue-800/30 p-6 md:p-8 mb-8 relative rounded-md bg-white shadow-sm"
                >
                    <p className="text-blue-800 text-lg md:text-xl italic leading-relaxed font-serif">
                        Para mantener la armonía de esta celebración, le pedimos evitar los siguientes colores:
                    </p>
                </motion.div>

                {/* colores prohibidos */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 w-full justify-items-center"
                >
                    {prohibitedColors.map((color, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-14 h-14 rounded-full shadow-md border border-gray-200 cursor-default transform transition-transform hover:scale-110"
                            title={color.name}
                        >
                            <div className={`w-full h-full rounded-full ${color.class}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default DressCode;

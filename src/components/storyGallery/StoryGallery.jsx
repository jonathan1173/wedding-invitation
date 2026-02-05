import { Quote } from "lucide-react";
// Imagen en `public`
const handBg = '/assets/images/hand.png';

export default function StoryGallery() {
    // TEXTO 1: El párrafo principal
    const mainText = "Dios es quien establece nuestro camino; con Él como fundamento, su amor nos une y nuestra familia es testigo de su obra.";

    // TEXTO 2: La Cita Bíblica
    const bibleVerse = "Y sobre todas estas cosas, vestíos de amor, que es el vínculo perfecto.";
    const bibleRef = "Colosenses 3: 14";

    // IMÁGENES DE LA HISTORIA
    const gallery = [
        "/assets/images/pareja/image-4.webp",
        "/assets/images/pareja/image-6.webp",
        "/assets/images/pareja/image-7.webp",
    ];

    return (
        <section className="relative bg-amber-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-serif italic">

            {/* --- 1. MARCA DE AGUA (FONDO) --- */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <img
                    loading="lazy"
                    src={handBg}
                    alt="Decoración de fondo"
                    className=" w-[100%] md:w-[70%] opacity-5 object-contain mix-blend-multiply grayscale contrast-125 rotate-180"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

                {/* --- 2. TEXTO SUPERIOR --- */}
                {/* --- 2. TEXTO SUPERIOR --- */}
                <div className="max-w-4xl text-center mb-16">
                    <h2 className="font-wedding text-[var(--color-wedding)] text-3xl md:text-4xl lg:text-5xl px-4">
                        {mainText}
                    </h2>

                    <br />

                    <h2 className="font-wedding text-[var(--color-wedding)] text-3xl md:text-4xl lg:text-5xl px-4">
                        “{bibleVerse}”
                    </h2>

                    <br />

                    <h2 className="font-wedding text-[var(--color-wedding)] text-3xl md:text-4xl lg:text-5xl px-4">
                        {bibleRef}
                    </h2>

                    <div className="w-24 h-1 bg-[var(--color-wedding)]/20 mx-auto mt-8 rounded-full"></div>
                </div>




                {/* --- 3. GALERÍA --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-20 items-center">
                    {/* Foto Izquierda */}
                    <div className="md:col-span-4 h-[350px] md:h-[450px] relative group transform transition-all duration-500 hover:-rotate-1">
                        <div className="absolute inset-0 bg-white shadow-lg transform rotate-2 rounded-xl border border-gray-100"></div>
                        <div className="absolute inset-2 overflow-hidden rounded-lg bg-gray-100">
                            <img loading="lazy" src={gallery[0]} alt="Historia 1" className="grayscale w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Foto Centro */}
                    <div className="md:col-span-4 h-[400px] md:h-[500px] relative group z-10 transform transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-white shadow-2xl rounded-xl border-[6px] border-white">
                            <img loading="lazy" src={gallery[1]} alt="Historia 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>

                    {/* Foto Derecha */}
                    <div className="md:col-span-4 h-[350px] md:h-[450px] relative group transform transition-all duration-500 hover:rotate-1">
                        <div className="absolute inset-0 bg-white shadow-lg transform -rotate-2 rounded-xl border border-gray-100"></div>
                        <div className="absolute inset-2 overflow-hidden rounded-lg bg-gray-100">
                            <img loading="lazy" src={gallery[2]} alt="Historia 3" className="grayscale w-full h-full object-cover" />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
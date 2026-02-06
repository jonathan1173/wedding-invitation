import { Quote } from "lucide-react";
// Imagen en `public`
const handBg = '/assets/images/hand.png';

export default function StoryGallery() {


    // IMÁGENES DE LA HISTORIA
    const gallery = [
        "/assets/images/pareja/image-4.webp",
        "/assets/images/pareja/image-6.webp",
        "/assets/images/pareja/image-7.webp",
    ];

    return (
        <section className="relative bg-amber-50 py-10 px-6 md:px-12 lg:px-24 overflow-hidden font-serif italic">


            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

    


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
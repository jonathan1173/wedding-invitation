import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [
    "./assets/images/pareja/pareja-22.webp",
    "./assets/images/pareja/pareja-24.webp",
    "./assets/images/pareja/pareja-28.webp",
    "./assets/images/pareja/pareja-13.jpg",
    "./assets/images/pareja/pareja-10.jpg",
    "./assets/images/pareja/pareja-14.jpg",
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index) => {
    const length = images.length;
    let offset = (index - activeIndex + length) % length;
    if (offset > length / 2) offset -= length;

    if (offset === 0) {
      return {
        opacity: 1,
        transform: "translateX(0) translateZ(0) rotateY(0deg) scale(1.1)",
        zIndex: 30,
        filter: "brightness(100%)",
      };
    } 
    else if (offset === -1) {
      return {
        opacity: 0.8,
        transform: "translateX(-120%) translateZ(-300px) rotateY(45deg)",
        zIndex: 20,
        filter: "brightness(70%)",
      };
    } 
    else if (offset === 1) {
      return {
        opacity: 0.8,
        transform: "translateX(120%) translateZ(-300px) rotateY(-45deg)",
        zIndex: 20,
        filter: "brightness(70%)",
      };
    } 
    else {
      const direction = offset < 0 ? "-100%" : "100%";
      const rotation = offset < 0 ? "60deg" : "-60deg";
      return {
        opacity: 0,
        transform: `translateX(${direction}) translateZ(-500px) rotateY(${rotation})`,
        zIndex: 10,
      };
    }
  };

  return (
    <section className="bg-amber-50 py-20 px-4 w-full overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] flex justify-center items-center perspective-container">
        
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="absolute w-[280px] md:w-[400px] aspect-[4/5] rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-4 border-white bg-white"
            style={getCardStyle(index)}
          >
            <img
              src={img}
              loading="lazy"
              alt={`Pre-wedding ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* CONTROLES */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-0 z-40 p-3 rounded-full bg-blue-900/10 text-blue-900 hover:bg-blue-900 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-0 z-40 p-3 rounded-full bg-blue-900/10 text-blue-900 hover:bg-blue-900 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>

      </div>
    </section>
  );
}
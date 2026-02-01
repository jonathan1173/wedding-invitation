// Asegúrate de importar la imagen arriba si estás usando Vite/Webpack
// Si no, puedes dejar la ruta string como la tenías, pero importar es más seguro.
import decoracionBg from '../../assets/images/decoracionBg.png'; // Ajusta la ruta

export default function WelcomeCard({ onOpen }) {
  
  const handleOpenClick = (e) => {
    e.stopPropagation(); 
    if (onOpen) onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/80 backdrop-blur-lg transition-opacity duration-500 overflow-hidden">
      
      {/* --- ORNAMENTO 1: SUPERIOR DERECHO --- */}
      {/* Rotado 180 para que la esquina apunte hacia adentro */}
      <img 
        src={decoracionBg} 
        alt="Decoración" 
        className="absolute top-[-20px] right-[-30px] w-[100%] md:w-[100%] max-w-[450px] rotate-180 z-0 pointer-events-none opacity-90"
      />

      {/* --- ORNAMENTO 2: INFERIOR IZQUIERDO --- */}
      {/* Posición natural */}
      <img 
        src={decoracionBg} 
        alt="Decoración" 
        className="absolute bottom-[-20px] left-[-30px] w-[100%] md:w-[100%] max-w-[450px] z-0 pointer-events-none opacity-90"
      />

      {/* --- EL SOBRE (CARD) --- */}
      <div 
        onClick={handleOpenClick}
        className="relative z-10 w-[350px] h-[220px] bg-gray-100 rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
      >
        
        {/* Borde decorativo */}
        <div className="absolute inset-0 border-2 border-gray-200 rounded-lg"></div>

        {/* Solapa Superior */}
        <div className="absolute top-[-110px] left-1/2 transform -translate-x-1/2 rotate-45 w-[220px] h-[220px] bg-white border-b-2 border-r-2 border-gray-300 shadow-sm z-10"></div>

        {/* Sombras inferiores */}
        <div className="absolute bottom-0 w-full h-full pointer-events-none">
             <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[175px] border-b-[110px] border-l-transparent border-b-gray-200/50"></div>
             <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[175px] border-b-[110px] border-r-transparent border-b-gray-200/50"></div>
        </div>

        {/* Botón / Sello */}
        <div className="absolute top-[85px] left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={handleOpenClick}
            className="w-14 h-12 bg-red-700 rounded-full border-4 border-red-800 shadow-lg flex items-center justify-center text-white font-serif font-bold text-xs hover:bg-red-600 transition-colors"
          >
            ABRIR
          </button>
        </div>

      </div>
    </div>
  )
}
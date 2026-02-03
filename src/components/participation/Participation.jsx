import React from 'react';

const Participation = () => {
  return (
    <div className="flex h-screen items-center justify-center min-h-[300px] bg-amber-50 p-6">
      <div className="relative border-2 border-dashed border-blue-800/30 p-8 max-w-lg w-full text-center">
        
        {/* Decoración en las esquinas */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-800"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-800"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-800"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-800"></div>

        <h2 className="text-blue-800 font-serif italic text-lg md:text-3xl lg:text-4xl leading-relaxed">
          Con la bendicion de Dios, nos complace invitarte a compartir con nosotros este dia tan especial.
        </h2>
        
        {/* Línea decorativa inferior */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-blue-800"></div>
          <span className="text-blue-800">❦</span>
          <div className="h-[1px] w-12 bg-blue-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Participation;
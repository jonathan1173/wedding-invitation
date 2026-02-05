import { createContext, useContext, useRef, useState, useEffect } from "react";
// Archivo en `public` — usar ruta pública
const musicFile = "/assets/music/WhenGodMadeYou.mp3";

const MusicContext = createContext();

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic debe usarse dentro de un MusicProvider");
  }
  return context;
};

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Inicializar el audio una sola vez
  useEffect(() => {
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true; // Bucle infinito
    audioRef.current.volume = 0.5; // Volumen al 50%

    // Cleanup si el componente se desmonta
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error al reproducir:", err));
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, playMusic, pauseMusic, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
// src/App.jsx
import React, { lazy, Suspense } from "react";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 

// Componentes Críticos (Carga inmediata para evitar parpadeos en el Hero)
import Hero from "./components/hero/Hero";

// Componentes Lazy (Se cargarán en segundo plano)
const Gallery = lazy(() => import("./components/gallery/Gallery"));
const Versiculo1 = lazy(() => import("./components/versiculos/versiculo1"));
const CountdownSection = lazy(() => import("./components/count/CountdownClock"));
const WeddingCalendar = lazy(() => import("./components/calendar/calendar"));
const MobileShowcase = lazy(() => import("./components/versiculos/versiculo2"));
const Participation = lazy(() => import("./components/participation/Participation"));
const Location = lazy(() => import("./components/location/location"));
const StoryGallery = lazy(() => import("./components/storyGallery/StoryGallery"));
const DressCode = lazy(() => import("./components/dressCode/DressCode"));
const GiftSection = lazy(() => import("./components/giftSection/giftSection"));
const Carousel3D = lazy(() => import("./components/carousel/Carousel3D"));
const Boyfriends = lazy(() => import("./components/boyfriends/boyfriends"));
const FinalSection = lazy(() => import("./components/Footer/Footer"));

// Placeholder elegante mientras carga
const Loader = () => <div className="bg-amber-50 h-screen w-full" />;

function App() {
  return (
    <MusicProvider>
      <div className="App">
        {/* El Hero se renderiza siempre para el LCP */}
        <Hero />
        
        {/* El resto se carga bajo demanda */}
        <Suspense fallback={<Loader />}>
          <Gallery />
          <Versiculo1 />
          <CountdownSection />
          <WeddingCalendar />
          <MobileShowcase />
          <Participation />
          <Location />
          <StoryGallery />
          <DressCode />
          <GiftSection />
          <Carousel3D />
          <Boyfriends />
          <FinalSection />
        </Suspense>
      </div>
    </MusicProvider>
  );
}

export default App;
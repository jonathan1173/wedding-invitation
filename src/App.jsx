// src/App.jsx
import React, { lazy, Suspense } from "react";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 

// Componentes críticos
import Hero from "./components/hero/Hero";

// Componentes lazy
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
const Versiculo4 = lazy(() => import("./components/versiculos/versiculo3"));
const GaleriaDuo = lazy(() => import("./components/galaxi/galaxi"));
const ConfirmacionWhatsApp = lazy(() => import("./components/contact/contact"));
import { Layout1, Layout2 , Layout3} from "./components/layout/layout";

// Loader
const Loader = () => <div className="bg-amber-50 h-screen w-full" />;

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Hero />

        <Suspense fallback={<Loader />}>
          <Gallery />
          <Layout1 />
          <Versiculo1 />
          <CountdownSection />
          <WeddingCalendar />
          <MobileShowcase />
          <Layout3 /> 
          <Participation />
          <Location />
          <Layout2 />
          <ConfirmacionWhatsApp />
          <StoryGallery />
          <DressCode />
          <GaleriaDuo />
          <GiftSection />
          <Carousel3D />
          <Versiculo4 />
          <Boyfriends />
          <FinalSection />
        </Suspense>
      </div>
    </MusicProvider>
  );
}

export default App;

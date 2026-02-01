// src/App.jsx
import Hero from "./components/hero/Hero";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 
import Location from "./components/location/location";
import Gallery from "./components/gallery/Gallery";
import StoryGallery from "./components/storyGallery/StoryGallery";
import CountdownSection from "./components/count/CountdownClock";
import Carousel3D from "./components/carousel/Carousel3D";
import FinalSection from "./components/FinalSection/FinalSection";


function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Hero />
        <Gallery />
        <CountdownSection />
        <Location />
        <StoryGallery />
        <Carousel3D />
        <FinalSection />
   
      </div>
    </MusicProvider>
  );
}

export default App;
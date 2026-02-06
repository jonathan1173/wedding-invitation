// src/App.jsx
import Hero from "./components/hero/Hero";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 
import Location from "./components/location/location";
import Gallery from "./components/gallery/Gallery";
import StoryGallery from "./components/storyGallery/StoryGallery";
import CountdownSection from "./components/count/CountdownClock";
import Carousel3D from "./components/carousel/Carousel3D";
import FinalSection from "./components/Footer/Footer";
import DressCode from "./components/dressCode/DressCode";
import GiftSection from "./components/giftSection/giftSection";
import Participation from "./components/participation/Participation";
import Boyfriends from "./components/boyfriends/boyfriends";
import Versiculo1 from "./components/versiculos/versiculo1";
import WeddingCalendar from "./components/calendar/calendar";
import MobileShowcase from "./components/versiculos/versiculo2";

function App() {
  
  return (
    <MusicProvider>
      <div className="App">
        <Hero />
        <Gallery />
        <Versiculo1 />
        <CountdownSection />
        <WeddingCalendar />
        <MobileShowcase/>

        {/* <Participation /> */}
        {/* <Location /> */}
        {/* <StoryGallery /> */}
        {/* <DressCode /> */}
        {/* <GiftSection /> */}
        {/* <Carousel3D /> */}
        {/* <Boyfriends /> */}
        
        {/* <FinalSection /> */}
   
      </div>
    </MusicProvider>
  );
}

export default App;
// src/App.jsx
import Hero from "./components/hero/Hero";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 
import Location from "./components/location/location";
import Gallery from "./components/gallery/Gallery";
import StoryGallery from "./components/storyGallery/StoryGallery";

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Hero />
        <Gallery />
        <Location />
        <StoryGallery />
      </div>
    </MusicProvider>
  );
}

export default App;
// src/App.jsx
import Hero from "./components/hero/Hero";
import { MusicProvider } from "./hooks/musicContext/MusicContext"; 
import Location from "./components/location/location";

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Hero />
        <Location />
        
      </div>
    </MusicProvider>
  );
}

export default App;
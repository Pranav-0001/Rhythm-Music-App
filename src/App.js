import Artist from "./Components/Artists/Artist";
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Pages/Music";
// import Recommented from "./Components/Recommended/Recommented";


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Artist/>
     {/* <AudioPlayer/> */}
     <Music/>
     
    </div>
  );
}

export default App;

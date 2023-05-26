import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "./Components/Artists/Artist";
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import AddMusicPage from "./Pages/AddMusicPage";
import AddArtistPage from "./Pages/AddArtistPage";
// import Recommented from "./Components/Recommended/Recommented";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       
       <Route path="/" Component={Home} />
       <Route path="/login" Component={Login}/>
       <Route path="/add-Music" Component={AddMusicPage}/>
       <Route path="/add-Artist" Component={AddArtistPage}/>
    </Routes>
    
     </BrowserRouter>
     
    </div>
  );
}

export default App;

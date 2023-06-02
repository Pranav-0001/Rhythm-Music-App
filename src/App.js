import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import AddMusicPage from "./Pages/AddMusicPage";
import AddArtistPage from "./Pages/AddArtistPage";
import ArtistPage from "./Pages/artistPage";
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

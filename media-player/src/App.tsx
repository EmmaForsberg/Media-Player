import Banner from "./components/Banner";
import Playlist from "./components/Playlist";
import Player from "./components/player"
import "./App.css";


function App() {
  return (
    <div className="app">
      <Banner />
      <div className="grid">
        <Playlist />
        <Player />
      </div>
    </div>
  );
}

export default App;

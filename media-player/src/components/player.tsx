import AlbumCover from "../components/AlbumCover";
import SongInfo from "../components/SongInfo";
import ProgressBar from "../components/ProgressBar";
import Controls from "../components/Controls";
import "../components/player.css";

const Player = () => {
  return (
    <section className="player">
      <AlbumCover image="whereweusedtolive.jpg" />
      <SongInfo title="Where we used to live" artist="Esbjörn Svensson Trio" />
      <ProgressBar currentTime={42} duration={180} />
      <Controls />
    </section>
  );
};

export default Player;

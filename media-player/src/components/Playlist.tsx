import "../components/playlist.css";
import PlaylistItem from ".//PlaylistItem";

const Playlist = () => {
  return (
    <aside className="playlist">
      <h2>Playlist</h2>
         <PlaylistItem
        image="/whereweusedtolive.jpg"
        title="Where we used to live"
        artist="Esbjörn Svensson Trio"
      />
      <PlaylistItem
        image="/saktavigåigenomstan.jpg"
        title="Sakta går vi genom stan"
        artist="Monica Zetterlund"
      />
      <PlaylistItem
        image="/someothertime.jpg"
        title="Some Other Time"
        artist="Ellen Andersson"
      />
      <PlaylistItem
        image="/thewayyoulooktonight.jpg"
        title="The way you look tonight"
        artist="Isabella Lundgren"
      />
      <PlaylistItem image="/skyllpåmig.jpg" title="Skyll på mig" artist="Bo Sundström" />
      <PlaylistItem image="/internationalen.jpg" title="Internationalen" artist="Franska Trion" />
      <PlaylistItem image="/skullealdrig.jpg" title="Det skulle aldrig bli" artist="Iris Bergcrantz" />
      <PlaylistItem image="/isagel.jpg" title="Isagel" artist="Josefin Lindstrand" />
    </aside>
  );
};

export default Playlist;

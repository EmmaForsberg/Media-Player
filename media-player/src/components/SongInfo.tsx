import "./songinfo.css";

type SongInfoProps = {
  title: string;
  artist: string;
};

const SongInfo = ({ title, artist }: SongInfoProps) => {
  return (
    <div className="song-info">
      <span className="material-symbols-outlined">add</span>

      <div className="text">
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
      </div>

      <span className="material-symbols-outlined">favorite</span>
    </div>
  );
};

export default SongInfo;

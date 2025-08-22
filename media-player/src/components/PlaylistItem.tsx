import styles from "./PlaylistItem.module.css";

type PlaylistItemProps = {
  image: string;
  title: string;
  artist: string;
};

const PlaylistItem = ({ image, title, artist }: PlaylistItemProps) => {
  return (
    <div className={styles.playlistItem}>
      <img src={image} alt={title} className={styles.thumb} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
            <div className={styles.playButton}>
        <span className="material-symbols-outlined">play_arrow</span>
      </div>
    </div>
  );
};

export default PlaylistItem;

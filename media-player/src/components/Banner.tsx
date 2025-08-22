import styles from "../components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
    <header className="row mb-4">
      <div className="col-5 mt-5">
        <span className="material-symbols-outlined">arrow_back</span>
      </div>
      <div className="col-6 mt-5 ">Playlist - Happy</div>
       <div className="col-1 mt-5">
        <span className="material-symbols-outlined">more_vert</span>
      </div>
    </header>
    </div>
  );
};

export default Banner;

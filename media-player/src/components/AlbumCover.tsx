
type AlbumCoverProps = {
  image: string;
};

const AlbumCover = ({ image }: AlbumCoverProps) => {
  return (
    <div className="album-cover">
      <img src={image} alt="Album cover" />
    </div>
  );
};

export default AlbumCover;

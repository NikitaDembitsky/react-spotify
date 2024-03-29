import "./TrackCard.css";

interface Props {
  name: string;
  image: string;
  artist: string;
}

const TrackCard: React.FC<Props> = ({ name, image, artist }) => {
  return (
    <div className="search__tracks">
      <div className="track__image">
        <img className="image" src={image} alt={name}></img>
      </div>
      <div className="track__name">
        <p className="name">{name}</p>
      </div>
      <div className="track__artist">
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

export default TrackCard;

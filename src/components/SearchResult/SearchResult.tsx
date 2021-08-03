import "./SearchResult.css";

const SearchResult: any = (props: {
  name: string;
  image: any;
  artist: string;
}) => {
  const { name, image, artist } = props;
  return (
    <div className="search__tracks">
      <div className="track__image">
        <img className="image" src={image} alt={name}></img>
      </div>
      <div className="track__name">
        <p>{name}</p>
      </div>
      <div className="track__artist">
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default SearchResult;

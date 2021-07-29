import { Link } from "react-router-dom"
import { getCodeValue } from "../../utils";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>SPOTIFY APP</h1>
      <button onClick={getCodeValue}>
        <Link to="/search"> LOGIN WITH SPOTIFY</Link>
      </button>
    </div>
  );
};

export default HomePage;

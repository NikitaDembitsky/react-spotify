import "./HomePage.css";
import { getCodeValue } from "../../utils";
import { Button } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <p className="homepage__title">SPOTIFY APP</p>
      <Button onClick={getCodeValue} color="primary">
        <p className="text">LOGIN WITH SPOTIFY</p>
      </Button>
    </div>
  );
};

export default HomePage;

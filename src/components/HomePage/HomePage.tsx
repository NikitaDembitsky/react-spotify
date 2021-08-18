import "./HomePage.css";
import { getCodeValue } from "../../utils";
import { Button } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">SPOTIFY APP</h1>
      <Button onClick={getCodeValue} color="primary">
        <p className="text">LOGIN WITH SPOTIFY</p>
      </Button>
    </div>
  );
};

export default HomePage;

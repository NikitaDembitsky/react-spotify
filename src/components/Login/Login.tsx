import "./Login.css";
import { getCodeValue } from "../../utils";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div>
      <button onClick={getCodeValue}>
        <Link to="/search"> LOGIN WITH SPOTIFY</Link>
      </button>
    </div>
  );
};

export default Login;

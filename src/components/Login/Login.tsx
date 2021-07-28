import "./Login.css";
import { getCodeValue } from "../../utils";

const Login: React.FC = () => {
  return (
    <div>
      <button onClick={getCodeValue}>LOGIN WITH SPOTIFY</button>
    </div>
  );
};

export default Login;

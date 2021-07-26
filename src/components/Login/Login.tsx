import "./Login.css";
import { loginUrl } from "../../spotify";
import { getCodeValue } from "../../authenticServices";

const Login: React.FC = () => {
  console.log(loginUrl)
  return (
    <div>
      <button onClick={getCodeValue}>LOGIN WITH SPOTIFY</button>
    </div>
  );
};

export default Login;

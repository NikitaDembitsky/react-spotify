import "./Login.css";
import { loginUrl } from "../../spotify";
import { getCodeValue } from "../../authenticServices";

const Login = () => {
  return (
    <div>
      <a onClick={getCodeValue}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;

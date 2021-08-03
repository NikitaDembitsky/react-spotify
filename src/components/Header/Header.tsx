import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authApi } from "../../api/authApi";
import { RootState } from "../../store";
import "./Header.css";

const Header: React.FC = () => {
  const name = useSelector((state: RootState) => state.authReducer.name);
  console.log(name)
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__name">{name}</div>
      <div className="header__logout">
        <p onClick={() => authApi.getCurrentUser()}>Log Out</p>
      </div>
    </div>
  );
};

export default Header;

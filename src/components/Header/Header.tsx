import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.css";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.authReducer.user);
  const redirect = user ? "/search" : "/";
  return (
    <div className="header">
      <Link to={redirect}>
        <div className="header__logo"></div>
      </Link>
      <div className="header__content">
        <div className="header__name">
          <p className="name__text">
            <Link to="/profile">{user?.display_name}</Link>
          </p>
        </div>
        {user ? <LogoutButton /> : null}
      </div>
    </div>
  );
};

export default Header;

import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { logOut } from "../../utils";
import "./Header.css";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.authReducer.user);
  return (
    <div className="header">
      <Link to="/search">
        <div className="header__logo"></div>
      </Link>
      <div className="header__content">
        <div className="header__name"><p className="name__text"><Link to="/profile">{user?.display_name}</Link></p></div>
        <div className="header__logout">
          <Button onClick={logOut}>
            <p className="logout__text">Log Out</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

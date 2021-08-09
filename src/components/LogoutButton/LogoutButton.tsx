import { logOut } from "../../utils";
import { Button } from "@material-ui/core";
import "./LogoutButton.css";

const LogoutButton = () => {
  return (
    <div>
      <div className="header__logout">
        <Button onClick={logOut}>
          <p className="logout__text">Log Out</p>
        </Button>
      </div>
    </div>
  );
};

export default LogoutButton;

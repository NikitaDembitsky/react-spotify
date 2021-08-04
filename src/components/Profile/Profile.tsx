import "./Profile.css";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.authReducer.user);
  return (
    <div className="profile">
      <div className="profile__info">
        <p className="profile__name">Username: {user?.id}</p>
        <p className="profile__email">Email: {user?.email}</p>
        <p className="profile__country">Country or region: {user?.country}</p>
      </div>
    </div>
  );
};

export default Profile;

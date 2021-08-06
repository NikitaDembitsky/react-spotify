import "./Profile.css";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.authReducer.user);
  return (
    <div className="profile">
      <div className="profile__title">
        <h1>Profile</h1>
      </div>
      <div className="profile__info">
        <p className="profile__name">
          <span className="title">Username:</span> {user?.id}
        </p>
        <p className="profile__email">
          <span className="title">Email:</span> {user?.email}
        </p>
        <p className="profile__country">
          <span className="title">Country or region:</span> {user?.country}
        </p>
      </div>
    </div>
  );
};

export default Profile;

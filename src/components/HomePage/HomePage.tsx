import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>SPOTIFY APP</h1>
      <Link to="/login">Войти</Link>
    </div>
  );
};

export default HomePage;

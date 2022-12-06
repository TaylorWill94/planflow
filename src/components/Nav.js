import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <p>Contact</p>
      <Link to="/shop">
        <p>Shop</p>
      </Link>
    </div>
  );
}

export default Nav;

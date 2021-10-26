import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>This is the Main component</div>
      </Link>
    </nav>
  );
}

export default Header;
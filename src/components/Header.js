import { Link } from "react-router-dom";
import { logOut } from "../services/firebase"

function Header(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <div>What IS that sound?</div>
          </Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
        <li onClick={logOut}>Logout</li>
      </ul>
    </nav>
  );
}

export default Header;
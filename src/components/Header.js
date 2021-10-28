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
            {
              props.user ?
                <li onClick={logOut}>Logout</li>
              :<li>
                <Link to="/login">Login</Link>
              </li>
            }
      </ul>
    </nav>
  );
}

export default Header;
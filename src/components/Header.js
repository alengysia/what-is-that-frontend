import { Link } from "react-router-dom";
import { logOut } from "../services/firebase"
import { signIn } from '../services/firebase'
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
              <>
                <li>Stay awhile and listen, {props.user.displayName}</li>
                <li>
                  <img 
                    src={props.user.photoURL} 
                    alt={props.user.displayName} 
                    />
                </li>
                <Link to="/landing">User Page</Link>
                <li onClick={logOut}>Logout</li>
              </>
              :<li>
                
                <button onClick={signIn}>Login with Google</button>
              </li>
            }
      </ul>
    </nav>
  );
}

export default Header;
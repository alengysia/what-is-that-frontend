import { Link } from "react-router-dom";
import { logOut } from "../services/firebase"
import { signIn } from '../services/firebase'
import styled from 'styled-components';




function Header(props) {

  const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap');

    font-family: 'Exo 2', sans-serif;
    ul{
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    a{
      text-decoration: none;
    }
    .home-link{
      font-size: 38px;
      font-weight: 600;
    }
    .cain{
      font-size: 22px;

    }
    nav li{
      list-style-type: none;
      font-size: 20px;
    }
    
    .user-img{
      width: 50px;
      border-radius: 40%
      
    }

  `;





  return (
   <StyledHeader>
     <div className="nav-container">
        <nav className="nav">
          <ul>
              <li>
                <Link to="/">
                  <div className="home-link">What IS that sound?</div>
                </Link>
              </li>
                {
                  props.user ?
                  <>
                    <li className="cain">Stay awhile and listen, {props.user.displayName}</li>
                    <li>
                      <img className="user-img"
                        src={props.user.photoURL} 
                        alt={props.user.displayName} 
                        />
                    </li>
                    <li>
                      <Link to="/landing">
                        <div>User Page</div>
                      </Link>
                    </li>
                    <li onClick={logOut}>Logout</li>
                  </>
                   :<li>
                    
                    <button onClick={signIn}>Login with Google</button>
                    </li>
                }
          </ul>
        </nav>
     </div>
   </StyledHeader>
  );
}

export default Header;
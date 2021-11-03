import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { signIn } from '../services/firebase';
import styled from 'styled-components';




function Header(props) {

  const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap');
    margin-top: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif;
    background-color: black;
    ul{
    height: 75px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    }
    a{
      text-decoration: none;
      color: #05b38d;
    }
    .home-link{
      font-size: 38px;
      font-weight: 600;
      background: linear-gradient(120deg, rgba(145,255,67,1) 0%, rgba(14,177,152,1) 47%, rgba(164,4,124,1) 89%);
      background-clip: text;
      -webkit-background-clip: text;
      color: rgba(0,0,0,.2);
      margin-right: 250px;
    }
    .cain{
      font-size: 22px;
      color: #05b38d
    }
    nav li{
      list-style-type: none;
      font-size: 20px;
    }
    
    .user-img{
      width: 50px;
      border-radius: 40%
      
    }
    .logout{
      color: #05b38d;
      :hover{
        cursor: pointer;
      }
    }
  `;





  return (
   <StyledHeader>
     <div className='nav-container'>
        <nav className='nav'>
          <ul>
              <li>
                <Link to='/'>
                  <div className='home-link'>What IS that sound?</div>
                </Link>
              </li>
                {
                  props.user ?
                  <>
                    <li className='cain'>Stay awhile and listen, {props.user.displayName}</li>
                    <li>
                      <img className='user-img'
                        src={props.user.photoURL} 
                        alt={props.user.displayName} 
                        />
                    </li>
                    <li>
                      <Link to='/landing'>
                        <div>User Page</div>
                      </Link>
                    </li>
                    <li className='logout' onClick={logOut}>Logout</li>
                  
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
import { useSelector } from 'react-redux';
import './nav.css'
// import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NoUserNav } from './NoUserNav';

export const Nav = () => {

  const user = useSelector((store) => (store?.user));
  
  return (
    <div className="navDiv">
    {/* <input type="hidden" id="hiddenInput" value="{{userId}}"/> */}
    <nav>
      <div className="wrapper navStyles">
        <h1>
          <Link className="logo" to="/">
            WATCHA
          </Link>
        </h1>
        <ul>
        { user 
          ? <>
            <li>
              <Link className="greeting">
                Hey there, {user.name}
              </Link>
            </li>
            <li>
              <Link className="box transition" to={`/profile/${user._id}`}>
              My Shelf
              </Link>
            </li>
            <li>
              <Link className="box transition" to="/auth/signout">
                Exit
              </Link>
            </li>
            <div className="dropdown">
              <button className="dropButton">Watchas</button>
              <div className="dropdownContent">
                <Link to="/mostPopular">
                  30 Current Popular
                </Link>
                <Link to="#">
                  By Genre
                </Link>
                <Link to="/search/byTitle">
                  By Title
                </Link>
              </div>
            </div>
            </>
          : <NoUserNav />
        }   
          {/* {{!-- login popup --}}
          <div className="loginPopup">
            <div className="closeButton">&times;</div>
            <form className="form loginForm" method="POST" action="/auth/login">
              <h2>Log in</h2>
              <div className="formElement">
                <label for="email">Login</label>
                <input type="text" id="loginLogin" name="loginLogin" placeholder="Enter your username">
              </div>
              <div className="formElement">
                <label for="password">Password</label>
                <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter password">
              </div>
              <div className="formElement">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember me</label>
              </div>
              <div className="formElement">
                <button type="submit">Sign in</button>
              </div>
              <div className="formElement">
                <a href="#">Forgot password?</a>
              </div>
            </form>
          </div>
          {{!-- register popup --}}
          <div className="registerPopup">
            <div className="closeButton">&times;</div>
            <form className="form registerForm" method="POST" action="/auth/register">
              <h2>Sign up to track your Watchas</h2>
              <div className="formElement">
                <label for="email">Login</label>
                <input type="text" name="registerLogin" id="registerLogin" placeholder="Enter login" required pattern="[A-Za-z]\w+" minlength="4" title="Только латинские буквы, цифры и символ _">
              </div>
              <div className="formElement">
                <label for="email">Email</label>
                <input type="text" name="registerEmail" id="registerEmail" placeholder="Enter email">
              </div>
              <div className="formElement">
                <label for="password">Password</label>
                <input type="password" name="registerPassword" id="registerPassword" placeholder="Enter password">
              </div>
              <div className="formElement">
                <button type="submit">Sign up!</button>
              </div>
            </form>
          </div> */}
        </ul>
      </div>
    </nav>
  </div>
  )
}
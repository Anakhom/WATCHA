import './nav.css'
import { Link } from 'react-router-dom';

export const NoUserNav = () => {
  
  return (
    <>
      <li>
        <button className="box transition" id="showRegister">
        Sign up
        </button>
      </li>
      <li>
        <button className="box transition" id="showLogin">
          Login
        </button>
      </li>
      <div className="dropdown">
        <button className="dropButton">
          Watchas
        </button>
        <div className="dropdownContent">
          <Link 
          to="/mostPopular" 
          className="dropdownToggle">
            30 Current Popular
          </Link>
          <Link 
          to="#" 
          className="dropdownToggle">
            By Genre
          </Link>
          <Link 
          to="/search/byTitle" 
          className="dropdownToggle">
            By Title
          </Link>
        </div>
      </div>
      </>
  )
}
import './footer.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="leftFooter">
          <h1>WATCHA</h1>
          <p>Track what you watch with us</p>
        </div>
        <ul className="rightFooter">
          <li>
            <h2>Social</h2>
            <ul className="box1">
              <li><Link to="#" className="footerLink">Facebook</Link></li>
              <li><Link to="#" className="footerLink">Twitter</Link></li>
              <li><Link to="#" className="footerLink">Pinterest</Link></li>
            </ul>
          </li>
          <li className="features">
            <h2>Information</h2>
            <ul className="box1 hBox">
              <li><Link to="#" className="footerLink">Blog</Link></li>
              <li><Link to="#" className="footerLink">About Us</Link></li>
              <li><Link to="#" className="footerLink">Our API</Link></li>
              <li><Link to="#" className="footerLink">Customer Service</Link></li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul className="box1">
              <li><Link to="#" className="footerLink">Privacy Policy</Link></li>
              <li><Link to="#" className="footerLink">Terms of Use</Link></li>
              <li><Link to="#" className="footerLink">Contact us</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  )
}
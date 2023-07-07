import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: 'url(./public/background.png)',height: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        
      <p style={{ border: "1px #EEEEEE", padding: "5px", backgroundColor: "#EEEEEE", textAlign: "center", margin: "0 auto" }}>&copy; 2023 Fried Finder. All rights reserved.</p>
      <div className="social-icons"  style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon style={{color: "#E71515", margin: "10px", fontSize: "30px"}} icon={faFacebook} className="social-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon style={{color: "#E71515", margin: "10px", fontSize: "30px"}} icon={faTwitter} className="social-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon style={{color: "#E71515", margin: "10px", fontSize: "30px"}} icon={faInstagram} className="social-icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
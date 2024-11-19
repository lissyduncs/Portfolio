import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Import specific icons
import "./../styles/Footer.css"; // Link to CSS for styling (optional)

function Footer() {
  return (
    <footer className="footer">
    
      <div className="social-icons">
        <a
          href="https://github.com/lissyduncs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/lissyduncs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        
      </div>
      <p>© 2024 Lissy Duncan | Built with React</p>
    </footer>
  );
}

export default Footer;
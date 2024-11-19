import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./../styles/Header.css"; // Link to your CSS file
import "./../styles/App.css";

function Header() {
  return (
    <header className="header">
      <h1>Lissy Duncan</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Links to Home */}
          <li><Link to="/about">About</Link></li> {/* Links to About page */}
          <li><Link to="/projects">Projects</Link></li> {/* Links to Projects page */}
          <li><Link to="/contact">Contact</Link></li> {/* Add if you create a Contact route */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
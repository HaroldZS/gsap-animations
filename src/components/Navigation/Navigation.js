import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="side-navigation">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <div className="nav-circle">
              <AiFillHome />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/animation1" className="nav-link">
            <div className="nav-circle">1</div>
          </Link>
        </li>
        <li>
          <Link to="/animation2" className="nav-link">
            <div className="nav-circle">2</div>
          </Link>
        </li>
        <li>
          <Link to="/animation3" className="nav-link">
            <div className="nav-circle">3</div>
          </Link>
        </li>
        <li>
          <Link to="/animation4" className="nav-link">
            <div className="nav-circle">4</div>
          </Link>
        </li>
        <li>
          <Link to="/animation5" className="nav-link">
            <div className="nav-circle">5</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };

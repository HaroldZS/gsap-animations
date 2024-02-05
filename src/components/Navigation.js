import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/animation1">Animation 1</Link>
          </li>
          <li>
            <Link to="/animation2">Animation 2</Link>
          </li>
          <li>
            <Link to="/animation3">Animation 3</Link>
          </li>
          <li>
            <Link to="/animation4">Animation 4</Link>
          </li>
        </ul>
      </nav>
    );
  }

export { Navigation };
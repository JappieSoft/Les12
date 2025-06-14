import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-medium.png";


function Navigation() {
  return (

  <nav className="nav-bar">
      <div className="nav-container">
        <img className="nav-img" src={logo} alt="Blogventure Logo"/>
        <ul className="nav-list">
          <li>
            <NavLink
                className={({ isActive }) => `menu-link ${isActive ? "active-menu-link" : "default-menu-link"}`}
                to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) => `menu-link ${isActive ? "active-menu-link" : "default-menu-link"}`}
                to="/nieuw-blog">Nieuw Blog Post</NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) => `menu-link ${isActive ? "active-menu-link" : "default-menu-link"}`}
                to="/overzicht">Overzicht Blog Posts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

import { NavLink } from "react-router-dom";
import { GiJigsawPiece } from "react-icons/gi"
import "./NavBarPortfolio.css";

const NavBarPortfolio = () => {
  return (
    <nav className="navbar">
      <ul className="nav_ul">
        <li className="nav_li">
          <NavLink to="/" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            Portafolio
          </NavLink>
        </li>
        <li className="nav_li">
          <NavLink to="/me" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            Me  <GiJigsawPiece />
          </NavLink>
        </li>
        <li className="nav_li">
          <NavLink to="/projects" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            Proyectos
          </NavLink>
        </li>
        <li className="nav_li">
          <NavLink to="/contact" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarPortfolio;

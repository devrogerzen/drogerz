import { NavLink } from "react-router-dom";
import { GiJigsawPiece } from "react-icons/gi"
import { motion } from 'framer-motion'

import "./NavBarPortfolio.css";

const NavBarPortfolio = () => {
  return (
    <motion.nav 
    className="navbar" 
    initial={{ opacity: 0 }}
    animate={{opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    >
      <ul className="nav_ul">
        <li className="nav_li">
          <NavLink to="/" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            Inicio
          </NavLink>
        </li>
        <li className="nav_li">
          <NavLink to="/me" className={
            ({ isActive }) => {
              return isActive ? "navlink_active" : "nav_navlink"
          }}>
            tecnologías <GiJigsawPiece />
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
    </motion.nav>
  );
};

export default NavBarPortfolio;

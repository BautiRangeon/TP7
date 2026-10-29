import "./Header.css";
import logo from "../assets/images.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <h2>Trabajo Práctico N°4</h2>

      <nav className="menu">
        <NavLink to="/">Inicio</NavLink>

        <NavLink to="/contacto">
          Contacto
        </NavLink>

        <NavLink to="/acerca">
          Acerca de nosotros
        </NavLink>

        <NavLink to="/blob">
          Ir a página Blob
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
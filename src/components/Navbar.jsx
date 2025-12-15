import React from "react";
import Logo from "../assets/LogoNTBC.avif";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary py-1">
      <div className="container-fluid">
        {/* LOGO MÓVIL (izquierda) */}
        <NavLink to="/" className="navbar-brand d-md-none text-white">
          <img src={Logo} alt="Logo Iglesia NTBC" />
          <span> NTBC Nicaragua</span>
        </NavLink>

        {/* BOTÓN HAMBURGUESA (derecha en móvil) */}
        <button
          className="navbar-toggler d-md-none ms-auto bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO DESKTOP CENTRADO */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          {/* LOGO DESKTOP */}
          <NavLink
            to="/"
            className="navbar-brand d-none d-md-block text-white me-4"
          >
            <img src={Logo} alt="Logo Iglesia NTBC" />
            <span className="fw-bolder"> NTBC Nicaragua</span>
          </NavLink>

          {/* MENÚ */}
          <ul className="navbar-nav mb-2 mb-md-0 gap-0 gap-md-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white">INICIO</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NOSOTROS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    CREENCIAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CONOCE AL PASTOR
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MINISTERIOS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    HOMBRES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MUJERES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NIÑOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MISIONES
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white">ESCUELA</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

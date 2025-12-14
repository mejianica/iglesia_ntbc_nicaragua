import React from "react";
import Logo from "../assets/LogoNTBC.avif";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary py-1">
      <div className="container-fluid">
        {/* LOGO MÓVIL (izquierda) */}
        <a className="navbar-brand d-sm-none text-white" href="#">
          <img src={Logo} alt="Logo Iglesia NTBC" /> <span>NTBC Nicaragua</span>
        </a>

        {/* BOTÓN HAMBURGUESA (derecha en móvil) */}
        <button
          className="navbar-toggler d-sm-none ms-auto bg-white"
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
          {/* LOGO DESKTOP (centrado con links) */}
          <a
            className="navbar-brand d-none d-sm-block text-white me-4"
            href="#"
          >
            <img src={Logo} alt="Logo Iglesia NTBC" />{" "}
            <span className=" fw-bolder">NTBC Nicaragua</span>
          </a>

          {/* MENÚ */}
          <ul className="navbar-nav mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                LIVE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                ESPAÑOL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                MINISTRIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                SCHOOL (DCS)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                GIVE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                PRAYER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

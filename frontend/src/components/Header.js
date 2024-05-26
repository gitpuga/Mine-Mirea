import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left-container">
          <Link className="header-link" to="/">
            MINE MIREA
          </Link>
          <div className="header-divider" />
        </div>
        <div className="header-middle-container">
          <Link className="header-link-middle" to="/">
            Главная
          </Link>
          <Link className="header-link-middle" to="/how-to">
            Как играть
          </Link>
          <Link className="header-link-middle" to="/user">
            Аккаунт
          </Link>
        </div>
        <div className="header-right-container">
          <Link className="header-user-button" to="/user">
            <FaRegUserCircle className="header-user-icon" size="1.2rem" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

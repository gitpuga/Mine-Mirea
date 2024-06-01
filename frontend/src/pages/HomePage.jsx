import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-container">
        <h1 className="home-title">Добро пожаловать!</h1>
        <p className="home-description">
          Присоединяйтесь к нашему сообществу игроков и наслаждайтесь
          увлекательными мероприятиями и другими активностями. Соревнуйтесь с
          друзьями и другими студентами.
        </p>
        <div className="home-buttons">
          <Link to="/user/register" className="home-button">
            Регистрация
          </Link>
          <Link to="/user/login" className="home-button">
            Вход
          </Link>
        </div>
        <div className="home-buttons">
          <Link to="/how-to" className="home-button">
            Как играть
          </Link>
          <div className="home-ip">
            <p>IP: server.ip.ru</p>
          </div>
        </div>
      </div>
      <div className="home-img-container">
        <img className="home-img" src="minecraft.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;

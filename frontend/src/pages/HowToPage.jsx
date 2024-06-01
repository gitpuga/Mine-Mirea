import React from "react";
import "../styles/HowToPage.css";

const HowToPage = () => {
  return (
    <div className="how-to-play-container">
      <h1 className="how-to-play-title">Как играть</h1>
      <ol className="how-to-play-steps">
        <li className="how-to-play-step">
          <h2>Шаг 1: Регистрация</h2>
          <p>
            Создайте учетную запись, нажав на кнопку "Регистрация" на главной
            странице.
          </p>
        </li>
        <li className="how-to-play-step">
          <h2>Шаг 2: Вход</h2>
          <p>
            Войдите в свою учетную запись, используя свои регистрационные
            данные.
          </p>
        </li>
        <li className="how-to-play-step">
          <h2>Шаг 3: Начало игры</h2>
          <p>Войдите на сервер используя регистрационные данные</p>
        </li>
        <li className="how-to-play-step">
          <h2>(Опицонально) Шаг 4: Смена настроек</h2>
          <p>
            Вы можете изменить настройки своего аккаунта, такие как ник, почта и
            пароль, в разделе "Настройки аккаунта".
          </p>
        </li>
      </ol>
    </div>
  );
};

export default HowToPage;

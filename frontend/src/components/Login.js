import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Forms.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      setMessage("Успешный вход!");
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-title">Вход</div>
        <input
          className="login-form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-form-input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {message && <p className="form-message">{message}</p>}
        <button className="login-form-button" type="submit">
          <div className="login-form-button-text">Вход</div>
        </button>
        <div className="login-form-link">
          Нет аккаунта?
          <Link to="/user/register" className="login-form-link-text">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

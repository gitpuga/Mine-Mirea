import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Forms.css";

const AccountSettings = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/user");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/update",
        { username, email, currentPassword, newPassword },
        config
      );
      setMessage("Данные успешно обновлены");
    } catch (error) {
      setMessage(error.response.data.error || "Произошла ошибка");
    }
  };

  return (
    <div className="account-form-container">
      <form className="account-form" onSubmit={handleUpdate}>
        <div className="account-form-title">Настройки аккаунта</div>
        <input
          className="account-form-input"
          type="text"
          placeholder="Новый ник"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="account-form-input"
          type="email"
          placeholder="Новая почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="account-form-input"
          type="password"
          placeholder="Текущий пароль"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <input
          className="account-form-input"
          type="password"
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="account-form-button" type="submit">
          <div className="account-form-button-text">Обновить аккаунт</div>
        </button>
      </form>
      <button className="account-form-button" onClick={handleLogout}>
        <div className="account-form-button-text">Выйти из аккаунта</div>
      </button>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default AccountSettings;

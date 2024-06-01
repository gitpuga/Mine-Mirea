const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const { Rcon } = require('rcon-client');

// // Настройки RCON
// const rconConfig = {
//   host: 'localhost', // адрес сервера
//   port: 25575, // порт RCON
//   password: 'your_rcon_password', // пароль RCON
// };

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // const rcon = await Rcon.connect(rconConfig);
    // await rcon.send(`whitelist add ${username}`);
    // await rcon.end();

    res.status(201).json({ message: "Аккаунт успешно зарегистрирован!" });
  } catch (error) {
    res.status(500).json({ error: "Аккаунт уже существует" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Неправильная почта или пароль!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Неправильная почта или пароль!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Не удалось найти пользователя" });
  }
};

const updateUser = async (req, res) => {
  const { username, email, currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: "Не удалось найти пользователя" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Не правильный пароль" });
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // const rcon = await Rcon.connect(rconConfig);
    // await rcon.send(`whitelist add ${username}`);
    // await rcon.send(`whitelist remove ${user.username}`);
    // await rcon.end();

    await user.save();

    res.json({ message: "Данные обновлены успешно" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Ошибка сервера");
  }
};

module.exports = { register, login, getCurrentUser, updateUser };

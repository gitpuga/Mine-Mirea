import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import AccountSettings from "./components/AccountSettings";
import HowToPage from "./pages/HowToPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/user/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route
                path="/user"
                element={
                  isAuthenticated ? (
                    <AccountSettings setIsAuthenticated={setIsAuthenticated} />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route path="user/register" element={<Register />} />
              <Route path="how-to" element={<HowToPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

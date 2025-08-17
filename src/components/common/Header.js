import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [checkToken, setCheckToken] = useState(null);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Finder-token");
    const Name = localStorage.getItem("userName");
    if (token) {
      setCheckToken(token);
      setUserName(Name);
    } else {
      setCheckToken(null);
      setUserName("");
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("Finder-token");
    setCheckToken(null);
    setUserName("");
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white px-6 py-4 h-[70px] shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">Ethiopia Estate</div>

        <nav className="hidden md:flex space-x-8">
          <a href="#rent" className="hover:text-red-400 transition-colors">
            Home
          </a>
          <a href="#buy" className="hover:text-red-400 transition-colors">
            Chat
          </a>
          <a
            href="#commercial"
            className="hover:text-red-400 transition-colors"
          >
            Saved
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {checkToken ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                Welcome,{" "}
                <span className="font-semibold text-red-400">{userName}</span>
              </span>
              <button
                onClick={handleProfile}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

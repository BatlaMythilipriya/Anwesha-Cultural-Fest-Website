import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [anweshaId, setAnweshaId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedAnweshaId = localStorage.getItem("anweshaId");
   
    setIsLoggedIn(!!token);
    setAnweshaId(storedAnweshaId || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("anweshaId");
    setIsLoggedIn(false);
    setDropdownVisible(false);
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav>
        <div id="logo">My Logo</div>
        <input type="checkbox" id="click" />
        <label className="menu-btn" htmlFor="click">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="active">Team</NavLink>
          </li>
          <li>
            <NavLink to="/sponsers" activeClassName="active">Our Partners</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          {isLoggedIn ? (
            <li className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-button">
                Profile
              </button>
              {dropdownVisible && (
              <div className="dropdown-content">
              <p>Anwesha ID: {anweshaId}</p>
              <p>Events: 
                <ul>
                  {JSON.parse(localStorage.getItem('events') || '[]').map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </p>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            
              )}
            </li>
          ) : (
            <li>
              <NavLink to="/signup" activeClassName="active">Register</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
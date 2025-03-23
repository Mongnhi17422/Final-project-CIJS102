import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import logo from '../../../public/LOGO.png';

export default function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); 
    setLoggedInUser(null);
    navigate('/'); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src={logo} />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">Courses</NavLink>
            <div className="nav-item dropdown">
              <NavLink to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
              <div className="dropdown-menu fade-down m-0">
                <NavLink to="/team" className="dropdown-item" activeClassName="active">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">Testimonial</NavLink>
                <NavLink to="/feedback" className="dropdown-item" activeClassName="active">Feedback</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
          </div>

          {loggedInUser && (
            <NavLink to="/profile" className="nav-item nav-link" activeClassName="active">{loggedInUser.name}</NavLink>
          )}

          {loggedInUser ? (
            <button className="btn py-4 px-lg-5 d-none d-lg-block"
              onClick={handleLogout}
              style={{
                backgroundColor: '#FF782D',
                color: 'white'
              }}
            >
              Log out
            </button>
          ) : (
            <button className="btn  py-4 px-lg-5 d-none d-lg-block"
              onClick={() => navigate("/SignIn")}
              style={{
                backgroundColor: '#FF782D',
                color: 'white'
              }}
            >
              Join Now <i className="fa fa-arrow-right ms-3"></i>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

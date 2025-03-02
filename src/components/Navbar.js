import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import logo from '/src/logo.jpg'; 
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
        <img src="/src/img/project.png" alt=""  />Project Manager
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/create-project" style={styles.link}>
          Create Project
        </Link>
        <Link to="/projects" style={styles.link}> View-All-projects</Link>
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
        
      </div>
    </nav>
  );
};

// Basic inline styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    
  },
  img:{
  width: "100 px",
  border: " 10 px",
},
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;
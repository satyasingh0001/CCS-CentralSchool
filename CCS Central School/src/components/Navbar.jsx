import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import logo from "../assets/ccs-logo.jpeg";
import saraswati from "../assets/saraswati.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Date display
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Dark mode + sticky
  useEffect(() => {
    document.body.className = dark ? "dark" : "";

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className={styles.topbar}>
        <p>{today}</p>
        <span>CCS Central School</span>
      </div>

      {/* HEADER */}
      <div className={`${styles.topHeader} ${scrolled ? styles.small : ""}`}>
        {/* LEFT LOGO */}
        <img src={logo} className={styles.logo} />

        {/* CENTER FULL TITLE */}
        <div className={styles.fullTitle}>
          <h1 className={styles.heading1}>CCS Central School</h1>
          <p>Himmatpatti, Sahebganj, Bihar</p>
          <span className={styles.badge}>Admission Open 2026</span>
        </div>

        {/* RIGHT IMAGE
        <img src={saraswati} className={styles.saraswati} /> */}
      </div>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        {/* HAMBURGER INSIDE BLUE BAR */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <div className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Teachers
          </NavLink>

          <NavLink
            to="/admission"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Admission
          </NavLink>

          <NavLink
            to="/notice"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Notice
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Gallery
          </NavLink>

          <button onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

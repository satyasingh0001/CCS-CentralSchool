import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Date display
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Dark mode + sticky header
  useEffect(() => {
    document.body.className = dark ? "dark" : "";

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  // CLOSE menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // CLOSE MENU manually
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <div className={styles.topHeader}>
        <div className={styles.fullTitle}>
          <h1>CCS Central School</h1>
          <p>Himmatpatti, Sahebganj, Bihar</p>
          <span className={styles.badge}>Admission Open 2026</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* LINKS */}
        <div className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/teachers"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Faculty & Staff
          </NavLink>

          <NavLink
            to="/admission"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Admission
          </NavLink>

          <NavLink
            to="/notice"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Notice
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Gallery
          </NavLink>

          {/* THEME BUTTON */}
          <button
            className={styles.themeBtn}
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false); // CLOSE MOBILE NAV ALSO
            }}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

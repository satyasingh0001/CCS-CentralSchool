import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CONTACT */}
        <div className={styles.contact}>
          <h2>CONTACT US ↓</h2>

          <p>
            <b>CCS Central School</b>
          </p>
          <p>Himmatpatti, Sahebganj</p>
          <p>Bihar - 800023</p>

          <p>
            <b>Phone:</b> +91 74610 26218
          </p>
          <p>
            <b>Email:</b> ccscentralschool02@gmail.com
          </p>

          <div className={styles.socialIcons}>
            {/* Email */}
            <a href="mailto:ccscentralschool02@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919365180948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            {/* Facebook
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            Instagram
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a> */}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.links}>
          <h2>QUICK LINKS ↓</h2>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/admission">Admission</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>

        {/* LOCATION MAP */}
        <div className={styles.map}>
          <h2>LOCATION MAP ↓</h2>

          <iframe
            src="https://www.google.com/maps?q=26.3115637,84.9256709&z=17&output=embed"
            loading="lazy"
            title="CCS Central School Location"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.bottom}>
        © 2026 CCS Central School | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

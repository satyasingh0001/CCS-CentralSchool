import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* CONTACT */}
        <div className={styles.contact}>
          <h2>CONTACT US ↓</h2>

          <h3>CCS Central School</h3>
          <p>Himmatpatti, Sahebganj</p>
          <p>Bihar - 843125</p>

          {/* PHONE */}
          <a
            href="https://wa.me/919365180948?text=Hello%20CCS%20Central%20School,%20I%20want%20information%20about%20admission."
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            Phone: +91 93651 80948
          </a>

          {/* EMAIL */}
          <a
            href="mailto:ccscentralschool02@gmail.com?subject=Admission Inquiry&body=Hello CCS Central School"
            className={styles.contactLink}
          >
            Email: ccscentralschool02@gmail.com
          </a>

          {/* SOCIAL ICONS */}
          <div className={styles.icons}>
            <a href="mailto:ccscentralschool02@gmail.com">
              <MdEmail />
            </a>

            <a href="https://wa.me/919365180948" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a> */}

            {/* YOUTUBE */}
            <a
              href="https://youtube.com/@ccscentralschool8444?si=vUiIiDE5khxVc5m_"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.links}>
          <h2>QUICK LINKS ↓</h2>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/teachers">Faculty & Staff</NavLink>
          <NavLink to="/admission">Admission</NavLink>
          <NavLink to="/notice">Notice</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>

        {/* LOCATION MAP */}
        <div className={styles.map}>
          <h2>LOCATION MAP ↓</h2>

          <iframe
            src="https://www.google.com/maps?q=26.3115637,84.9256709&z=17&output=embed"
            loading="lazy"
            title="CCS Central School Location"
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

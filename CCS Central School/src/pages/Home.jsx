import { motion } from "framer-motion";
import logo from "../assets/ccs-logo.jpeg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home(){
  return(
    <div>

      {/* HERO */}
      <motion.div 
        className={styles.hero}
        initial={{opacity:0}}
        animate={{opacity:1}}
      >
        <img src={logo} className={styles.heroLogo}/>
        <h1>CCS Central School</h1>
        <p>Himmatpatti, Sahebganj</p>

        <Link to="/admission">
          <button className={styles.cta}>Apply for Admission</button>
        </Link>
      </motion.div>

      {/* STATS */}
      <div className={styles.stats}>
        <div>
          <h2>600+</h2>
          <p>Students</p>
        </div>
        <div>
          <h2>15+</h2>
          <p>Teachers</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>

      {/* NOTICE PREVIEW */}
      <div className={styles.section}>
        <h2>Latest Notices</h2>
        <div className={styles.cards}>
          <div className="card">Admission Open 2026</div>
          <div className="card">Sports Day Announcement</div>
          <div className="card">Parent Meeting</div>
        </div>
      </div>

      {/* TEACHER PREVIEW
      <div className={styles.section}>
        <h2>Our Teachers</h2>
        <div className={styles.cards}>
          <div className="card">Mr Sharma - Math</div>
          <div className="card">Ms Priya - Science</div>
          <div className="card">Mr Raj - English</div>
        </div>
      </div> */}

    </div>
  )
}

export default Home;

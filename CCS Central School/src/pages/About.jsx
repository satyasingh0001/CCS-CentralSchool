import HeroSlider from "../components/HeroSlider";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      {/* HERO SLIDER ONLY FOR ABOUT PAGE */}
      <HeroSlider />

      <div className={styles.content}>
  <h1>About CCS Central School</h1>

  <p>
    CCS Central School is committed to providing quality education and shaping
    the future of young minds through academic excellence, discipline, and
    value-based learning. Our institution believes that every child has unique
    abilities and with proper guidance, encouragement, and opportunities, they
    can achieve success in all areas of life.
  </p>

  <p>
    We focus not only on academic development but also on moral values,
    personality growth, and character building. Our aim is to create a safe,
    supportive, and inspiring environment where students learn with confidence
    and grow into responsible citizens of society.
  </p>

  <p>
    Our experienced and dedicated teachers guide students with care and
    attention, ensuring strong fundamentals and conceptual clarity. Along with
    classroom learning, we promote sports, cultural activities, and practical
    experiences for the overall development of every child.
  </p>

  <h3>Our Mission</h3>

  <p>
    To nurture young minds through value-based education, develop confidence and
    leadership qualities, and prepare students to become responsible and
    productive citizens of the nation.
  </p>

  <h3>Our Vision</h3>

  <p>
    To be recognized as a trusted and progressive educational institution that
    empowers students with knowledge, skills, discipline, and strong moral
    values for a bright and successful future.
  </p>

  <h3>Why Choose CCS Central School?</h3>

  <ul className={styles.points}>
    <li>Quality education at an affordable level</li>
    <li>Focus on discipline and moral values</li>
    <li>Experienced and supportive teaching staff</li>
    <li>Safe and positive learning environment</li>
    <li>Emphasis on academics, sports, and co-curricular activities</li>
    <li>Holistic development of every student</li>
  </ul>

  <p className={styles.closing}>
    At CCS Central School, we believe that education is the strongest foundation
    for a successful life. Together with parents and teachers, we work to build
    a brighter future for our children and our community.
  </p>
</div>
    </div>
  );
}

export default About;

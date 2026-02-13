import styles from "./Teachers.module.css";

/* IMAGES */
import t1 from "../assets/teachers/t1.jpeg";
import t2 from "../assets/teachers/t2.jpeg";
import t3 from "../assets/teachers/t3.jpeg";
import t4 from "../assets/teachers/t4.jpeg";
import t5 from "../assets/teachers/t5.jpeg";
import t6 from "../assets/teachers/t6.jpeg";
import t7 from "../assets/teachers/t7.jpeg";
import t8 from "../assets/teachers/t8.jpeg";
import t9 from "../assets/teachers/t9.jpeg";
import t10 from "../assets/teachers/t10.jpeg";
import t11 from "../assets/teachers/t11.jpeg";
import t12 from "../assets/teachers/t12.jpeg";
import t13 from "../assets/teachers/t13.jpeg";
import t14 from "../assets/teachers/t14.jpeg";
import t15 from "../assets/teachers/t15.jpeg";
import t16 from "../assets/teachers/t16.jpeg";
import g1 from "../assets/teachers/g1.jpeg";
import d1 from "../assets/teachers/d1.jpeg";
import d2 from "../assets/teachers/d2.jpeg";
import d3 from "../assets/teachers/d3.jpeg";

function Teachers() {
  /* SCHOOL LEADERSHIP */

  const leadership = [
    {
      name: "Mr. Suresh Kumar Singh",
      role: "Director’s Message",
      img: t1,
      message: (
        <p>
          <b>Dear Students and Respected Parents,</b>
          <br />
          <br />
          Our school is committed to providing quality education in a safe and
          caring environment. Along with academic excellence, we emphasize
          discipline, values, and character building to help every child grow
          into a confident and responsible individual.
          <br />
          Together, let us work towards shaping a bright and successful future for our children. <br /> <br />
          
            Warm regards,
            <br /><b>
            Director
          </b>
        </p>
      ),
    },
    {
      name: "Mr. Subhash Singh",
      role: "Vice Director",
      img: t2,
      message:
        "We focus on providing a safe and supportive learning environment where students grow academically and personally.",
    },
    {
      name: "Mr. Shailendra Kumar",
      role: "Principal",
      img: t15,
      message:
        "Our mission is to nurture young minds and build responsible citizens through modern and value-based education.",
    },
    {
      name: "Mr. Sanjay Raj",
      role: "Vice Principal",
      img: t3,
      message:
        "We emphasize discipline, academic excellence, and overall development of every student.",
    },
    {
      name: "Mr. DK Singh",
      role: "Cashier",
      img: t16,
      message:
        "Dear Parents, I am here to assist you with all fee-related queries and payment support.",
    },
  ];

  /* TEACHING STAFF */

  const teachingStaff = [
    { name: "Mr. Naval Kishor Singh", subject: "SST Teacher", img: t4 },
    { name: "Mr. Arvind Kumar", subject: "Sanskrit / Hindi Teacher", img: t8 },
    { name: "Md. Arshad Ali", subject: "Math & English Teacher", img: t14 },
    { name: "Mr. Indrajeet Kumar", subject: "Computer Teacher", img: t7 },
    {
      name: "Mrs. Anjali Kumari",
      subject: "Hindi, English & Math Teacher",
      img: t5,
    },
    { name: "Mrs. Goldi Kumari", subject: "Science Teacher", img: t11 },
    { name: "Miss. Sandhya Kumari", subject: "Hindi Teacher", img: t6 },
    { name: "Miss. Muskan Kumari", subject: "Math Teacher", img: t9 },
    { name: "Miss. Priya Kumari", subject: "English Teacher", img: t10 },
    { name: "Miss. Ruchi Kumari", subject: "Math Teacher", img: t12 },
    { name: "Miss. Nitu Kumari", subject: "Hindi & English Teacher", img: t13 },
  ];

  /* SUPPORT STAFF */

  const supportStaff = [
    { name: "Mr. Vimal G", role: "Campus Security Officer", img: g1 },
    { name: "Mr. Mohit G", role: "School Transport Driver", img: d1 },
    { name: "Mr. Manoj G", role: "School Transport Driver", img: d2 },
    { name: "Mr. Kundan G", role: "School Transport Driver", img: d3 },
    
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Faculty & Staff</h1>

      {/* LEADERSHIP */}
      <h2 className={styles.sectionTitle}>School Leadership</h2>

      <div className={styles.leadershipWrapper}>
        {leadership.map((l, i) => (
          <div key={i} className={styles.leadershipCard}>
            <img src={l.img} alt={l.name} />
            <div className={styles.leaderContent}>
              <h3>{l.name}</h3>
              <h4>{l.role}</h4>
              <p>{l.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TEACHERS */}
      <h2 className={styles.sectionTitle}>Teaching Staff</h2>

      <div className={styles.grid}>
        {teachingStaff.map((t, i) => (
          <div key={i} className={styles.card}>
            <img src={t.img} />
            <h3>{t.name}</h3>
            <p>{t.subject}</p>
          </div>
        ))}
      </div>

      {/* SUPPORT */}
      <h2 className={styles.sectionTitle}>Non Teaching Staff</h2>

      <div className={styles.grid}>
        {supportStaff.map((s, i) => (
          <div key={i} className={styles.card}>
            <img src={s.img} />
            <h3>{s.name}</h3>
            <p>{s.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;


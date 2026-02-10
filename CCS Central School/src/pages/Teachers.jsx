import styles from "./Teachers.module.css";

// images import (keep your existing teacher images)
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

function Teachers(){

  /* DIRECTOR + PRINCIPAL */
  const leadership = [
    {
      name:"Mr. Suresh Kumar Singh",
      role:"Director",
      img:t1
    },
    {
      name:"Mr. Subhash Singh",
      role:"Assistant Director",
      img:t2
    },
    {
      name:"Mr. Shailendra Kumar",
      role:"Principal",
      img:t15
    },
    {
      name:"Mr. Sanjay Raj",
      role:"Vice Principal",
      img:t3
    }
  ];

  /* ALL TEACHERS */
  const teachers = [
    {name:"Mr. DK Singh", subject:"Cashier", img:t16},
    {name:"Mr. Naval Kishor Singh", subject:"SST Teacher", img:t4},
    {name:"Mr. Arvind Kumar", subject:"Sanskrit / Hindi Teacher", img:t8},
    {name:"Md. Arshad Ali", subject:"Math & English Teacher", img:t14},
    {name:"Mr. Indrajeet Kumar", subject:"Computer Teacher", img:t7},
    {name:"Mrs. Anjali Kumari", subject:"Hindi, English & Math Teacher", img:t5},
    {name:"Mrs. Goldi Kumari", subject:"Science Teacher", img:t11},
    {name:"Mrs. Sandhya Kumari", subject:"Hindi Teacher", img:t6},
    {name:"Mrs. Muskan Kumari", subject:"Math Teacher", img:t9},
    {name:"Mrs. Priya Kumari", subject:"English Teacher", img:t10},
    {name:"Mrs. Ruchi Kumari", subject:"Math Teacher", img:t12},
    {name:"Mrs. Nitu Kumari", subject:"Hindi & English Teacher", img:t13},
    
  ];

  return(
    <div className={styles.container}>

      <h1 className={styles.title}>Our Faculty</h1>

      {/* Leadership Section */}
      <h2 className={styles.sectionTitle}>Management & Leadership</h2>

      <div className={styles.leadershipGrid}>
        {leadership.map((l,i)=>(
          <div key={i} className={styles.leaderCard}>
            <img src={l.img}/>
            <h3>{l.name}</h3>
            <p>{l.role}</p>
          </div>
        ))}
      </div>


      {/* Teachers */}
      <h2 className={styles.sectionTitle}>Teaching Staff</h2>

      <div className={styles.grid}>
        {teachers.map((t,i)=>(
          <div key={i} className={styles.card}>
            <img src={t.img}/>
            <h3>{t.name}</h3>
            <p>{t.subject}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Teachers;

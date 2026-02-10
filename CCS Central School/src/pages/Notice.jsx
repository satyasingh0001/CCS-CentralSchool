import styles from "./Notice.module.css";
import { RiParentLine } from "react-icons/ri";
import { MdSportsBaseball } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";

function Notice(){
  return(
    <div className={styles.noticePage}>

      <h1>School Notices</h1>
      <p className={styles.subtitle}>
        Stay updated with latest announcements and important information
      </p>

      <div className={styles.noticeList}>

        <div className={styles.noticeCard}>
          <h3>📢 Admission Open 2026</h3>
          <p>Admissions are open from Nursery to Class 10. Limited seats available. Contact school office for details.</p>
          <span>Posted: 5 Feb 2026</span>
        </div>

        <div className={styles.noticeCard}>
          <h3><MdSportsBaseball /> Annual Sports Day</h3>
          <p>Annual Sports Day will be held on 15 March 2026. Students must report by 8:30 AM in sports uniform.</p>
          <span>Posted: 3 Feb 2026</span>
        </div>

        <div className={styles.noticeCard}>
          <h3><RiParentLine /> Parent Meeting</h3>
          <p>Parent-teacher meeting scheduled on 22 March 2026. Parents are requested to attend without fail.</p>
          <span>Posted: 2 Feb 2026</span>
        </div>

        <div className={styles.noticeCard}>
          <h3><MdOutlineLibraryBooks /> New Session Start</h3>
          <p>New academic session will begin from April 2026. Book list will be shared soon.</p>
          <span>Posted: 1 Feb 2026</span>
        </div>

      </div>

    </div>
  )
}

export default Notice;

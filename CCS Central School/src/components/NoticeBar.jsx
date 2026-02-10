import styles from "./NoticeBar.module.css";

export default function NoticeBar(){

  return(
    <div className={styles.notice}>
      <div className={styles.track}>
        📢 Admission Open 2026 &nbsp;&nbsp; | 
        🏫 Annual Sports Day – 15 March &nbsp;&nbsp; | 
        👨‍👩‍👧 Parent Meeting – 22 March &nbsp;&nbsp; | 
        📚 New session starts from April
      </div>
    </div>
  )
}

import styles from "./NoticeBar.module.css";

function NoticeBar(){
  return(
    <div className={styles.noticeBar}>
      <marquee>
        📢 Admission Open 2026 | 📢 Annual Sports Day on 15 March |
        📢 Parent Meeting 22 March | 📢 New session starts from April
      </marquee>
    </div>
  )
}

export default NoticeBar;

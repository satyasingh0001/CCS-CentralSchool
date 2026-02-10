import styles from "./FloatingButtons.module.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons(){

  const phone = "9365180948";
  const message = "Hello CCS Central School, I want admission details.";

  return(
    <div className={styles.floatContainer}>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        className={styles.whatsapp}
      >
        <FaWhatsapp/>
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        className={styles.call}
      >
        <FaPhoneAlt/>
      </a>

    </div>
  )
}

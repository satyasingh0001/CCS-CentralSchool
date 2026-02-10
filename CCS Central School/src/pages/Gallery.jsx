import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";

/* IMAGES */
import img1 from "../assets/gallery/gallery1.jpeg";
import img2 from "../assets/gallery/gallery2.jpeg";
import img3 from "../assets/gallery/gallery3.jpeg";
import img4 from "../assets/gallery/gallery4.jpeg";
import img5 from "../assets/gallery/gallery5.jpeg";
import img6 from "../assets/gallery/gallery6.jpeg";
import img7 from "../assets/gallery/gallery7.jpeg";
import img8 from "../assets/gallery/gallery8.jpeg";
import img9 from "../assets/gallery/gallery9.jpeg";
import img10 from "../assets/gallery/gallery10.jpeg";
import img11 from "../assets/gallery/gallery11.jpeg";
import img12 from "../assets/gallery/gallery12.jpeg";
import img13 from "../assets/gallery/gallery13.jpeg";
import img14 from "../assets/gallery/gallery14.jpeg";
import img15 from "../assets/gallery/gallery15.jpeg";
import img16 from "../assets/gallery/gallery16.jpeg";
import img17 from "../assets/gallery/gallery17.jpeg";
import img18 from "../assets/gallery/gallery18.jpeg";
import img19 from "../assets/gallery/gallery19.jpeg";
import img20 from "../assets/gallery/gallery20.jpeg";
import img21 from "../assets/gallery/gallery21.jpeg";
import img22 from "../assets/gallery/gallery22.jpeg";
import img23 from "../assets/gallery/gallery23.jpeg";
import img24 from "../assets/gallery/gallery24.jpeg";
import img25 from "../assets/gallery/gallery25.jpeg";
import img26 from "../assets/gallery/gallery26.jpeg";
import img27 from "../assets/gallery/gallery27.jpeg";
import img28 from "../assets/gallery/gallery28.jpeg";
import img29 from "../assets/gallery/gallery29.jpeg";
import img30 from "../assets/gallery/gallery30.jpeg";
import img31 from "../assets/gallery/gallery31.jpeg";
import img32 from "../assets/gallery/gallery32.jpeg";
import img33 from "../assets/gallery/gallery33.jpeg";
import img34 from "../assets/gallery/gallery34.jpeg";
import img35 from "../assets/gallery/gallery35.jpeg";
import img36 from "../assets/gallery/gallery36.jpeg";
import img37 from "../assets/gallery/gallery37.jpeg";
import img38 from "../assets/gallery/gallery38.jpeg";
import img39 from "../assets/gallery/gallery39.jpeg";
import img40 from "../assets/gallery/gallery40.jpeg";
import img41 from "../assets/gallery/gallery41.jpeg";
import img42 from "../assets/gallery/gallery42.jpeg";
import img43 from "../assets/gallery/gallery43.jpeg";
import img44 from "../assets/gallery/gallery44.jpeg";
import img45 from "../assets/gallery/gallery45.jpeg";

/* Videos */
import video1 from "../assets/videos/birthday.mp4";
import video2 from "../assets/videos/annual.mp4";
import video3 from "../assets/videos/tour.mp4";

function Gallery() {
  /* PHOTO DATA */
  const photos = [
    { img: img1, title: "School Campus", category: "Campus" },
    { img: img2, title: "Annual Function", category: "Events" },
    { img: img3, title: "Sports Activity", category: "Sports" },
    { img: img4, title: "Class Activity", category: "Activities" },
    { img: img5, title: "School Transport", category: "Campus" },
    { img: img6, title: "Entrance", category: "Campus" },
    { img: img7, title: "Group Activity", category: "Activities" },
    { img: img8, title: "Celebration", category: "Events" },
    { img: img9, title: "Faculty Team", category: "Campus" },
    { img: img10, title: "School Ground", category: "Campus" },
    { img: img11, title: "Parking Area", category: "Campus" },
    { img: img12, title: "Assembly", category: "Events" },
    { img: img13, title: "School Building", category: "Campus" },
    { img: img14, title: "Art Competition", category: "Activities" },
    { img: img15, title: "Principal Address", category: "Events" },
    { img: img16, title: "Students Activity", category: "Activities" },
    { img: img17, title: "Student Group", category: "Campus" },
    { img: img18, title: "Playground", category: "Sports" },
    { img: img19, title: "Outdoor Play", category: "Sports" },
    { img: img20, title: "Rangoli Activity", category: "Events" },
    { img: img21, title: "Saraswati Puja", category: "Events" },
    { img: img22, title: "Vasant Panchami", category: "Events" },
    { img: img23, title: "New Session", category: "Campus" },
    { img: img24, title: "Independence Day", category: "Events" },
    { img: img25, title: "Educational Tour", category: "Activities" },
    { img: img26, title: "Prize Distribution", category: "Events" },
    { img: img27, title: "Teacher Interaction", category: "Campus" },
    { img: img28, title: "Cultural Event", category: "Events" },
    { img: img29, title: "School Function", category: "Events" },
    { img: img30, title: "School Gate", category: "Campus" },
    { img: img31, title: "Plantation Drive", category: "Activities" },
    { img: img32, title: "Green Initiative", category: "Activities" },
    { img: img33, title: "Nature Learning", category: "Activities" },
    { img: img34, title: "Tree Plantation", category: "Activities" },
    { img: img35, title: "Eco Activity", category: "Activities" },
    { img: img36, title: "Green Campus", category: "Campus" },
    { img: img37, title: "Community Event", category: "Events" },
    { img: img38, title: "Social Awareness", category: "Activities" },
    { img: img39, title: "Environment Care", category: "Activities" },
    { img: img40, title: "Student Achievers", category: "Events" },
    { img: img41, title: "Primary Students", category: "Campus" },
    { img: img42, title: "Academic Excellence", category: "Events" },
    { img: img43, title: "Group Learning", category: "Activities" },
    { img: img44, title: "Future Leaders", category: "Campus" },
    { img: img45, title: "Holistic Education", category: "Campus" },
  ];

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [slide, setSlide] = useState(0);

  /* FILTER */
  const filtered =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  /* SLIDESHOW */
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>School Gallery</h1>

      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        {["All", "Campus", "Events", "Sports", "Activities"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? styles.activeBtn : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SLIDESHOW */}
      <div className={styles.slideshow}>
        <img src={photos[slide].img} />
        <p>{photos[slide].title}</p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filtered.map((photo, i) => (
          <div
            className={styles.card}
            key={i}
            onClick={() => setSelected(photo)}
          >
            <img src={photo.img} />
            <span>{photo.title}</span>
          </div>
        ))}
      </div>

      {/* VIDEO SECTION */}
      <div className={styles.videoSection}>
  <h2 className={styles.videoTitle}>School Videos</h2>

  <div className={styles.videoGrid}>

    <div className={styles.videoCard}>
      <video controls>
        <source src={video1} type="video/mp4"/>
      </video>
      <div className={styles.videoInfo}>
        <h3>Birthday Function</h3>
        <p>Students celebrating birthday in the classroom with joy and enthusiasm</p>
      </div>
    </div>

    <div className={styles.videoCard}>
      <video controls>
        <source src={video2} type="video/mp4"/>
      </video>
      <div className={styles.videoInfo}>
        <h3>Morning Assembly</h3>
        <p>Daily assembly activities</p>
      </div>
    </div>

    <div className={styles.videoCard}>
      <video
  src={video3}
  controls
  controlsList="nodownload noplaybackrate"
  disablePictureInPicture
  playsInline
  preload="metadata"
  className={styles.video}
></video>

      <div className={styles.videoInfo}>
        <h3>Campus Tour</h3>
        <p>Overview of school infrastructure</p>
      </div>
    </div>

  </div>
</div>


      {/* PREVIEW */}
      {selected && (
        <div className={styles.preview} onClick={() => setSelected(null)}>
          <img src={selected.img} />
        </div>
      )}
    </div>
  );
}

export default Gallery;

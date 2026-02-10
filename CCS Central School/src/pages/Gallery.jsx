import { useState } from "react";
import styles from "./Gallery.module.css";

import img2 from "../assets/gallery/gallery2.jpeg";
import img3 from "../assets/gallery/gallery3.jpeg";
import img1 from "../assets/gallery/gallery1.jpeg";
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

function Gallery(){

  const photos = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15];

  const [selected,setSelected] = useState(null);

  return(
    <div className={styles.container}>

      <h1 className={styles.title}>Photo Gallery</h1>

      <div className={styles.grid}>
        {photos.map((photo,index)=>(
          <div className={styles.card} key={index}>
            <img src={photo} onClick={()=>setSelected(photo)} />
          </div>
        ))}
      </div>

      {/* FULL SCREEN PREVIEW */}
      {selected && (
        <div className={styles.preview} onClick={()=>setSelected(null)}>
          <img src={selected} />
        </div>
      )}

    </div>
  )
}

export default Gallery;

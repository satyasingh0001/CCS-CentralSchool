import { useState } from "react";
import styles from "./Admission.module.css";

function Admission(){

  // FORM STATE
  const [formData, setFormData] = useState({
    name:"",
    age:"",
    class:"",
    number:""
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e)=>{
    e.preventDefault();

    // WHATSAPP MESSAGE
    const message = `
New Admission Enquiry

Student Name: ${formData.name}
Age: ${formData.age}
Class: ${formData.class}
Mobile: ${formData.number}
`;

    // WHATSAPP REDIRECT
    const whatsappNumber = "919365180948"; // <-- put school whatsapp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");

    // GOOGLE SHEET SEND (optional)
    await fetch("https://script.google.com/macros/s/AKfycbw_LgwypLZ7MaXTtLBIeZqdQLUVeSI_Q2O97U9eT0PEnJVfYI7edXpIvkm6yBBb432K/exec",{
  method:"POST",
  mode:"no-cors", // important
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(formData)
});


    // CLEAR FORM
    setFormData({
      name:"",
      age:"",
      class:"",
      number:""
    });

    alert("Admission form submitted successfully!");
  };

  return(
    <div className={styles.container}>

      <h1 className={styles.pageTitle}>Admission 2026</h1>

      <p className={styles.description}>
        CCS Central School invites applications for the academic session 2026.
        Students are selected based on eligibility and availability of seats.
      </p>

      <div className={styles.formWrapper}>
        <div className={styles.formCard}>

          <h2>Apply for Admission</h2>

          <form onSubmit={handleSubmit}>

            <div className={styles.inputGroup}>
              <label>Student Name</label>
              <input
                name="name"
                value={formData.name}
                placeholder="Enter student name"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Age</label>
              <input
                name="age"
                value={formData.age}
                placeholder="Enter age"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Class Applying For</label>
              <input
                name="class"
                value={formData.class}
                placeholder="Enter class"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Mobile Number</label>
              <input
                name="number"
                value={formData.number}
                placeholder="Enter mobile number"
                onChange={handleChange}
                required
              />
            </div>

            <button className={styles.submitBtn} type="submit">
              Submit Admission Form
            </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Admission;

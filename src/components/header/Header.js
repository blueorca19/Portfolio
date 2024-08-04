import styles from "./Header.module.css";
<<<<<<< HEAD
<<<<<<< HEAD
import resume from ".../header/CV.pdf"
=======
import resume from "./Lebenslauf.pdf";
>>>>>>> eb7b3bd49a92bb5e0dc5bb19a6253c64cc265ce5
=======
import resume from ".../header/CV.pdf"
>>>>>>> f1e8fc2e920716e1798d2e624345bb16911c71b5

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>
          <strong>
            <em>Anna Demydova</em>
          </strong>
<<<<<<< HEAD
<<<<<<< HEAD
          <br />a Full stack / backend developer
=======
          <br />a full stack / frontend developer
>>>>>>> eb7b3bd49a92bb5e0dc5bb19a6253c64cc265ce5
=======
          <br />a Full stack / backend developer
>>>>>>> f1e8fc2e920716e1798d2e624345bb16911c71b5
        </h1>
        <div className={styles.headerText}>
          <p>with passion for learning and creating.</p>
        </div>
        <a href={resume} className={styles.btn}>Download CV en/de</a>
      </div>
    </header>
  );
};

export default Header;


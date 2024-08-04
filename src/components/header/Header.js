import styles from "./Header.module.css";
<<<<<<< HEAD
import resume from ".../header/CV.pdf"
=======
import resume from "./Lebenslauf.pdf";
>>>>>>> eb7b3bd49a92bb5e0dc5bb19a6253c64cc265ce5

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>
          <strong>
            <em>Anna Demydova</em>
          </strong>
<<<<<<< HEAD
          <br />a Full stack / backend developer
=======
          <br />a full stack / frontend developer
>>>>>>> eb7b3bd49a92bb5e0dc5bb19a6253c64cc265ce5
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


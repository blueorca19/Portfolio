import styles from "./Header.module.css";
import resume from "./CV.pdf";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>
          <strong>
            <em>Anna Demydova</em>
          </strong>
          <br />Full stack / Backend developer
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


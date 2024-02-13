import TitleFrame from "../components/title-frame";
import styles from "./index.module.css";

const MacBookAir = () => {
  return (
    <div className={styles.macbookAir2}>
      <header className={styles.frameForDistinctiveData}>
        <h3 className={styles.todos}>Todos</h3>
      </header>
      <TitleFrame />
    </div>
  );
};

export default MacBookAir;

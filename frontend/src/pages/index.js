import { Cards } from '@/components/cards';
import styles from '@/styles/app.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> </div>

      <div className={styles.center}>
        <div className={styles.emoji}>😏</div>
      </div>

      <div className={styles.grid}>
        <Cards />
      </div>
    </main>
  );
}

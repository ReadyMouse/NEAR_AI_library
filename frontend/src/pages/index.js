import { Cards } from '@/components/cards';
import styles from '@/styles/app.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '8rem' }}>🧑‍💻</div>
        <h1 style={{ margin: 0 }}>KeyStroke</h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(var(--foreground-rgb), 0.7)', margin: 0 }}>
          Connected, Contextual Answers at each KeyStroke
        </p>
        <p style={{ fontSize: '1rem', color: 'rgba(var(--foreground-rgb), 0.6)', margin: 0 }}>
          A third-party Auto Drive interface
        </p>
      </div>
      
      <Cards />
    </main>
  );
}

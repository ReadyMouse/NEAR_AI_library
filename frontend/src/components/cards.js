import Link from 'next/link';

import styles from '@/styles/app.module.css';

export const Cards = () => {
  return (
    <div className={styles.grid}>
      <Link href="/ai-catalog" className={styles.card} rel="noopener noreferrer">
        <h2>
          Smirking Face <span>-&gt;</span>
        </h2>
        <p>Browse and search AI models in the decentralized catalog.</p>
      </Link>
    </div>
  );
};

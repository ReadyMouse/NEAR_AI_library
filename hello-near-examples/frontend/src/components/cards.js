import Link from 'next/link';

import styles from '@/styles/app.module.css';

export const Cards = () => {
  return (
    <div className={styles.grid}>
      <Link
        href="https://docs.near.org/build/web3-apps/quickstart"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Near Docs <span>-&gt;</span>
        </h2>
        <p>Learn how this application works, and what you can build on Near.</p>
      </Link>

      <Link href="/hello-near" className={styles.card} rel="noopener noreferrer">
        <h2>
          Near Integration <span>-&gt;</span>
        </h2>
        <p>Discover how simple it is to interact with a Near smart contract.</p>
      </Link>

      <Link href="/ai-catalog" className={styles.card} rel="noopener noreferrer">
        <h2>
          AI Model Catalog <span>-&gt;</span>
        </h2>
        <p>Browse and search AI models in the decentralized catalog.</p>
      </Link>
    </div>
  );
};

import Head from 'next/head';

import { Avatar } from '@/components/avatar';
import { Content } from '@/components/content-wizard';
import { Footer } from '@/components/footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Summer of Bitcoin 2025 - Testnet Wallet</title>
        <meta name="description" content="Bitcoin Testnet Wallet built for Summer of Bitcoin 2025. Create addresses, send transactions, and manage your testnet BTC." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Avatar />
          <Content />
        </div>
      </main>
      <Footer />
    </>
  );
}

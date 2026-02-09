import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    Built by <strong>Sumit Das</strong> for{' '}
                    <a
                        href="https://www.summerofbitcoin.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Summer of Bitcoin 2025
                    </a>
                </p>
                <div className={styles.links}>
                    <a
                        href="https://github.com/Sumit-ai-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

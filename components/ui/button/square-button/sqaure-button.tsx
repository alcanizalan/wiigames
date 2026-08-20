import Link from 'next/link';
import styles from './square-button.module.css';

export default function SquareButton({ children }: { children: React.ReactNode }) {
    return (
        <Link href="#" className={styles.squareButton}>
            <div className={styles.buttonLight}></div>
            <span className={styles.buttonText}>{children}</span>
        </Link>
    )
}
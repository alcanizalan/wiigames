import Link from "next/link";
import styles from "./rounded-button.module.css";

export function RoundedButton({children}: {children: React.ReactNode}){
    return(
        <Link href="#" className={styles.roundedButton}>
            <span className={styles.buttonText}>{children}</span>
            <div className={styles.buttonColor}></div>
        </Link>
    )
}
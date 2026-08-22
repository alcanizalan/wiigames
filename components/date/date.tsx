
import styles from './date.module.css';

export default function Date(){
    const currentDate = new globalThis.Date().toLocaleDateString(); 

    return(
        <span className={styles.date}>{currentDate}</span>
    )
}
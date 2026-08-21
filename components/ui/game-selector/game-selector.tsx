import Image from 'next/image';
import styles from './game-selector.module.css';

export default function GameSelector() {
    return(
        <div className={styles.gameSelector}>
            <Image fill alt="Game" src="/path/to/image.jpg" />
        </div>
    )
}
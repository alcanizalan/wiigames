import Image from 'next/image';
import styles from './game-selector.module.css';

import type { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function GameSelector({image, link}: {image?: string | StaticImageData, link?: string}) {
    return(
        <Link href={link || "#"} className={styles.gameSelectorLink}>
            <div className={styles.gameSelector} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={styles.gameSelectorHover}>

                </div>
            </div>
        </Link>
    )
}
import styles from './notification.module.css';

import Image from 'next/image';

export default function Notification(){
    return(
        <article className={styles.notification}>
            <div className={styles.notificationIcon}>
                <div className={styles.notificationLink}>
                    <Image src="./icons/notification_icon.svg" alt="Info Icon" width={50} height={50}></Image>
                </div>
            </div>
            <div className={styles.notificationBody}>
                <h3 className={styles.notificationTitle}>We Are OPEN!</h3>
                <p className={styles.notificationMessage}>This is the start of something fun and big!</p>
            </div>
        </article>
    )
}
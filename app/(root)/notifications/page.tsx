import styles from './page.module.css';
import FooterMenu from '@/components/footers/footer-menu/footer-menu';
import Link from 'next/link';
import Image from 'next/image';
import Notification from '@/components/ui/notification/notification';

export default function NotificationsPage() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleAndReturn}>
                    <Link href="/" className={styles.return}>
                        <Image src="/icons/return_icon.svg" alt="Back Icon" width={50} height={50} />
                    </Link>
                    <h1 className={styles.title}>Notifications Page</h1>
                </div>
                <div className={styles.notificationsContainer}>
                    <Notification /> 
                    <p className={styles.noNotificationsMessage}>No more notifications yet!</p>
                </div>
                
            </div>
            <FooterMenu />
        </section>
    );
}
"use client";

import styles from './footer-menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Date from '@/components/date/date';

import { motion } from 'framer-motion';

export default function FooterMenu() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sectionLeft}>
                <div className={styles.infoLinkContainer}>
                    <Link href="/about-me" >
                        <motion.div className={styles.infoLink} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                            <Image src="./icons/info_icon.svg" alt="Info Icon" width={50} height={50}></Image>
                        </motion.div>
                    </Link>
                </div>
            </div>
            <div className={styles.sectionCenter}>
                <Date />
            </div>
            <div className={styles.sectionRight}>
                <div className={styles.notificationLinkContainer}>
                    <Link href="/notifications" >
                        <motion.div className={styles.notificationLink} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                            <Image src="./icons/notification_icon.svg" alt="Info Icon" width={50} height={50}></Image>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './page.module.css';
export default function AboutMe(){
    return (
        <section className={styles.section}>
            <p className={styles.warning}><Image src="./icons/warning_icon.svg" alt="Warning Icon" width={50} height={50}></Image>WARNING THIS IS NOT A N***ENDO PAGE</p>
            <p className={styles.message}>This is a page is made by fans for fans just for playing different minigames with friends</p>
            <div className={styles.moreHereContainer}>
                <p className={styles.moreHere}>More about me in</p>
                <Link className={styles.link} href="https://alcanizalan.me">www.alcanizalan.me</Link>
            </div>
            <motion.div animate={{ opacity: 0 }} initial={{ opacity: 1 }} transition={{ duration: .8, repeat: Infinity, repeatType: "reverse" }} className={styles.comeBackContainer}>
                <Link className={styles.comeBack} href="../" >Press <span className={styles.comeBackHere}>here</span> to continue</Link>
            </motion.div>
        </section>
    )
}
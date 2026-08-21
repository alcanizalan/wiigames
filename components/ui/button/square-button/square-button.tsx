"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './square-button.module.css';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SquareButton({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href="#" 
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <motion.div className={styles.squareButton} animate={{ scale: 1, transition: { duration: 0.1 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <motion.div animate={{y: [-50, -53], x: [-140, -143]}} whileHover={{ opacity: isHovered ? 1 : 0 }} transition={{ repeat: Infinity, duration: 0.4, repeatType: 'reverse', ease: 'easeInOut' }}><Image src="/button/border_hover.svg" alt="Button Border" height={40} width={40} className={styles.borderButton1} /></motion.div>
                <motion.div animate={{y: [-50, -53], x: [220, 223]}} transition={{ repeat: Infinity, duration: 0.4, repeatType: 'reverse', ease: 'easeInOut' }}><Image src="/button/border_hover.svg" alt="Button Border" height={40} width={40} className={styles.borderButton2} /></motion.div>
                <motion.div animate={{y: [50, 53], x: [180, 183]}} transition={{ repeat: Infinity, duration: 0.4, repeatType: 'reverse', ease: 'easeInOut' }}><Image src="/button/border_hover.svg" alt="Button Border" height={40} width={40} className={styles.borderButton3} /></motion.div>
                <motion.div animate={{y: [50, 53], x: [-260, -263]}} transition={{ repeat: Infinity, duration: 0.4, repeatType: 'reverse', ease: 'easeInOut' }}><Image src="/button/border_hover.svg" alt="Button Border" height={40} width={40} className={styles.borderButton4} /></motion.div>


                <div className={styles.buttonLight}></div>
                <span className={styles.buttonText}>{children}</span>
            </motion.div>
        </Link>
    )
}
"use client";

import Link from "next/link";
import styles from "./rounded-button.module.css";
import { motion } from "framer-motion";

export function RoundedButton({children}: {children: React.ReactNode}){
    return(
        <Link href="#">
            <motion.div  className={styles.roundedButton} animate={{ scale: 1, transition: { duration: 0.1 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className={styles.buttonText}>{children}</span>
                <div className={styles.buttonColor}></div>
            </motion.div>
        </Link>
    )
}
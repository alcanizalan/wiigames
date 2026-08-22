"use client";
import { useEffect } from 'react';

export default function Clock() {
    useEffect(() => {
        const clockElement = document.querySelector('.clock-text');
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            if (clockElement) {
                clockElement.textContent = `${hours}:${minutes}`;
            }
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="clock">
            <p className="clock-text"></p>
        </div>
    )
}
"use client";

import React, { useState, useEffect } from 'react';

export const CountUp = ({ to, suffix = "" }: { to: number, suffix?: string }) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = to;
        const duration = 1000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setVal(Math.floor(ease * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [to]);

    return <>{val}{suffix}</>;
}

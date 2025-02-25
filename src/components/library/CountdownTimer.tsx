"use client";

import { useState, useEffect } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function CountdownTimer() {
    // Set the target end time
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15); // 15 days from now
    targetDate.setHours(targetDate.getHours() + 10);
    targetDate.setMinutes(targetDate.getMinutes() + 45);
    targetDate.setSeconds(targetDate.getSeconds() + 30);

    const calculateTimeLeft = (): TimeLeft => {
        const difference = targetDate.getTime() - new Date().getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Ensure no negative values
        }
    };

    // State to store time left
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        // Update the countdown every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 max-w-xl mx-auto">
            {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
                <div key={item.label} className="bg-appPurple-900/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-appPurple-900">{item.value}</div>
                    <div className="text-sm text-appPurple-900">{item.label}</div>
                </div>
            ))}
        </div>
    );
}

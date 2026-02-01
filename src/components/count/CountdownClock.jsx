import { useEffect, useState } from "react";

const CountdownClock = () => {
  // Fecha de finalización: cambia aquí
  const targetDate = new Date("2026-02-10T12:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const renderUnit = (value, label) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-mono text-2xl">
        {value}
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-2">
      {renderUnit(timeLeft.days, "Days")}
      {renderUnit(timeLeft.hours, "Hours")}
      {renderUnit(timeLeft.minutes, "Minutes")}
      {renderUnit(timeLeft.seconds, "Seconds")}
    </div>
  );
};

export default CountdownClock;

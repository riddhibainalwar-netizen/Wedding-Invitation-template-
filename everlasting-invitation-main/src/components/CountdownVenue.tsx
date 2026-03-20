import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const WEDDING_DATE = new Date("2026-03-12T18:00:00+05:30");

const CountdownVenue = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <AnimatedBackground image="/palace_hawa_mahal.png" />      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-box">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground mb-2">
            The countdown begins
          </h2>

          <div className="flex justify-center gap-3 md:gap-6 mt-8">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINS" },
              { value: timeLeft.seconds, label: "SECS" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.span
                  className="font-display text-4xl md:text-6xl text-champagne tabular-nums"
                  key={item.value}
                  initial={{ scale: 1.1, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {pad(item.value)}
                </motion.span>
                <span className="label-style text-foreground/60 text-[10px] mt-1">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>


      </motion.div>
    </section>
  );
};

export default CountdownVenue;

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const DURATION = 1750; // ms

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      // ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(eased * 100);
      setProgress(value);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    if (done) onComplete();
  }, [done, onComplete]);

  const fillDeg = progress * 3.6;
  const textColor =
    progress < 50 ? "hsl(138, 29%, 9%)" : "hsl(18, 93%, 54%)";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "hsl(18, 93%, 54%)" }}
      animate={done ? { x: "100%" } : { x: "0%" }}
      transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
      onAnimationComplete={handleAnimationComplete}
    >
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "min(100px, 25vw)",
          height: "min(100px, 25vw)",
          background: `conic-gradient(
            hsl(138, 29%, 9%) 0deg ${fillDeg}deg,
            transparent ${fillDeg}deg 360deg
          )`,
        }}
      >
        <span
          className="relative z-10 font-display select-none"
          style={{
            fontSize: "min(28px, 6vw)",
            color: textColor,
            lineHeight: 1,
          }}
        >
          {progress}
        </span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

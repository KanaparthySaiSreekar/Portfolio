import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.2 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-interactive]");
      setIsHovering(!!interactive);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  const scale = isClicking ? 0.7 : isHovering ? 1.25 : 1;
  const color = isHovering ? "#F05D23" : "#111D13";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale }}
      transition={{ duration: 0.1 }}
    >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        {/* Center dot */}
        <circle cx="8.5" cy="8.5" r="1.5" fill={color} />
        {/* Top */}
        <line x1="8.5" y1="0" x2="8.5" y2="5" stroke={color} strokeWidth="1.5" />
        {/* Bottom */}
        <line x1="8.5" y1="12" x2="8.5" y2="17" stroke={color} strokeWidth="1.5" />
        {/* Left */}
        <line x1="0" y1="8.5" x2="5" y2="8.5" stroke={color} strokeWidth="1.5" />
        {/* Right */}
        <line x1="12" y1="8.5" x2="17" y2="8.5" stroke={color} strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;

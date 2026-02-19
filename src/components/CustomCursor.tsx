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
  const color = isHovering ? "#FFFFFF" : "#111D13";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale }}
      transition={{ duration: 0.1 }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {/* Center dot */}
        <circle cx="10" cy="10" r="1.75" fill={color} />
        {/* Top */}
        <line x1="10" y1="0" x2="10" y2="6" stroke={color} strokeWidth="1.5" />
        {/* Bottom */}
        <line x1="10" y1="14" x2="10" y2="20" stroke={color} strokeWidth="1.5" />
        {/* Left */}
        <line x1="0" y1="10" x2="6" y2="10" stroke={color} strokeWidth="1.5" />
        {/* Right */}
        <line x1="14" y1="10" x2="20" y2="10" stroke={color} strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;

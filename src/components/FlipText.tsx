import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface FlipTextProps {
  text: string;
  frontColor: string;
  backColor: string;
  className?: string;
}

const FlipText = ({ text, frontColor, backColor, className = "" }: FlipTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const letters = text.split("");

  return (
    <div
      className={`inline-flex ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-interactive
      style={{ perspective: "600px" }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: isHovered ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: isHovered ? i * 0.04 : (letters.length - 1 - i) * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Front face */}
          <span
            style={{
              color: frontColor,
              backfaceVisibility: "hidden",
              display: "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
          {/* Back face */}
          <span
            className="absolute inset-0"
            style={{
              color: backColor,
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
              display: "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

export default FlipText;

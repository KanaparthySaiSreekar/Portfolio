import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PerspectiveGrid from "@/components/PerspectiveGrid";
import FlipText from "@/components/FlipText";
import Marquee from "@/components/Marquee";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <PerspectiveGrid />

        {/* Hero Typography */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <div className="w-full flex justify-center">
            <FlipText
              text="FORGE."
              frontColor="#111D13"
              backColor="#FFFFFF"
              className="font-display text-[clamp(80px,18vw,200px)] leading-[0.9] tracking-[0.05em]"
            />
          </div>
          <div className="w-full flex justify-center">
            <FlipText
              text="OUTCOME."
              frontColor="#FFFFFF"
              backColor="#111D13"
              className="font-display text-[clamp(80px,18vw,200px)] leading-[0.9] tracking-[0.05em]"
            />
          </div>

          <motion.p
            className="font-display text-foreground text-[clamp(10px,1.5vw,18px)] tracking-[0.4em] mt-8 opacity-70 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            INTENT DRIVEN. IMPACT MEASURED. PROBLEM DEFINED. ARCHITECTURE LED.
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative z-10 flex flex-col items-center py-32 px-4">
        <motion.div
          className="max-w-[680px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-foreground text-lg leading-relaxed mb-4">
            I design intelligent systems that scale.
          </p>
          <p className="font-mono text-foreground text-lg leading-relaxed mb-12">
            I build architecture that thinks.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/work">
              <motion.button
                className="px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] rounded-lg"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                data-interactive
              >
                VIEW WORK
              </motion.button>
            </Link>
            <Link to="/experience">
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-display text-sm tracking-[0.2em] rounded-lg transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                data-interactive
              >
                EXPLORE THINKING
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Marquee />
    </div>
  );
};

export default Index;

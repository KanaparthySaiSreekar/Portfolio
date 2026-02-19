import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
        {/* Black frame border */}
        <div className="absolute inset-0 border-[5px] border-black z-50 pointer-events-none" />
        <PerspectiveGrid />

        {/* Dot grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #111D13 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Coordinate labels */}
        <div className="absolute top-16 left-6 font-mono text-[11px] leading-tight text-foreground opacity-[0.08] select-none z-10">
          <div>X: 00.00</div>
          <div>Y: 00.00</div>
          <div>Z: 01.00</div>
        </div>
        <div className="absolute top-6 right-60 font-mono text-[11px] leading-tight text-foreground opacity-[0.08] select-none z-10 text-right">
          <div>X: 01.00</div>
          <div>Y: 00.00</div>
          <div>Z: 01.00</div>
        </div>
        <div className="absolute bottom-36 right-6 font-mono text-[11px] leading-tight text-foreground opacity-[0.08] select-none z-10 text-right">
          <div>X: 01.00</div>
          <div>Y: 01.00</div>
          <div>Z: 01.00</div>
        </div>

        {/* Section label */}
        <div className="absolute bottom-36 left-14 z-10 select-none pointer-events-none -rotate-90 origin-bottom-left font-mono text-[18px] font-black tracking-[0.3em] uppercase text-foreground opacity-[0.08] leading-tight"
          style={{ WebkitTextStroke: "1px currentColor" }}
        >
          <span>01</span>
          <br />
          <span>HERO</span>
        </div>

        {/* Hero Typography */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <div className="w-full flex justify-center">
            <FlipText
              text="FORGE."
              frontColor="#111D13"
              backColor="#FFFFFF"
              className="font-display text-[clamp(80px,18vw,3000px)] leading-[0.9] tracking-[0.05em]"
            />
          </div>
          <div className="w-full flex justify-center">
            <FlipText
              text="OUTCOME."
              frontColor="#FFFFFF"
              backColor="#111D13"
              className="font-display text-[clamp(80px,18vw,3000px)] leading-[0.9] tracking-[0.05em]"
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
            DEFINED PROBLEMS.
          </p>
          <p className="font-mono text-foreground text-lg leading-relaxed mb-12">
            MEASURED OUTCOMES.
          </p>

          <p className="font-display text-foreground text-[clamp(24px,5vw,48px)] tracking-[0.2em] leading-tight">
            KANAPARTHY SAI SREEKAR.
          </p>
        </motion.div>
      </section>

      <Marquee />
    </div>
  );
};

export default Index;

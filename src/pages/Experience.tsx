import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 50, suffix: "K+", label: "REQUESTS / SEC" },
  { value: 200, suffix: "+", label: "MODELS DEPLOYED" },
  { value: 99.9, suffix: "%", label: "UPTIME SLA" },
  { value: 2, suffix: "M+", label: "EVENTS / MIN" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-secondary text-[clamp(48px,8vw,96px)] leading-none">
      {value}{suffix}
    </span>
  );
};

const experiences = [
  {
    role: "SENIOR ML ENGINEER",
    company: "ENTERPRISE AI CORP",
    period: "2022 — PRESENT",
    responsibilities: [
      "Architected distributed inference pipeline serving 50K+ req/s",
      "Led team of 8 engineers building autonomous agent framework",
      "Reduced model deployment time from 2 weeks to 4 hours",
    ],
    impact: "3x throughput improvement, $2.4M annual cost reduction",
  },
  {
    role: "SOFTWARE ARCHITECT",
    company: "CLOUD SYSTEMS INC",
    period: "2020 — 2022",
    responsibilities: [
      "Designed event-driven data platform processing 2M+ events/min",
      "Built zero-downtime API gateway with intelligent rate limiting",
      "Implemented real-time monitoring across 200+ microservices",
    ],
    impact: "Sub-10ms p99 latency, 99.99% availability",
  },
  {
    role: "BACKEND ENGINEER",
    company: "STARTUP LABS",
    period: "2018 — 2020",
    responsibilities: [
      "Built core platform serving 1M+ daily active users",
      "Implemented CI/CD pipeline reducing deployment failures by 90%",
      "Designed database schema supporting multi-tenant architecture",
    ],
    impact: "10x user growth with zero architecture rewrites",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-8">
      <div className="noise-overlay" />

      <motion.h1
        className="font-display text-foreground text-[clamp(60px,12vw,160px)] leading-[0.85] -ml-2 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        EXPERIENCE
      </motion.h1>

      <motion.p
        className="font-mono text-foreground opacity-70 text-sm max-w-xl mb-20 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Systems built. Problems solved. Scale achieved.
      </motion.p>

      {/* Metrics */}
      <div className="bg-card rounded-lg p-10 mb-20 max-w-5xl">
        {/* Animated diagram lines */}
        <svg className="w-full h-16 mb-8" viewBox="0 0 1000 60" preserveAspectRatio="none">
          <motion.line
            x1="0" y1="30" x2="1000" y2="30"
            stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          {[100, 250, 400, 600, 750, 900].map((x, i) => (
            <motion.line
              key={i}
              x1={x} y1="10" x2={x} y2="50"
              stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            />
          ))}
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CountUp target={m.value} suffix={m.suffix} />
              <p className="font-mono text-xs tracking-[0.2em] text-brand-grey mt-2">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience entries */}
      <div className="max-w-4xl space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <h3 className="font-display text-foreground text-4xl">{exp.role}</h3>
              <span className="font-mono text-xs tracking-[0.2em] text-brand-grey">
                {exp.period}
              </span>
            </div>
            <p className="font-display text-foreground text-xl opacity-70 mb-6">
              {exp.company}
            </p>

            <div className="space-y-2 mb-6">
              {exp.responsibilities.map((r, j) => (
                <p key={j} className="font-mono text-sm text-foreground opacity-80 pl-4 border-l-2 border-foreground/20">
                  {r}
                </p>
              ))}
            </div>

            <div className="bg-card inline-block px-4 py-2 rounded">
              <span className="font-mono text-xs text-card-foreground tracking-wide">
                IMPACT: {exp.impact}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

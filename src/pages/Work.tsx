import { motion } from "framer-motion";

const projects = [
  {
    title: "ALGOBOT",
    category: "ALGORITHMIC TRADING",
    description: "Algorithmic trading system for Indian equity and futures markets. Automates trading strategies with configurable risk management, comprehensive backtesting, paper trading validation, and an interactive CLI.",
    tech: "Python · CLI",
  },
  {
    title: "HIGH-PERFORMANCE LLM INFERENCE SERVER",
    category: "AI INFRASTRUCTURE",
    description: "A production-ready, high-performance Large Language Model inference server built in Rust. Delivers ultra-fast, scalable AI services with an OpenAI-compatible API.",
    tech: "Rust · LLM · REST API",
  },
  {
    title: "ZERO-COPY VECTOR SEARCH ENGINE",
    category: "SEARCH / AI",
    description: "A blazingly fast vector search engine built with Rust and Python, handling 100GB+ datasets without loading them into RAM. Uses memory-mapped files, SIMD-accelerated distance calculations, and HNSW indexing for efficient approximate nearest neighbor search.",
    tech: "Rust · Python · SIMD · HNSW",
  },
  {
    title: "DARKTERM",
    category: "CRYPTOGRAPHY / NETWORKING",
    description: "A production-grade, end-to-end encrypted peer-to-peer chat application for the terminal, built in Rust with industry-standard cryptographic protocols.",
    tech: "Rust · Cryptography · P2P · TUI",
  },
  {
    title: "ONCOWSI-VISION",
    category: "MEDICAL AI",
    description: "Production-ready web application for clinical pathologists and ML engineers to analyze whole-slide pathology images using AI-powered biomarker detection. Supports multi-gigabyte WSI uploads, 40x magnification viewing, YOLOv5/DETR inference, real-time detection visualization, and comprehensive report generation.",
    tech: "Python · YOLOv5 · DETR · WebSocket",
  },
  {
    title: "MULTIMODAL INTELLIGENCE WORKFLOW SUITE",
    category: "AI / ML SYSTEMS",
    description: "Enterprise-grade AI system with OCR-enabled document classification using BERT, image recognition via Vision Transformers with attention maps, and multimodal fusion through cross-modal attention for joint text-image understanding.",
    tech: "Python · BERT · ViT · ResNet · PyTorch",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-8">
      <div className="noise-overlay" />

      <motion.h1
        className="font-display text-foreground text-[clamp(60px,12vw,160px)] leading-[0.85] -ml-2 mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        SELECTED
        <br />
        WORK
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group bg-card p-8 rounded-lg border-2 border-transparent transition-all duration-200 hover:border-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
            data-interactive
          >
            <span className="font-mono text-xs tracking-[0.2em] text-brand-grey mb-3 block">
              {project.category}
            </span>
            <h3 className="font-display text-card-foreground text-3xl mb-3">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-brand-grey leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="font-mono text-xs text-card-foreground opacity-60">
              {project.tech}
            </p>

            <motion.span
              className="block font-display text-sm tracking-[0.2em] text-secondary mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              VIEW CASE STUDY →
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;

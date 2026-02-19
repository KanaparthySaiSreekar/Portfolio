import { motion } from "framer-motion";

const projects = [
  {
    title: "NEURAL MESH ORCHESTRATOR",
    category: "ML INFRASTRUCTURE",
    description: "Distributed inference pipeline handling 50K+ requests/second across multi-region GPU clusters.",
    tech: "Python · CUDA · Kubernetes · gRPC",
  },
  {
    title: "AUTONOMOUS AGENT FRAMEWORK",
    category: "AI SYSTEMS",
    description: "Self-healing agent architecture with dynamic task decomposition and memory persistence.",
    tech: "TypeScript · LangChain · Redis · PostgreSQL",
  },
  {
    title: "REAL-TIME DATA FABRIC",
    category: "DATA INFRASTRUCTURE",
    description: "Event-driven data platform processing 2M+ events/minute with sub-10ms latency.",
    tech: "Kafka · Flink · ClickHouse · Go",
  },
  {
    title: "SCALABLE API GATEWAY",
    category: "BACKEND SYSTEMS",
    description: "Zero-downtime API gateway with intelligent rate limiting and circuit breaking.",
    tech: "Rust · Envoy · Terraform · AWS",
  },
  {
    title: "MODEL LIFECYCLE PLATFORM",
    category: "MLOPS",
    description: "End-to-end ML platform managing 200+ models from training to production deployment.",
    tech: "Python · MLflow · Airflow · Docker",
  },
  {
    title: "KNOWLEDGE GRAPH ENGINE",
    category: "AI / SEARCH",
    description: "Semantic search engine over enterprise knowledge bases with RAG-powered retrieval.",
    tech: "Python · Neo4j · FastAPI · OpenAI",
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

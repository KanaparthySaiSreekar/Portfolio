import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="relative">
        {/* Sliding overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[200] bg-secondary"
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          exit={{ x: "0%" }}
          transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

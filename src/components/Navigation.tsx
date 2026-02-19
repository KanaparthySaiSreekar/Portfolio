import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "WORK", path: "/work" },
  { label: "EXPERIENCE", path: "/experience" },
];

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(17, 29, 19, 0.1)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <Link to="/" className="font-display text-2xl tracking-wider text-foreground" data-interactive>
        KASASREE
      </Link>

      <div className="flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="relative font-display text-sm tracking-[0.2em] text-foreground"
            data-interactive
          >
            {link.label}
            {location.pathname === link.path && (
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-secondary"
                layoutId="nav-underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;

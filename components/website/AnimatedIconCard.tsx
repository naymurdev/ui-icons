import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedIconCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const cardVariants = {
  idle: { boxShadow: "0 0 0 rgba(0,0,0,0)", y: 0 },
  hover: {
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function AnimatedIconCard({ title, description, icon }: AnimatedIconCardProps) {
  return (
    <motion.article
      initial="idle"
      whileHover="hover"
      variants={cardVariants}
      style={{
        borderRadius: 20,
        border: "1px solid rgba(148, 163, 184, 0.25)",
        padding: 20,
        background: "white",
        display: "grid",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          display: "grid",
          placeItems: "center",
          background: "rgba(148, 163, 184, 0.12)",
          color: "#0f172a",
        }}
      >
        {icon}
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        <h3 style={{ margin: 0, fontSize: 18, color: "#0f172a" }}>{title}</h3>
        <p style={{ margin: 0, color: "#475569", fontSize: 14 }}>{description}</p>
      </div>
    </motion.article>
  );
}

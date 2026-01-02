import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./button";

interface DownloadButtonProps {
  variant?: "default" | "hero";
  className?: string;
}

const DownloadButton = ({ variant = "default", className = "" }: DownloadButtonProps) => {
  if (variant === "hero") {
    return (
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex items-center gap-3 bg-white text-primary font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow ${className}`}
      >
        <Download size={24} />
        DOWNLOAD NOW
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild className={`gradient-primary border-0 shadow-lg hover:shadow-glow transition-shadow duration-300 ${className}`}>
        <a href="#" className="gap-2">
          <Download size={18} />
          Download
        </a>
      </Button>
    </motion.div>
  );
};

export default DownloadButton;
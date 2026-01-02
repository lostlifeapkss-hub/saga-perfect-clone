import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  centered?: boolean;
}

const SectionHeading = ({ children, className = "", as: Tag = "h2", centered = false }: SectionHeadingProps) => {
  const baseStyles = "font-bold text-foreground";
  
  const sizeStyles = {
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl lg:text-4xl",
    h3: "text-xl md:text-2xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={centered ? "text-center" : ""}
    >
      <Tag className={`${baseStyles} ${sizeStyles[Tag]} ${className}`}>
        {children}
      </Tag>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-primary rounded-full mt-4 ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
};

export default SectionHeading;
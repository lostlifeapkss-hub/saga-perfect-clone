import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const InfoCard = ({ icon: Icon, label, value }: InfoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="gradient-card rounded-2xl p-5 md:p-6 text-center shadow-xl hover:shadow-glow transition-shadow duration-300 cursor-pointer group"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3"
      >
        <Icon className="text-primary-foreground" size={24} />
      </motion.div>
      <p className="text-primary-foreground/80 text-sm font-medium">{label}</p>
      <p className="text-primary-foreground font-bold text-lg mt-1">{value}</p>
    </motion.div>
  );
};

export default InfoCard;
import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-2 border-primary rounded-2xl overflow-hidden bg-card shadow-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-primary/10 hover:bg-primary/15 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-card rounded-xl flex items-center justify-center">
            <List size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg text-foreground">Table of Contents</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 grid sm:grid-cols-2 gap-2">
              {items.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors group"
                >
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {index + 1}
                  </span>
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TableOfContents;
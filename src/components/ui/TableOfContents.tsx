import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

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
    <div className="border-2 border-primary rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        <div className="flex items-center gap-2">
          <List size={20} className="text-primary" />
          <span className="font-bold text-foreground">Table of Contents</span>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-primary" />
        ) : (
          <ChevronDown size={20} className="text-primary" />
        )}
      </button>
      
      {isOpen && (
        <nav className="px-4 py-3 bg-secondary">
          <ol className="list-decimal list-inside space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-primary hover:underline transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default TableOfContents;
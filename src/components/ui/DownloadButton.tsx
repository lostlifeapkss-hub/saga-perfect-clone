import { Download } from "lucide-react";
import { Button } from "./button";

interface DownloadButtonProps {
  variant?: "default" | "hero";
  className?: string;
}

const DownloadButton = ({ variant = "default", className = "" }: DownloadButtonProps) => {
  if (variant === "hero") {
    return (
      <a
        href="#"
        className={`inline-flex items-center gap-3 bg-secondary text-primary font-bold text-lg px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
      >
        <Download size={24} />
        DOWNLOAD NOW
      </a>
    );
  }

  return (
    <Button asChild className={className}>
      <a href="#">
        <Download size={18} />
        Download
      </a>
    </Button>
  );
};

export default DownloadButton;
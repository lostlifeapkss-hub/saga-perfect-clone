interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const SectionHeading = ({ children, className = "", as: Tag = "h2" }: SectionHeadingProps) => {
  const baseStyles = "font-bold text-foreground";
  
  const sizeStyles = {
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl",
    h3: "text-xl md:text-2xl",
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[Tag]} ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full" />
      </span>
    </Tag>
  );
};

export default SectionHeading;
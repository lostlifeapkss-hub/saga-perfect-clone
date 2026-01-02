import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const InfoCard = ({ icon: Icon, label, value }: InfoCardProps) => {
  return (
    <div className="bg-primary rounded-xl p-4 md:p-5 text-center shadow-lg">
      <div className="flex items-center justify-center mb-2">
        <Icon className="text-primary-foreground" size={24} />
      </div>
      <p className="text-primary-foreground/80 text-sm font-medium">{label}</p>
      <p className="text-primary-foreground font-bold text-lg">{value}</p>
    </div>
  );
};

export default InfoCard;
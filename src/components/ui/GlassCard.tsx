import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

const GlassCard = ({ children, className, variant = "light" }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        variant === "light" ? "glass-card" : "glass-card-dark",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

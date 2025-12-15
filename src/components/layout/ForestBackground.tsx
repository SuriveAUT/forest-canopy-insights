import forestBg from "@/assets/forest-background.jpg";

interface ForestBackgroundProps {
  children: React.ReactNode;
}

const ForestBackground = ({ children }: ForestBackgroundProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${forestBg})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="fixed inset-0 forest-overlay" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ForestBackground;

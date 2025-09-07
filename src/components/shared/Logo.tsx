import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ showText = true, size = "md" }: LogoProps) => {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: { icon: "h-6 w-6", container: "h-8 w-8", text: "text-lg" },
    md: { icon: "h-7 w-7", container: "h-10 w-10", text: "text-xl" },
    lg: { icon: "h-9 w-9", container: "h-12 w-12", text: "text-2xl" }
  };

  return (
    <Button
      variant="ghost"
      onClick={() => navigate('/')}
      className="flex items-center gap-3 hover:bg-transparent p-0"
    >
      <div className={`${sizeClasses[size].container} bg-primary rounded-lg flex items-center justify-center`}>
        <GraduationCap className={`${sizeClasses[size].icon} text-primary-foreground`} />
      </div>
      {showText && (
        <span className={`${sizeClasses[size].text} font-bold`}>
          EduChoice Kenya
        </span>
      )}
    </Button>
  );
};

export default Logo;
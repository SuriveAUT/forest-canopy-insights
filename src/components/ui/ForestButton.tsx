import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-45 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-forest-green text-text-on-dark hover:bg-forest-green-hover active:bg-forest-green-active focus:ring-forest-green shadow-button",
      secondary: "bg-warm-brown text-text-on-dark hover:bg-warm-brown-hover focus:ring-warm-brown",
      outline: "bg-transparent border border-white/[0.22] text-text-primary hover:bg-neutral-200 focus:ring-forest-green",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-neutral-200 focus:ring-forest-green",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

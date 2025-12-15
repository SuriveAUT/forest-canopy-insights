import { cn } from "@/lib/utils";
import { 
  ButtonHTMLAttributes, 
  InputHTMLAttributes, 
  TextareaHTMLAttributes, 
  SelectHTMLAttributes,
  forwardRef,
  useState 
} from "react";
import { Link, useLocation } from "react-router-dom";
import forestBg from "@/assets/forest-background.jpg";

// ==================== GLASS CARD ====================
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export const GlassCard = ({ children, className, variant = "light" }: GlassCardProps) => (
  <div className={cn(variant === "light" ? "glass-card" : "glass-card-dark", "p-6", className)}>
    {children}
  </div>
);

// ==================== BUTTON ====================
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// ==================== FORM INPUT ====================
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, id, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <input ref={ref} id={id} className={cn("form-input", className)} {...props} />
    </div>
  )
);
FormInput.displayName = "FormInput";

// ==================== FORM SELECT ====================
interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, id, options, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <select
        ref={ref}
        id={id}
        className={cn(
          "form-input appearance-none bg-no-repeat bg-right pr-10 cursor-pointer",
          "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')]",
          className
        )}
        style={{ backgroundPosition: 'right 12px center' }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
);
FormSelect.displayName = "FormSelect";

// ==================== FORM CHECKBOX ====================
interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label htmlFor={id} className="flex items-center gap-2.5 cursor-pointer group">
      <input ref={ref} type="checkbox" id={id} className={cn("custom-checkbox", className)} {...props} />
      <span className="text-sm text-text-primary group-hover:text-forest-green transition-colors">{label}</span>
    </label>
  )
);
FormCheckbox.displayName = "FormCheckbox";

// ==================== FORM TEXTAREA ====================
interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, id, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <textarea ref={ref} id={id} className={cn("form-input min-h-[100px] resize-y", className)} {...props} />
    </div>
  )
);
FormTextarea.displayName = "FormTextarea";

// ==================== FOREST BACKGROUND ====================
interface ForestBackgroundProps {
  children: React.ReactNode;
}

export const ForestBackground = ({ children }: ForestBackgroundProps) => (
  <div className="min-h-screen relative">
    <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${forestBg})` }} />
    <div className="fixed inset-0 forest-overlay" />
    <div className="relative z-10 min-h-screen">{children}</div>
  </div>
);

// ==================== HEADER ====================
interface HeaderProps {
  userName?: string;
}

export const Header = ({ userName = "Max Mustermann" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-text-on-dark font-semibold text-lg hover:opacity-80 transition-opacity">
            Hallo {userName}
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-5 py-2 bg-white/[0.12] hover:bg-white/[0.18] text-text-on-dark rounded-lg border border-white/[0.22] transition-all font-medium"
            >
              Menü
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-card py-2 animate-fade-in">
                <Link to="/" className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/' ? 'bg-neutral-200' : ''}`} onClick={() => setMenuOpen(false)}>Startseite</Link>
                <Link to="/kontrollblatt" className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/kontrollblatt' ? 'bg-neutral-200' : ''}`} onClick={() => setMenuOpen(false)}>Kontrollblatt</Link>
                <Link to="/stammdaten" className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/stammdaten' ? 'bg-neutral-200' : ''}`} onClick={() => setMenuOpen(false)}>Stammdatenerfassung</Link>
                <hr className="my-2 border-black/[0.06]" />
                <Link to="/login" className="block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors" onClick={() => setMenuOpen(false)}>Abmelden</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className="flex items-center gap-2.5 cursor-pointer group">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn("custom-checkbox", className)}
          {...props}
        />
        <span className="text-sm text-text-primary group-hover:text-forest-green transition-colors">
          {label}
        </span>
      </label>
    );
  }
);

FormCheckbox.displayName = "FormCheckbox";

export default FormCheckbox;

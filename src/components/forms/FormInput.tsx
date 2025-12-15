import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn("form-input", className)}
          {...props}
        />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;

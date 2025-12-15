import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn("form-input min-h-[100px] resize-y", className)}
          {...props}
        />
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;

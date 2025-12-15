import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
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
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;

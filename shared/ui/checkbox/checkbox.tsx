import type { InputHTMLAttributes, ReactNode } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
};

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label className="flex cursor-pointer items-start gap-2.5">
      <input
        type="checkbox"
        className={`mt-0.5 h-4 w-4 shrink-0 accent-terracotta ${className ?? ""}`}
        {...props}
      />
      <span className="text-[13px] leading-relaxed text-text-secondary">
        {label}
      </span>
    </label>
  );
};

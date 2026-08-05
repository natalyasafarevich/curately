import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`h-12 w-full rounded-xl border border-border bg-white px-4 font-sans text-[15px] text-text-primary placeholder:text-text-muted focus:border-terracotta focus:outline-none ${className ?? ""}`}
      {...props}
    />
  );
};

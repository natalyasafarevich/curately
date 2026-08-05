import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-terracotta text-white hover:bg-[#B96A3A]",
  secondary:
    "bg-white text-text-primary border border-border hover:bg-sand",
};

export const Button = ({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex h-12.5 w-full items-center justify-center gap-2.5 rounded-xl text-base font-semibold transition-colors disabled:opacity-50 disabled:hover:bg-terracotta ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

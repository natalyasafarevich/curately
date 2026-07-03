/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  children: ReactNode;
  component?: T;
  variant?: "title" | "text";
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "component">;

export const Text = <T extends ElementType = "p">({
  component: Component = "p" as T,
  children,
  variant = "text",
  className,
  ...rest
}: Props<T>) => {
  const variantClasses = {
    title: "text-2xl font-bold",
    text: "text-sm font-normal",
  };
  return (
    <Component
      className={`${variantClasses[variant]} ${className ?? ""}`}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
};

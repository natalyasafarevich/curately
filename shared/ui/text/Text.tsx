import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  children: ReactNode;
  component?: T;
  variant?: "title" | "text";
} & Omit<ComponentPropsWithoutRef<T>, "component">;
export const Text = <T extends ElementType = "p">({
  component: Component = "p" as T,
  children,
  variant = "text",
  ...rest
}: Props<T>) => {
  const variantClasses = {
    title: "text-2xl font-bold",
    text: "text-sm font-normal",
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component className={`${variantClasses[variant]}`} {...(rest as any)}>
      {children}
    </Component>
  );
};

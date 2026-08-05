import type { ReactNode } from "react";

type DividerWithTextProps = {
  children: ReactNode;
  className?: string;
};

export const DividerWithText = ({
  children,
  className,
}: DividerWithTextProps) => {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <div className="h-px flex-1 bg-border" />
      <span className="text-[13px] text-text-secondary">{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
};

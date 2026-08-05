import type { ReactNode } from "react";

type NoticeProps = {
  children: ReactNode;
  className?: string;
};

export const Notice = ({ children, className }: NoticeProps) => {
  return (
    <div
      className={`rounded-[10px] border border-border bg-sand p-3.5 text-center text-[11.5px] leading-relaxed text-sand-text ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

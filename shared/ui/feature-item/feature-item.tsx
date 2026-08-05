import type { ReactNode } from "react";

type FeatureItemProps = {
  children: ReactNode;
  className?: string;
};

export const FeatureItem = ({ children, className }: FeatureItemProps) => {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#F3E9DE"
          strokeWidth="1.6"
          opacity="0.7"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#F3E9DE"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
      <span className="text-[13.5px] text-sand/75">{children}</span>
    </div>
  );
};

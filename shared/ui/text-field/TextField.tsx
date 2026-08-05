import type { InputHTMLAttributes, ReactNode } from "react";

import { Input } from "@/shared/ui/input/Input";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  endAdornment?: ReactNode;
};

export const TextField = ({
  label,
  endAdornment,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-text-primary">
        {label}
      </span>
      {endAdornment ? (
        <div className="relative flex items-center">
          <Input className={`pr-11.5 ${className ?? ""}`} {...props} />
          {endAdornment}
        </div>
      ) : (
        <Input className={className} {...props} />
      )}
    </label>
  );
};

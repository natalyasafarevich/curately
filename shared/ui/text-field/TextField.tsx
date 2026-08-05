import type { InputHTMLAttributes, ReactNode } from "react";

import { Input } from "@/shared/ui/input/Input";
import { ErrorMessage } from '../error-message/ErrorMessage'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  endAdornment?: ReactNode;
  error?: string;
};

export const TextField = ({
  label,
  endAdornment,
  error,
  className,
  ...props
}: TextFieldProps) => {
  const errorClassName = error && "border-red-600";
  return (
    <label className="flex flex-col gap-1.5 hover:cursor-pointer">
      <span className="text-[13px] font-medium text-text-primary">{label}</span>
      {endAdornment ? (
        <div className={"relative flex items-center "}>
          <Input
            className={`pr-11.5 hover:cursor-pointer ${className ?? ""}  ${errorClassName ?? ""}`}
            {...props}
          />
          {endAdornment}
        </div>
      ) : (
        <Input
          className={`hover:cursor-pointer ${className} ${errorClassName ?? ""}`}
          {...props}
        />
      )}
      {error && <ErrorMessage error={error} />}
    </label>
  );
};

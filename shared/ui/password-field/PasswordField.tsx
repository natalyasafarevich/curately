"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";

import { TextField } from "@/shared/ui/text-field/TextField";

type PasswordFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
};

const EyeOpenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const EyeClosedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M10.6 5.2A11 11 0 0 1 12 5c7 0 11 7 11 7a17.7 17.7 0 0 1-3.2 3.9M6.5 6.6C3.4 8.5 1 12 1 12s4 7 11 7c1.4 0 2.7-.25 3.9-.7"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9.5 10.5a3 3 0 0 0 4.2 4.2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

export const PasswordField = ({ label, ...props }: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      label={label}
      type={visible ? "text" : "password"}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3.5 flex items-center justify-center text-text-secondary"
        >
          {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      }
      {...props}
    />
  );
};

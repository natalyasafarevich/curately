"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/shared/ui/button/button";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { DividerWithText } from "@/shared/ui/divider-with-text/divider-with-text";
import { PasswordField } from "@/shared/ui/password-field/password-field";
import { TextField } from "@/shared/ui/text-field/text-field";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.94v2.33A9 9 0 0 0 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.17.29-1.7V4.97H.94A9 9 0 0 0 0 9c0 1.45.35 2.83.94 4.03l3.01-2.33z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .94 4.97l3.01 2.33C4.66 5.17 6.65 3.58 9 3.58z"
    />
  </svg>
);

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        <TextField
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          label="Password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="mt-1.5">
          Sign Up
        </Button>

        <DividerWithText>or</DividerWithText>

        <Button type="button" variant="secondary" icon={<GoogleIcon />}>
          Continue with Google
        </Button>

        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1"
          label={
            <>
              I agree to the{" "}
              <a href="#" className="text-terracotta no-underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-terracotta no-underline">
                Privacy Policy
              </a>
            </>
          }
        />
      </form>

      <p className="mt-5 text-center text-[13px] text-text-secondary">
        Already have an account?{" "}
        <a href="#" className="font-medium text-terracotta no-underline">
          Log in
        </a>
      </p>
    </>
  );
};

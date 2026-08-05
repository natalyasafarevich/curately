"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/shared/ui/button/Button";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { DividerWithText } from "@/shared/ui/divider-with-text/DividerWithText";
import { PasswordField } from "@/shared/ui/password-field/PasswordField";
import { TextField } from "@/shared/ui/text-field/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpScheme } from "@/shared/schemes/sign-up";
import { useSignUpForm } from "@/shared/hooks/auth/useSignUpForm";
import { ErrorMessage } from "@/shared/ui/error-message/ErrorMessage";

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
  const { handleSubmit, register, errors, value, onChange, isValid } =
    useSignUpForm();
  console.log(isValid);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        <TextField
          label="Name"
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
        />
        <TextField
          label="Email"
          placeholder="you@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
        <PasswordField
          label="Password"
          placeholder="Create a password"
          {...register("password")}
          error={errors.password?.message}
        />
        <PasswordField
          label="Password"
          placeholder="Create a password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Button type="submit" className="mt-1.5" disabled={!isValid}>
          Sign Up
        </Button>

        <DividerWithText>or</DividerWithText>

        <Button type="button" variant="secondary" icon={<GoogleIcon />}>
          Continue with Google
        </Button>

        <Checkbox
          {...register("agree")}
          onChange={onChange}
          checked={value}
          className="mt-1"
          label={
            <>
              I agree to the
              <a href="#" className="text-terracotta no-underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-terracotta no-underline ">
                Privacy Policy
              </a>
              <ErrorMessage error={errors.agree?.message ?? ""} />
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

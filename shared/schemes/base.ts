import z from "zod";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../lib/validation/consts";

export const name = z
  .string()
  .min(nameValidation.MIN_LENGTH, {
    message: `Name must be at least ${nameValidation.MIN_LENGTH} characters long`,
  })
  .max(nameValidation.MAX_LENGTH, {
    message: `Name must be at most ${nameValidation.MAX_LENGTH} characters long`,
  })
  .regex(nameValidation.REGEX, {
    message: nameValidation.ERROR_MESSAGES.PATTERN,
  })
  .default("");

export const email = z
  .string()
  .email({
    pattern: emailValidation.REGEX,
    message: emailValidation.ERROR_MESSAGES,
  })
  .min(1, "Email is required")
  .default("");

export const password = z
  .string()
  .min(passwordValidation.MIN_LENGTH, {
    message: `Minimum number of characters ${passwordValidation.MIN_LENGTH}`,
  })
  .max(passwordValidation.MAX_LENGTH, {
    message: `Maximum number of characters ${passwordValidation.MAX_LENGTH}`,
  })
  .regex(passwordValidation.REGEX, {
    message: passwordValidation.ERROR_MESSAGES.PATTERN,
  })
  .default("");

export const confirmPassword = z.string().default("");

export const agree = z.boolean().refine((val) => val === true, {
  message: "You must agree to the terms",
});

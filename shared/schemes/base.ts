import z from "zod";
import {
  emailValidation,
  usernameValidation,
  passwordValidation,
} from "../lib/validation/consts";

export const username = z
  .string()
  .min(usernameValidation.MIN_LENGTH, {
    message: `Username must be at least ${usernameValidation.MIN_LENGTH} characters long`,
  })
  .max(usernameValidation.MAX_LENGTH, {
    message: `Username must be at most ${usernameValidation.MAX_LENGTH} characters long`,
  })
  .regex(usernameValidation.REGEX, {
    message: usernameValidation.ERROR_MESSAGES.PATTERN,
  })
  .toLowerCase()
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

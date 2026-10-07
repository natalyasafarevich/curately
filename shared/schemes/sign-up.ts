import z from "zod";
import { username, email, password, agree, confirmPassword } from "./base";

export const signUpScheme = z
  .object({
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    agree: agree,
    root: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormSignUp = z.infer<typeof signUpScheme>;
export type FormSignUpKeys = keyof FormSignUp;

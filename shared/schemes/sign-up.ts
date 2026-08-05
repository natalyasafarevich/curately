import z from "zod";
import { name, email, password, agree, confirmPassword } from "./base";

export const signUpScheme = z
  .object({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    agree: agree,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormSignUp = z.infer<typeof signUpScheme>;

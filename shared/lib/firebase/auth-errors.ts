import { FormSignUpKeys } from "@/shared/schemes/sign-up";

type ErrorProps = {
  message: string;
  ref: FormSignUpKeys;
};
export function getFriendlyError(code: string): ErrorProps {
  switch (code) {
    case "username-already-in-use":  return { message: "This username is already registered", ref: "username" };
    case "auth/email-already-in-use":
      return { message: "This email is already registered", ref: "email" };
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return { message: "Invalid email or password", ref: "password" };
    case "auth/too-many-requests":
      return {
        message: "Too many attempts. Please try again later",
        ref: "root",
      };
    default:
      return {
        message: "Something went wrong. Please try again",
        ref: "root",
      };
  }
}

import { signUpScheme } from "@/shared/schemes/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { de } from "zod/locales";

export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpScheme),
    mode: "onSubmit",
  });

  const {
    field: { value, onChange },
  } = useController({
    name: "agree",
    control,
    defaultValue: false,
  });

  const onSubmit = (data: any) => {};

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    value,
    onChange,
  };
};

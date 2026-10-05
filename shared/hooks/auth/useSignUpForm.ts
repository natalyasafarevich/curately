import { FormSignUp, signUpScheme } from "@/shared/schemes/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/shared/lib/firebase/config";
import { getFriendlyError } from "@/shared/lib/firebase/auth-errors";
import { useUser } from "../user/useUser";
import { FirebaseError } from "firebase/app";

export const useSignUpForm = () => {
  const { createUser } = useUser();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpScheme),
    mode: "onChange",
  });

  const {
    field: { value, onChange },
  } = useController({
    name: "agree",
    control,
    defaultValue: false,
  });
  const auth = getAuth(app);

  const onSubmit = async (data: FormSignUp) => {
    const { email, password, name } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      createUser({
        name,
        username: "test",
      });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const { message, ref } = getFriendlyError(error.code);
        setError(ref, { message });
      }
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    value,
    onChange,
    isValid,
  };
};

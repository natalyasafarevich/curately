import { FormSignUp, signUpScheme } from "@/shared/schemes/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/shared/lib/firebase/config";
import { getFriendlyError } from "@/shared/lib/firebase/auth-errors";

import { FirebaseError } from "firebase/app";
import { useUserProfile } from "../user/useUserProfile";

export const useSignUpForm = () => {
  const { createProfile } = useUserProfile();
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
    const { email, password, username } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      createProfile(
        {
          username,
        },
        auth.currentUser!.uid,
      );
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

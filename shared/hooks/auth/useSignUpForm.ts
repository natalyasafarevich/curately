import { FormSignUp, signUpScheme } from "@/shared/schemes/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/shared/lib/firebase/config";
import { getFriendlyError } from "@/shared/lib/firebase/auth-errors";
export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpScheme),
    mode: "onTouched",
  });

  const {
    field: { value, onChange },
  } = useController({
    name: "agree",
    control,
    defaultValue: false,
  });
  const auth = getAuth(app);

  const onSubmit = (data: FormSignUp) => {
    console.log(data);
    const { email, password, name } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user);
        // ...
      })
      .catch((error) => {
        const { message, ref } = getFriendlyError(error.code);
        setError(ref, { message });
      });
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

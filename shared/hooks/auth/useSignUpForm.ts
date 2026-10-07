import { FormSignUp, signUpScheme } from "@/shared/schemes/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "@/shared/lib/firebase/config";
import { getFriendlyError } from "@/shared/lib/firebase/auth-errors";

import { FirebaseError } from "firebase/app";
import { useUserProfile } from "../user/useUserProfile";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { checkUsernameExists } from "@/shared/api/checkUsername";

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
    const cleanUsername = username.toLowerCase().trim();

    try {
      const isTaken = await checkUsernameExists(cleanUsername);

      if (isTaken) {
        const { message, ref } = getFriendlyError("username-already-in-use");
        setError(ref, { message });
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const newUid = userCredential.user.uid;

      await setDoc(doc(db, "usernames", cleanUsername), {
        uid: newUid,
        createdAt: serverTimestamp(),
      });

      await createProfile(
        {
          username: cleanUsername,
        },
        newUid,
      );
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(
          "Firebase Auth/Firestore Error:",
          error.code,
          error.message,
        );
        const { message, ref } = getFriendlyError(error.code);
      
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

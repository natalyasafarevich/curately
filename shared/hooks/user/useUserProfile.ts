import {
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "@/shared/lib/firebase/config";
import { User } from "@/shared/types/user";
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export function useUserProfile() {
  const [uid, setUid] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (firebaseUser) => {
      setUid(firebaseUser?.uid ?? null);
      setLoading(Boolean(firebaseUser));
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!uid) return;
    return onSnapshot(doc(db, "users", uid), (snap) => {
      setUser(snap.exists() ? (snap.data() as User) : null);
      setLoading(false);
    });
  }, [uid]);

  const createProfile = async (
    data: Omit<User["generaInfo"], "role">,
    uid: string,
  ) => {
    if (!uid) {
      throw new Error("No authenticated user");
    }

    await setDoc(doc(db, "users", uid), {
      ...data,
      role: "user",
      createdAt: serverTimestamp(),
    });
  };

  const updateProfile = useCallback(
    async (fields: Partial<User>) => {
      if (!uid) throw new Error("No authenticated user");
      await updateDoc(doc(db, "users", uid), fields);
    },
    [uid],
  );

  const deleteProfile = useCallback(async () => {
    if (!uid) throw new Error("No authenticated user");
    await deleteDoc(doc(db, "users", uid));
  }, [uid]);

  return { uid, user, loading, createProfile, updateProfile, deleteProfile };
}

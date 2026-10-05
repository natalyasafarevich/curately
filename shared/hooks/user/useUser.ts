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

export function useUser() {
  const [uid, setUid] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

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

  const createUser = useCallback(
    async (data: Omit<User["generaInfo"], "role">) => {
      if (!uid) throw new Error("No authenticated user");
      await setDoc(doc(db, "users", uid), {
        ...data,
        role: "user",
        createdAt: serverTimestamp(),
      });
    },
    [uid],
  );

  const updateUser = useCallback(
    async (fields: Partial<User>) => {
      if (!uid) throw new Error("No authenticated user");
      await updateDoc(doc(db, "users", uid), fields);
    },
    [uid],
  );

  const deleteUser = useCallback(async () => {
    if (!uid) throw new Error("No authenticated user");
    await deleteDoc(doc(db, "users", uid));
  }, [uid]);

  return { uid, user, loading, createUser, updateUser, deleteUser };
}

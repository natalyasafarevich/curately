import { doc, getDoc } from "firebase/firestore";
import { db } from "@/shared/lib/firebase/config";

export const checkUsernameExists = async (
  username: string,
): Promise<boolean> => {
  if (!username) return false;

  const cleanUsername = username.toLowerCase().trim();
  const usernameRef = doc(db, "usernames", cleanUsername);
  const usernameSnap = await getDoc(usernameRef);

  return usernameSnap.exists();
};

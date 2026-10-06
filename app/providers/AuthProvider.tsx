"use client";

import { useUserProfile } from "@/shared/hooks/user/useUserProfile";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { loading, uid } = useUserProfile();

  const pathname = usePathname();

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <p>Current pathname: {pathname}</p>

      {children}
    </>
  );
}

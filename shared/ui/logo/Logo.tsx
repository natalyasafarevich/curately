import Link from "next/link";
import { Text } from "../text/Text";

type Props = {
  variant?: "light" | "dark";
};
export const Logo = ({ variant = "dark" }: Props) => {
  const logoVariant = variant === "light" ? "text-white" : "text-black";
  return (
    <>
      <Text component={"a"} href="/" className="text-amber-600"></Text>
      <Link className={`${logoVariant} font-bold font-siz`} href={"/"}>
        Recommendation Club
      </Link>
    </>
  );
};

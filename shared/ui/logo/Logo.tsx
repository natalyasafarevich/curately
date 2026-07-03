import Link from "next/link";
import { Text } from "../text/Text";

type Props = {
  variant?: "light" | "dark";
};
export const Logo = ({ variant = "dark" }: Props) => {
  const logoVariant = variant === "light" ? "text-white" : "text-black";
  return (
    <>
      <Text
        component={"a"}
        href="/"
        variant="text"
        className={`${logoVariant} flex items-center w-max`}
      >
        <span className="uppercase rounded-lg font-bold mr-2.5 w-7.5 h-7.5 flex items-center justify-center bg-white text-brand-dark">
          rs
        </span>
        <span className="font-bold">Recommendation Club</span>
      </Text>
    </>
  );
};

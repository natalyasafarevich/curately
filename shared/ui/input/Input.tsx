import { ComponentPropsWithRef, useId } from "react";
type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;
export const Input = ({ label, ...props }: Props) => {
  const id = useId();
  return (
    <div className="">
      <label
        htmlFor={id}
        className="mb-1.5 block font-semibold text-l text-[#75736C]"
      >
        {label}
      </label>
      <div className="border border-[#E7E5E0] rounded-xl bg-[#F6F5F2]">
        <input
          id={id}
          className="p-3.5 w-full focus:outline-0 cursor-pointer"
          {...props}
        />
      </div>
    </div>
  );
};

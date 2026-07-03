import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";

export const Login = () => {
  return (
    <form className="w-full">
      <Input label="Email" type="text" placeholder="you@email.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
    </form>
  );
};

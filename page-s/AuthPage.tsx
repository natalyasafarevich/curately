import { Login } from "@/features/auth/login";
import { AuthSidebar } from "@/widgets/auth-sidebar";

export const AuthPage = () => {
  return (
    <div className="flex">
      <AuthSidebar className='w-1/3' />
      <Login />
    </div>
  );
};

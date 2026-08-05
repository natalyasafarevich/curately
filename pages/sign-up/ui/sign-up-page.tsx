import { SignUpForm } from "@/features/sign-up";
import { Logo } from "@/shared/ui/logo/logo";
import { Notice } from "@/shared/ui/notice/notice";
import { AuthHero } from "@/widgets/auth-hero";

export const SignUpPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-bg md:flex-row">
      <div className="flex flex-1 flex-col px-6 py-8 md:px-10 md:py-10 xl:pr-10 xl:pl-16">
        <Logo />

        <div className="flex flex-1 flex-col items-center justify-center py-10 md:py-0">
          <div className="w-full max-w-100">
            <h1 className="mb-2.5 text-[34px] leading-tight font-bold text-text-primary">
              Create your account
            </h1>
            <p className="mb-8 text-[15px] text-text-secondary">
              Your space to understand your body, at your pace.
            </p>

            <SignUpForm />

            <Notice className="mt-6">
              Your health data is private and encrypted. This app provides
              general guidance only and is not a substitute for professional
              medical advice.
            </Notice>
          </div>
        </div>
      </div>

      <AuthHero className="hidden md:flex md:flex-1" />
    </div>
  );
};

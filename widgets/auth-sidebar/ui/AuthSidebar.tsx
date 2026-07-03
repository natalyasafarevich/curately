import { Logo } from "@/shared/ui/logo/Logo";
import { Text } from "@/shared/ui/text/Text";

export const AuthSidebar = () => {
  return (
    <div className="bg-brand-dark p-7.5 text-white h-screen flex flex-col justify-between">
      <Logo variant="light" />
      <div>
        <Text variant="title" className="mb-3 mt-3">
          Recommendations you can trust.
        </Text>
        <Text className="mb-3 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          magnam dolore facilis. Cumque asperiores minus laborum tempora
          voluptas, veritatis harum sint amet similique commodi repudiandae quod
          ut!
        </Text>
      </div>
      <Text className="text-[#faf9f77f]">©2026 Recommendation Club</Text>
    </div>
  );
};

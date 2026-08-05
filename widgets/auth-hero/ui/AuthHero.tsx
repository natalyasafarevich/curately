import { FeatureItem } from "@/shared/ui/feature-item/FeatureItem";
import { MoonIllustration } from "@/shared/ui/moon-illustration/MoonIllustration";

type AuthHeroProps = {
  className?: string;
};

const features = [
  "Personalized phase tracking",
  "AI-powered nutrition & workouts",
  "Private & secure by design",
];

export const AuthHero = ({ className }: AuthHeroProps) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#1a5c47_0%,#0F4C3A_62%)] px-12 py-16 ${className ?? ""}`}
    >
      <div className="absolute top-14 left-14 flex items-center gap-2 rounded-full bg-sand/12 px-4 py-2">
        <span className="text-sm text-sand">☾</span>
        <span className="text-[13px] font-semibold tracking-wide text-sand">
          Luna Cycle
        </span>
      </div>

      <MoonIllustration className="absolute top-[14%]" />

      <div className="relative mt-55 max-w-85 text-center">
        <h2 className="mb-10 text-2xl leading-snug font-semibold text-bg">
          Your body has a rhythm.
          <br />
          We help you find it.
        </h2>

        <div className="flex flex-col items-start gap-4 text-left">
          {features.map((feature) => (
            <FeatureItem key={feature}>{feature}</FeatureItem>
          ))}
        </div>
      </div>
    </div>
  );
};

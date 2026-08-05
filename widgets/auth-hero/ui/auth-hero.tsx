import { FeatureItem } from "@/shared/ui/feature-item/feature-item";

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
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-(--color-emerald-deep)   px-12 py-16 ${className ?? ""}`}
    >
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

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export const Logo = ({ tone = "dark", className }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="relative block h-8.5 w-8.5 overflow-hidden rounded-full bg-sand">
        <span className="absolute -top-[10%] left-0 h-[120%] w-full animate-[moon-phase-cycle_16s_ease-in-out_infinite] rounded-full bg-emerald-deep" />
      </span>
      <span
        className={`text-base font-semibold ${tone === "dark" ? "text-emerald-deep" : "text-sand"}`}
      >
        Luna Cycle
      </span>
    </div>
  );
};

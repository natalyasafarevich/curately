type MoonIllustrationProps = {
  className?: string;
  maskId?: string;
};

export const MoonIllustration = ({
  className,
  maskId = "moon-crescent-mask",
}: MoonIllustrationProps) => {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" className={className}>
      <defs>
        <mask id={maskId}>
          <rect width="280" height="280" fill="black" />
          <circle cx="140" cy="140" r="62" fill="white" />
          <circle cx="164" cy="118" r="54" fill="black" />
        </mask>
      </defs>

      <circle
        cx="140"
        cy="120"
        r="88"
        fill="#C97B4A"
        opacity="0.18"
        className="origin-[140px_120px] animate-[float-a_9s_ease-in-out_infinite]"
      />
      <circle
        cx="175"
        cy="150"
        r="70"
        fill="#F3E9DE"
        opacity="0.14"
        className="origin-[175px_150px] animate-[float-b_11s_ease-in-out_infinite]"
      />
      <rect
        x="70"
        y="70"
        width="140"
        height="140"
        fill="#F3E9DE"
        opacity="0.92"
        mask={`url(#${maskId})`}
        className="origin-[140px_140px] animate-[crescent-drift_7s_ease-in-out_infinite] filter-[drop-shadow(0_0_24px_rgba(243,233,222,0.35))]"
      />
    </svg>
  );
};

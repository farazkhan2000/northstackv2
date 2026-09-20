type HeroFlowArtworkProps = {
  variant: "main" | "violet" | "orange";
};

export function HeroFlowArtwork({ variant }: HeroFlowArtworkProps) {
  if (variant === "violet") {
    return (
      <svg aria-hidden="true" viewBox="0 0 600 420" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-violet-flow" x1="90" y1="370" x2="505" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#F9D1E4" /><stop offset=".46" stopColor="#8E5BE4" /><stop offset="1" stopColor="#472CA7" /></linearGradient>
        </defs>
        <path d="M-45 344C86 335 144 279 177 190 208 105 282 57 367 66c99 11 150 92 228 86" stroke="#F4BDD9" strokeOpacity=".4" strokeWidth="90" />
        {Array.from({ length: 25 }, (_, index) => (
          <path key={index} d={`M${-50 + index * 8} 430 C${80 + index * 5} ${352 - index * 4} ${111 + index * 6} ${175 - index * 3} ${275 + index * 4} ${93 + index * 3} C${393 + index * 2} ${34 + index * 3} ${498 + index * 2} ${181 + index * 2} 650 ${89 + index * 5}`} stroke="url(#hero-violet-flow)" strokeOpacity={0.3 + index * 0.018} strokeWidth="3" />
        ))}
        <ellipse cx="343" cy="215" rx="103" ry="142" fill="#EFC9E8" fillOpacity=".14" />
      </svg>
    );
  }

  if (variant === "orange") {
    return (
      <svg aria-hidden="true" viewBox="0 0 600 420" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-orange-flow" x1="580" y1="0" x2="135" y2="370" gradientUnits="userSpaceOnUse"><stop stopColor="#FFDEA7" /><stop offset=".47" stopColor="#F48B72" /><stop offset="1" stopColor="#D05266" /></linearGradient>
        </defs>
        <path d="M604-60C490 44 482 140 568 201c88 64 79 138-7 234" stroke="#F9C191" strokeOpacity=".26" strokeWidth="128" />
        {Array.from({ length: 21 }, (_, index) => (
          <path key={index} d={`M${239 + index * 10} -60 C${129 + index * 13} ${32 + index * 2} ${224 + index * 12} ${122 + index * 3} ${380 + index * 8} ${170 + index * 2} C${562 + index * 3} ${228 + index * 3} ${584 + index * 5} ${304 + index * 3} ${452 + index * 6} 480`} stroke="url(#hero-orange-flow)" strokeOpacity={0.3 + index * 0.026} strokeWidth="5" />
        ))}
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 900 560" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-main-flow" x1="20" y1="110" x2="870" y2="415" gradientUnits="userSpaceOnUse"><stop stopColor="#1257F5" /><stop offset=".24" stopColor="#55C5F6" /><stop offset=".51" stopColor="#E9B4DF" /><stop offset=".73" stopColor="#EB78AA" /><stop offset="1" stopColor="#F4A363" /></linearGradient>
        <linearGradient id="hero-main-surface" x1="120" y1="100" x2="680" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#2960F2" /><stop offset=".35" stopColor="#83D8F1" /><stop offset=".65" stopColor="#E8A1D2" /><stop offset="1" stopColor="#F8AF72" /></linearGradient>
      </defs>
      <path d="M-80 348c147-61 219-168 356-172 132-5 181 139 298 128 100-9 175-126 342-184v123c-163 46-242 169-358 175-129 7-195-122-293-112-115 12-207 125-345 166V348Z" fill="url(#hero-main-surface)" fillOpacity=".85" />
      {Array.from({ length: 30 }, (_, index) => (
        <path key={index} d={`M-110 ${168 + index * 9} C${70 + index * 3} ${130 + index * 7} ${145 + index * 3} ${57 + index * 8} ${294 + index * 2} ${97 + index * 8} C${450 + index * 2} ${125 + index * 10} ${442 + index * 4} ${307 + index * 5} ${593 + index * 2} ${287 + index * 5} C${726 + index * 2} ${275 + index * 4} ${782 + index * 3} ${122 + index * 4} 1010 ${108 + index * 8}`} stroke="url(#hero-main-flow)" strokeOpacity={0.45 + index * 0.015} strokeWidth="4" />
      ))}
      <path d="M-60 453c147-24 207-151 353-144 115 6 175 137 300 122 131-15 190-131 332-139" stroke="#F8EEE8" strokeOpacity=".66" strokeWidth="2" />
    </svg>
  );
}

export function HeroOrb() {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 220" fill="none" className="h-full w-full">
      <defs>
        <radialGradient id="hero-orb-color" cx=".36" cy=".24" r=".86"><stop stopColor="#D6F7FF" /><stop offset=".26" stopColor="#68D2F1" /><stop offset=".55" stopColor="#4267F2" /><stop offset=".77" stopColor="#B659C8" /><stop offset="1" stopColor="#E990B6" /></radialGradient>
        <linearGradient id="hero-orb-fold" x1="35" y1="30" x2="176" y2="177" gradientUnits="userSpaceOnUse"><stop stopColor="#A6E9FC" stopOpacity=".9" /><stop offset=".5" stopColor="#6A8DF9" stopOpacity=".15" /><stop offset="1" stopColor="#EA9BC2" stopOpacity=".7" /></linearGradient>
      </defs>
      <circle cx="110" cy="110" r="99" fill="url(#hero-orb-color)" />
      <path d="M21 114c44-22 75-14 103 15 27 28 52 38 87 20M36 58c31 6 56 26 77 54 26 36 62 47 91 40M53 184c32-22 43-52 47-85 5-39 28-64 61-80" stroke="url(#hero-orb-fold)" strokeWidth="16" strokeOpacity=".64" />
      <g className="motion-safe:animate-[northstack-orb-shimmer_11s_ease-in-out_infinite] motion-reduce:animate-none">
        <circle cx="110" cy="110" r="98" fill="none" stroke="white" strokeOpacity=".56" strokeWidth="1.4" />
        <circle cx="110" cy="110" r="105" fill="none" stroke="white" strokeOpacity=".4" strokeWidth="1" />
        <circle cx="110" cy="110" r="109" fill="none" stroke="white" strokeOpacity=".25" strokeWidth=".8" />
      </g>
    </svg>
  );
}

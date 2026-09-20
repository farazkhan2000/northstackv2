import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 xl:px-12 2xl:px-16 ${className}`}>{children}</div>;
}

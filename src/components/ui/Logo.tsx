// src/components/ui/Logo.tsx
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTextFallback?: boolean;
}

const sizes = {
  sm: { width: 92, height: 92 },
  md: { width: 132, height: 132 },
  lg: { width: 180, height: 180 },
};

export function Logo({ size = "md", showTextFallback = true }: LogoProps) {
  const dimensions = sizes[size];

  return (
    <span className="inline-flex items-center gap-3" aria-label="CORVUS STUDIO">
      <Image
        src="/logo-corvus.png"
        alt="CORVUS STUDIO"
        width={dimensions.width}
        height={dimensions.height}
        priority={size !== "sm"}
        className="h-auto w-auto"
      />
      {showTextFallback ? (
        <span className="sr-only text-xs font-black uppercase tracking-[0.35em]">CORVUS STUDIO</span>
      ) : null}
    </span>
  );
}

// src/components/ui/ConstellationLines.tsx
interface ConstellationLinesProps {
  className?: string;
}

export function ConstellationLines({ className = "" }: ConstellationLinesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 420"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <path d="M86 314L142 76L391 112L426 314L86 314Z" stroke="var(--gold)" strokeWidth="3" opacity="0.82" />
      <path d="M142 76L426 314" stroke="var(--gold-soft)" strokeWidth="1.4" opacity="0.42" />
      {[ [86,314], [142,76], [391,112], [426,314], [250,255] ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="5" fill="var(--gold)" />
          <path d={`M${cx - 14} ${cy}H${cx + 14}M${cx} ${cy - 14}V${cy + 14}`} stroke="var(--gold)" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

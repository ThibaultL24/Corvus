// src/components/ui/CyanStarfield.tsx
import type { CSSProperties } from "react";

interface StarStyle extends CSSProperties {
  "--star-left": string;
  "--star-top": string;
  "--star-size": string;
  "--star-delay": string;
}

const stars = [
  [7, 14, 1, 0],
  [14, 42, 2, 1.8],
  [22, 18, 1, 3.2],
  [28, 72, 2, 0.9],
  [36, 34, 1, 2.4],
  [42, 84, 1, 4.1],
  [49, 12, 2, 1.1],
  [56, 58, 1, 3.6],
  [63, 25, 1, 2.1],
  [68, 78, 2, 0.4],
  [74, 44, 1, 4.7],
  [82, 16, 2, 2.9],
  [88, 66, 1, 1.5],
  [94, 36, 1, 3.9],
  [11, 86, 1, 5.2],
  [19, 62, 1, 2.7],
  [31, 9, 1, 4.4],
  [52, 39, 2, 0.2],
  [71, 7, 1, 3.4],
  [91, 91, 2, 1.3],
  [5, 55, 1, 4.8],
  [25, 49, 1, 1.6],
  [46, 68, 1, 5.5],
  [79, 53, 1, 2.3],
  [3, 28, 1, 1.2],
  [16, 7, 1, 4.9],
  [33, 57, 2, 2.8],
  [38, 22, 1, 0.7],
  [59, 91, 1, 3.1],
  [64, 11, 1, 5.7],
  [73, 71, 1, 0.8],
  [86, 27, 2, 4.3],
  [97, 74, 1, 2.6],
  [9, 96, 1, 3.8],
  [44, 3, 1, 1.9],
  [58, 47, 1, 4.6],
] as const;

function getStarStyle(left: number, top: number, size: number, delay: number): StarStyle {
  return {
    "--star-left": `${left}%`,
    "--star-top": `${top}%`,
    "--star-size": `${size}px`,
    "--star-delay": `${delay}s`,
  };
}

export function CyanStarfield() {
  return (
    <div className="cyan-starfield" aria-hidden="true">
      {stars.map(([left, top, size, delay]) => (
        <span
          key={`${left}-${top}`}
          className="cyan-star"
          style={getStarStyle(left, top, size, delay)}
        />
      ))}
    </div>
  );
}

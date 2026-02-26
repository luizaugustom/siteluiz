"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * SVG paths that look like circuit traces (right angles, grid-like).
 * Animated with flowing dashes and subtle random drift.
 */
const circuitPaths = [
  "M 0 120 L 200 120 L 200 320 L 400 320 L 400 160 L 600 160",
  "M 500 0 L 500 200 L 700 200 L 700 400 L 900 400",
  "M 200 500 L 400 500 L 400 700 L 600 700 L 600 550",
  "M 800 200 L 1000 200 L 1000 500 L 1150 500",
];

const driftAnimations = [
  "circuit-drift-1 8s ease-in-out infinite",
  "circuit-drift-2 10s ease-in-out infinite",
  "circuit-drift-3 12s ease-in-out infinite",
  "circuit-drift-1 9s ease-in-out infinite",
];

export function CircuitBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--accent)" }}
      >
        {circuitPaths.map((d, i) => (
          <g
            key={i}
            style={
              reducedMotion
                ? undefined
                : {
                    animation: driftAnimations[i % driftAnimations.length],
                    transformOrigin: "center",
                  }
            }
          >
            <path
              d={d}
              strokeDasharray="8 12"
              style={
                reducedMotion
                  ? undefined
                  : {
                      animation: `circuit-flow 2.5s linear infinite`,
                      animationDelay: `${i * 0.4}s`,
                      animationDirection: i % 2 === 0 ? "normal" : "reverse",
                    }
              }
            />
          </g>
        ))}
      </svg>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--accent)" }}
      >
        {[
          "M 300 300 L 500 300 L 500 500 L 300 500",
          "M 700 150 L 950 150 L 950 400 L 1100 400",
        ].map((d, i) => (
          <g
            key={i}
            style={
              reducedMotion
                ? undefined
                : {
                    animation: `circuit-drift-${(i % 3) + 1} ${9 + i * 0.5}s ease-in-out infinite`,
                    transformOrigin: "center",
                  }
            }
          >
            <path
              d={d}
              strokeDasharray="6 14"
              style={
                reducedMotion
                  ? undefined
                  : {
                      animation: "circuit-flow 3.5s linear infinite",
                      animationDelay: `${i * 0.7}s`,
                      animationDirection: i % 2 === 1 ? "normal" : "reverse",
                    }
              }
            />
          </g>
        ))}
      </svg>
      {/* Rocket trail: zigzag line going up, dash appears every 7s */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient
            id="rocketGradient"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Zigzag path: bottom center → alternating left/right up to top */}
        <path
          id="rocketZigzag"
          d="M 600 800 L 450 700 L 600 600 L 450 500 L 600 400 L 450 300 L 600 200 L 450 100 L 600 0"
          fill="none"
        />
        {/* Full zigzag line - always visible */}
        <use
          href="#rocketZigzag"
          stroke="url(#rocketGradient)"
          strokeWidth="3"
          className="opacity-3"
        />
        {/* Animated dash: one pass every 7 seconds */}
        <use
          href="#rocketZigzag"
          stroke="#60a5fa"
          strokeWidth="4"
          strokeDasharray="140 2200"
          className="opacity-65"
          style={
            reducedMotion
              ? undefined
              : {
                  animation: "rocket-trail-rise 7s linear infinite",
                }
          }
        />
      </svg>
    </div>
  );
}

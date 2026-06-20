import type { Config } from "tailwindcss";

/**
 * Tokens neutros y brandables. Para re-tematizar un proyecto, cambiá:
 *   - accent.DEFAULT / soft / deep  → color de marca
 *   - base / surface / elevated     → fondos (claro u oscuro)
 * Los nombres de clase se mantienen iguales a IEO para pegar componentes sin fricción.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0b0f17",
        surface: "#111726",
        elevated: "#161d2e",
        line: "rgba(255,255,255,0.08)",
        ink: "#eef1f8",
        muted: "#94a0b8",
        accent: {
          DEFAULT: "#6366f1",
          soft: "#818cf8",
          deep: "#4338ca",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.55)",
        glow: "0 0 0 1px rgba(99,102,241,0.30), 0 12px 40px -10px rgba(99,102,241,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;

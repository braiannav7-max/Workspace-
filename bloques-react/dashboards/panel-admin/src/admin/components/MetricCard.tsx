import type { AdminIcon } from "../types";

const COLORS: Record<string, string> = {
  sky: "text-sky-400 bg-sky-500/10",
  emerald: "text-emerald-400 bg-emerald-500/10",
  accent: "text-accent bg-accent/10",
  violet: "text-violet-400 bg-violet-500/10",
  amber: "text-amber-400 bg-amber-500/10",
  red: "text-red-400 bg-red-500/10",
};

export function MetricCard({
  icon: Icon,
  color = "accent",
  label,
  value,
  loading,
  onClick,
}: {
  icon: AdminIcon;
  color?: keyof typeof COLORS;
  label: string;
  value?: number | string;
  loading?: boolean;
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      onClick={onClick}
      className={`card flex items-center gap-4 p-4 text-left ${
        onClick ? "transition-colors hover:border-accent/40" : ""
      }`}
    >
      <span className={`grid h-11 w-11 place-items-center rounded-xl ${COLORS[color]}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-2xl font-bold text-ink">
          {loading ? "…" : (value ?? "—")}
        </div>
        <div className="text-xs text-muted">{label}</div>
      </div>
    </Tag>
  );
}

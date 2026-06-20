import { ResourceManager } from "../components/ResourceManager";
import type { ResourceColumn } from "../types";

interface LogEntry {
  id: number;
  level: "info" | "warn" | "error";
  message: string;
  at: string;
}

const SEED: LogEntry[] = [
  { id: 1, level: "info", message: "Usuario ana@example.com inició sesión", at: "2026-06-20 09:12" },
  { id: 2, level: "warn", message: "Rate limit cercano en /api/export", at: "2026-06-20 08:40" },
  { id: 3, level: "error", message: "Fallo de pago Stripe (tarjeta rechazada)", at: "2026-06-20 07:55" },
];

const LEVEL_CLS: Record<LogEntry["level"], string> = {
  info: "text-sky-400",
  warn: "text-amber-400",
  error: "text-red-400",
};

export function LogsSection() {
  const columns: ResourceColumn<LogEntry>[] = [
    {
      key: "level",
      label: "Nivel",
      render: (r) => <span className={`font-medium uppercase ${LEVEL_CLS[r.level]}`}>{r.level}</span>,
    },
    { key: "message", label: "Mensaje" },
    { key: "at", label: "Fecha", render: (r) => <span className="text-muted">{r.at}</span> },
  ];

  return (
    <ResourceManager
      title="Logs del sistema"
      description="Eventos recientes. Solo lectura."
      columns={columns}
      rows={SEED}
    />
  );
}

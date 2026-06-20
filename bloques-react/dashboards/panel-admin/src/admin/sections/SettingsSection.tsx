import { supabase } from "@/lib/supabase";

/** Ajustes / configuración. Muestra el estado real de las integraciones. */
export function SettingsSection() {
  const rows = [
    { label: "Supabase", ok: !!supabase, hint: "VITE_SUPABASE_URL + VITE_SUPABASE_PUBLISHABLE_KEY" },
    { label: "Código de admin", ok: !!import.meta.env.VITE_ADMIN_CODE, hint: "VITE_ADMIN_CODE" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Configuración</h2>
        <p className="mt-1 text-sm text-muted">Estado de las integraciones del panel.</p>
      </div>

      <div className="card divide-y divide-line">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 px-4 py-4">
            <div>
              <div className="font-medium text-ink">{r.label}</div>
              <code className="text-xs text-muted">{r.hint}</code>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                r.ok ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {r.ok ? "Configurado" : "Falta configurar"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

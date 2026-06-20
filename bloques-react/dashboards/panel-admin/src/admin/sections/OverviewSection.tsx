import { Users, UserCheck, TrendingUp, Activity, AlertCircle, CreditCard } from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { StatusBar } from "../components/StatusBar";
import { supabase } from "@/lib/supabase";

/**
 * Resumen / dashboard. Con Supabase conectado, reemplazá los valores demo por una
 * consulta real (ver comentario). En modo local muestra datos de ejemplo.
 */
export function OverviewSection({ navigate }: { navigate: (id: string) => void }) {
  const connected = !!supabase;

  // Demo. Con backend: const metrics = await adminGetMetrics();
  const demo = {
    total_users: connected ? "—" : 1280,
    active_7d: connected ? "—" : 342,
    new_7d: connected ? "—" : 87,
    revenue: connected ? "—" : "$4.2k",
    errors_24h: connected ? "—" : 3,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Resumen</h2>
        <p className="mt-1 text-sm text-muted">Vista general del estado del sistema.</p>
      </div>

      <StatusBar />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard icon={Users} color="sky" label="Usuarios totales" value={demo.total_users} onClick={() => navigate("users")} />
        <MetricCard icon={UserCheck} color="emerald" label="Activos (7 días)" value={demo.active_7d} onClick={() => navigate("users")} />
        <MetricCard icon={TrendingUp} color="accent" label="Nuevos (7 días)" value={demo.new_7d} onClick={() => navigate("users")} />
        <MetricCard icon={CreditCard} color="violet" label="Ingresos (mes)" value={demo.revenue} />
        <MetricCard icon={AlertCircle} color="red" label="Errores (24hs)" value={demo.errors_24h} onClick={() => navigate("logs")} />
        <MetricCard icon={Activity} color="amber" label="Estado" value={connected ? "Online" : "Local"} onClick={() => navigate("settings")} />
      </div>
    </div>
  );
}

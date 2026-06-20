import { supabase } from "@/lib/supabase";

/** Indica si el backend (Supabase) está conectado. Honesto: nada finge funcionar. */
export function StatusBar() {
  const connected = !!supabase;
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
        connected
          ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-300"
          : "border-yellow-500/30 bg-yellow-500/5 text-yellow-300"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${connected ? "bg-emerald-400" : "bg-yellow-400"}`} />
      {connected
        ? "Supabase conectado — gestión dinámica activa"
        : "Supabase no conectado — modo local (datos de ejemplo)"}
    </div>
  );
}

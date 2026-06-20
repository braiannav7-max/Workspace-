import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Cliente opcional: si faltan las env vars, queda `null` y el panel corre en
// "modo local" (sin backend). Patrón heredado de IEO — nada queda a medio enchufar.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key) : null;

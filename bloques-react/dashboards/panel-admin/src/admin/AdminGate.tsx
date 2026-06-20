import { useState } from "react";
import { Lock } from "lucide-react";

const ADMIN_CODE = import.meta.env.VITE_ADMIN_CODE ?? "";
const STORAGE_KEY = "panel_admin_ok";

/** ¿Ya está desbloqueada la sesión? (sessionStorage = dura hasta cerrar pestaña) */
export function isUnlocked(): boolean {
  return typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1";
}

/**
 * Gate por código de acceso. Heredado de IEO.
 * Nota de seguridad: es protección de UI, no de datos. La seguridad real va en
 * las policies de Supabase / backend. Sirve para ocultar el panel, no para
 * proteger secretos en el cliente.
 */
export function AdminGate({ title, onOk }: { title: string; onOk: () => void }) {
  const [code, setCode] = useState("");
  const [err, setErr] = useState(false);

  const submit = () => {
    // ADMIN_CODE && ... evita que un código vacío abra el panel con el campo en blanco.
    if (ADMIN_CODE && code.trim() === ADMIN_CODE) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      onOk();
    } else {
      setErr(true);
    }
  };

  return (
    <div className="container-x flex min-h-screen items-center justify-center py-10">
      <div className="card w-full max-w-sm p-7 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-soft to-accent-deep text-white shadow-glow">
          <Lock className="h-6 w-6" />
        </span>
        <h1 className="mt-4 font-display text-xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-muted">Ingresá el código de acceso.</p>
        {!ADMIN_CODE && (
          <p className="mt-3 rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-3 py-2 text-xs text-yellow-300">
            Falta definir <code>VITE_ADMIN_CODE</code> en tu <code>.env</code>.
          </p>
        )}
        <input
          type="password"
          value={code}
          autoFocus
          onChange={(e) => {
            setCode(e.target.value);
            setErr(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Código de acceso"
          className={`input mt-5 text-center ${err ? "border-red-500/60" : ""}`}
        />
        {err && <p className="mt-2 text-xs text-red-400">Código incorrecto.</p>}
        <button onClick={submit} className="btn-accent mt-4 w-full">
          Entrar
        </button>
      </div>
    </div>
  );
}

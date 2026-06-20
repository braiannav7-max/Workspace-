import { useState } from "react";
import { ResourceManager } from "../components/ResourceManager";
import type { ResourceColumn } from "../types";

interface User {
  id: number;
  name: string;
  email: string;
  plan: "Free" | "Pro";
  status: "Activo" | "Inactivo";
}

const SEED: User[] = [
  { id: 1, name: "Ana García", email: "ana@example.com", plan: "Pro", status: "Activo" },
  { id: 2, name: "Luis Pérez", email: "luis@example.com", plan: "Free", status: "Activo" },
  { id: 3, name: "Marta Ruiz", email: "marta@example.com", plan: "Free", status: "Inactivo" },
];

/** Ejemplo de uso de ResourceManager. Reemplazá SEED por datos de Supabase. */
export function UsersSection() {
  const [rows, setRows] = useState<User[]>(SEED);

  const columns: ResourceColumn<User>[] = [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
    {
      key: "plan",
      label: "Plan",
      render: (r) => (
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            r.plan === "Pro" ? "bg-accent/15 text-accent" : "bg-white/10 text-muted"
          }`}
        >
          {r.plan}
        </span>
      ),
    },
    {
      key: "status",
      label: "Estado",
      render: (r) => (
        <span className={r.status === "Activo" ? "text-emerald-400" : "text-muted"}>
          {r.status}
        </span>
      ),
    },
  ];

  return (
    <ResourceManager
      title="Usuarios"
      description="Gestión de cuentas. Ejemplo con datos locales — conectá Supabase para datos reales."
      columns={columns}
      rows={rows}
      onCreate={() => alert("Abrir formulario de alta")}
      onEdit={(r) => alert(`Editar ${r.name}`)}
      onDelete={(r) => setRows((prev) => prev.filter((x) => x.id !== r.id))}
    />
  );
}

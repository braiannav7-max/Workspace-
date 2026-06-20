import { useState } from "react";
import { AdminGate, isUnlocked } from "./AdminGate";
import { Sidebar } from "./components/Sidebar";
import type { AdminSection } from "./types";

/**
 * Shell del panel de administración, config-driven.
 * Le pasás `sections` y resuelve: gate de acceso, layout sidebar/contenido,
 * y estado de la sección activa. Agregar un módulo = agregar un item a `sections`.
 */
export function AdminPanel({
  title = "Panel de administración",
  sections,
}: {
  title?: string;
  sections: AdminSection[];
}) {
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  if (!unlocked) return <AdminGate title={title} onOk={() => setUnlocked(true)} />;

  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar title={title} sections={sections} activeId={active?.id ?? ""} onSelect={setActiveId} />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl">
          {active?.render({ navigate: setActiveId })}
        </div>
      </main>
    </div>
  );
}

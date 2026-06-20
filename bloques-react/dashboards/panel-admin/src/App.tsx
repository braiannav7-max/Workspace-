import { LayoutDashboard, Users, Activity, Settings } from "lucide-react";
import { AdminPanel } from "./admin/AdminPanel";
import type { AdminSection } from "./admin/types";
import { OverviewSection } from "./admin/sections/OverviewSection";
import { UsersSection } from "./admin/sections/UsersSection";
import { LogsSection } from "./admin/sections/LogsSection";
import { SettingsSection } from "./admin/sections/SettingsSection";

/**
 * Ejemplo de consumo del módulo. Para usarlo en tu proyecto:
 *   1. Copiá `src/admin` (lo hace install.sh).
 *   2. Definí tus secciones acá.
 *   3. Renderizá <AdminPanel sections={...} />.
 * Agregar un módulo al panel = agregar un item a este array.
 */
const sections: AdminSection[] = [
  { id: "overview", label: "Resumen", icon: LayoutDashboard, render: ({ navigate }) => <OverviewSection navigate={navigate} /> },
  { id: "users", label: "Usuarios", icon: Users, render: () => <UsersSection /> },
  { id: "logs", label: "Logs", icon: Activity, render: () => <LogsSection /> },
  { id: "settings", label: "Configuración", icon: Settings, render: () => <SettingsSection /> },
];

export default function App() {
  return <AdminPanel title="Mi Panel" sections={sections} />;
}

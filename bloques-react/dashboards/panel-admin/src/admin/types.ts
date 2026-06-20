import type { ComponentType, ReactNode } from "react";

/** Icono compatible con lucide-react (recibe className). */
export type AdminIcon = ComponentType<{ className?: string }>;

/**
 * Una sección del panel. Agregar un módulo al admin = agregar un item a este array.
 * `render` recibe un navigate para saltar a otra sección (ej. desde una métrica).
 */
export interface AdminSection {
  id: string;
  label: string;
  icon: AdminIcon;
  render: (ctx: { navigate: (id: string) => void }) => ReactNode;
}

/** Columna genérica para ResourceManager. */
export interface ResourceColumn<T> {
  key: keyof T & string;
  label: string;
  render?: (row: T) => ReactNode;
}

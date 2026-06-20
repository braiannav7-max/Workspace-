import { Pencil, Trash2, Plus } from "lucide-react";
import type { ResourceColumn } from "../types";

/**
 * Tabla CRUD genérica reutilizable. No conoce ninguna entidad concreta: le pasás
 * columnas + filas + handlers opcionales. Sin onCreate/onEdit/onDelete → solo lectura.
 */
export function ResourceManager<T extends { id: string | number }>({
  title,
  description,
  columns,
  rows,
  onCreate,
  onEdit,
  onDelete,
}: {
  title: string;
  description?: string;
  columns: ResourceColumn<T>[];
  rows: T[];
  onCreate?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}) {
  const hasActions = !!onEdit || !!onDelete;
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold">{title}</h2>
          {description && <p className="mt-1 text-sm text-muted">{description}</p>}
        </div>
        {onCreate && (
          <button onClick={onCreate} className="btn-accent inline-flex items-center gap-2">
            <Plus className="h-4 w-4" /> Nuevo
          </button>
        )}
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-muted">
              {columns.map((c) => (
                <th key={c.key} className="px-4 py-3 font-medium">
                  {c.label}
                </th>
              ))}
              {hasActions && <th className="px-4 py-3 font-medium text-right">Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="px-4 py-8 text-center text-muted"
                >
                  Sin registros.
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={String(row.id)} className="border-b border-line/60 last:border-0 hover:bg-white/5">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-ink">
                    {c.render ? c.render(row) : String(row[c.key] ?? "—")}
                  </td>
                ))}
                {hasActions && (
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-ink"
                          aria-label="Editar"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className="rounded-lg p-2 text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                          aria-label="Eliminar"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

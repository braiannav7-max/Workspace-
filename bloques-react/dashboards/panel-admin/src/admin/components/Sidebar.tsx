import type { AdminSection } from "../types";

function SidebarBtn({
  item,
  active,
  onClick,
}: {
  item: AdminSection;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
        active
          ? "bg-accent/15 text-ink shadow-sm"
          : "text-muted hover:bg-white/5 hover:text-ink"
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${active ? "text-accent" : ""}`} />
      {item.label}
    </button>
  );
}

export function Sidebar({
  title,
  sections,
  activeId,
  onSelect,
}: {
  title: string;
  sections: AdminSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-1 border-line lg:h-screen lg:w-64 lg:border-r lg:p-4">
      <div className="mb-2 px-3 py-2">
        <span className="font-display text-lg font-bold">{title}</span>
      </div>
      <nav className="flex flex-col gap-1 overflow-x-auto lg:overflow-visible">
        {sections.map((s) => (
          <SidebarBtn
            key={s.id}
            item={s}
            active={s.id === activeId}
            onClick={() => onSelect(s.id)}
          />
        ))}
      </nav>
    </aside>
  );
}

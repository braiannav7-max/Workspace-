"use client";

import { useState } from "react";

/**
 * Navbar — versión React del bloque navbar-mobile.
 * Fuente del patrón: HyperUI (MIT). Portado a React + Tailwind.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Características", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Clientes", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-content-center rounded-lg bg-indigo-600 text-white">
            N
          </span>
          Nimbus
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-slate-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contacto" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Ingresar
          </a>
          <a
            href="#contacto"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Empezar gratis
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="space-y-1 px-6 py-4 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block rounded-lg px-3 py-2 transition hover:bg-slate-100">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contacto" className="block rounded-lg bg-indigo-600 px-3 py-2 text-center font-semibold text-white">
                Empezar gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

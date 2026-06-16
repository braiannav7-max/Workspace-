/**
 * Hero — versión React del bloque hero-split.
 * Fuente del patrón: HyperUI (MIT). Portado a React + Tailwind.
 */
export function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Nuevo · 2026
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            La plataforma que ordena el caos de tu equipo
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Nimbus reúne tareas, clientes y métricas en un solo lugar. Menos
            herramientas, más resultados. Empezá en minutos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Empezar gratis
            </a>
            <a
              href="#features"
              className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Ver características
            </a>
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://placehold.co/600x500/e0e7ff/4f46e5?text=Nimbus+App"
            alt="Captura de Nimbus"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

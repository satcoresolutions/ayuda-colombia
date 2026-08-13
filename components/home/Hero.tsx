import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            <span>🆘</span>
            <span>Recursos para situaciones de emergencia</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Encuentra lo que necesitas{" "}
            <span className="text-red-600">cuando más importa.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Consulta elementos esenciales para una emergencia, descubre qué es
            prioritario y encuentra dónde conseguirlos según tu ubicación en
            Colombia.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#categorias"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Ver recursos
            </Link>

            <Link
              href="#ubicacion"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              📍 Buscar por ubicación
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-slate-200 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="px-4 py-5 text-center">
            <p className="text-sm font-semibold text-slate-950">
              Recursos esenciales
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Organizados por necesidad
            </p>
          </div>

          <div className="px-4 py-5 text-center">
            <p className="text-sm font-semibold text-slate-950">
              Prioridades claras
            </p>
            <p className="mt-1 text-xs text-slate-500">
              De crítico a complementario
            </p>
          </div>

          <div className="px-4 py-5 text-center">
            <p className="text-sm font-semibold text-slate-950">
              Información territorial
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Busca dónde conseguirlos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import ListaCentrosAcopio from "@/components/ListaCentrosAcopio";
import { getCentrosAcopio } from "@/lib/index";

export default function UbicacionesPage() {
  const centros = getCentrosAcopio();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Encabezado */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              <span>📍</span>
              <span>Puntos de ayuda</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Centros de acopio
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Encuentra lugares donde puedes entregar donaciones y contribuir
              con las comunidades afectadas por la emergencia.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                {centros.length} puntos registrados
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Información territorial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-950">
            Puntos disponibles
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Consulta la información de cada centro antes de desplazarte.
          </p>
        </div>

        <ListaCentrosAcopio centros={centros} />

        {/* Aviso */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <span className="text-lg">⚠️</span>

            <div>
              <h3 className="text-sm font-semibold text-amber-900">
                Verifica la información antes de desplazarte
              </h3>

              <p className="mt-1 text-sm leading-6 text-amber-800">
                Los centros de acopio pueden cambiar sus horarios, capacidad
                de recepción o necesidades durante la emergencia. Comprueba
                la información disponible antes de llevar una donación.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
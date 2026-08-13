import Link from "next/link";
import EmergencyMapClient from "./EmergencyMapClient";

export default function TerritorySection() {
  return (
    <section
      id="ubicacion"
      className="bg-slate-950 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
            📍 Situación territorial
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Zonas de atención y seguimiento
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Consulta en el mapa las zonas que forman parte del
            seguimiento de la emergencia y utiliza el mapa para
            identificar los principales puntos de referencia.
          </p>
        </div>

        <EmergencyMapClient />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              Epicentro / punto principal
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-red-400 bg-red-500/30" />
              Zona de seguimiento
            </div>
          </div>

          <Link
            href="/ubicaciones"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Abrir mapa completo →
          </Link>
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Los puntos mostrados deben mantenerse vinculados a fuentes
          oficiales o a reportes verificables. La visualización es
          informativa y no sustituye las instrucciones de las autoridades.
        </p>
      </div>
    </section>
  );
}
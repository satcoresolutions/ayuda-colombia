import { notFound } from "next/navigation";
import FiltroTerritorio from "@/components/FiltroTerritorio";
import ListaItems from "@/components/ListaItems";
import ListaOrganizaciones from "@/components/ListaOrganizaciones";
import ListaVoluntariado from "@/components/ListaVoluntariado";

import {
  getCategoriaPorSlug,
  filtrarPorTerritorio,
  getTerritorios,
  getOrganizaciones,
  getVoluntariado,
  ordenarPorPrioridad,
} from "@/lib/index";

// Categorías con una estructura de datos especial.
const CATEGORIAS_ESPECIALES: Record<string, () => React.ReactNode> = {
  "organizaciones-ong": () => (
    <ListaOrganizaciones organizaciones={getOrganizaciones()} />
  ),

  voluntariado: () => (
    <ListaVoluntariado puntos={getVoluntariado()} />
  ),
};

export default async function CategoriaPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ territorio?: string }>;
}) {
  const { slug } = await params;
  const { territorio } = await searchParams;

  const categoria = getCategoriaPorSlug(slug);

  if (!categoria) notFound();

  const renderEspecial = CATEGORIAS_ESPECIALES[slug];
  const territorios = getTerritorios();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Encabezado */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
              Recursos de emergencia
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {categoria.nombre}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {categoria.descripcion}
            </p>
          </div>

          {/* Filtro */}
          {!renderEspecial && (
            <div className="mx-auto mt-8 flex max-w-md justify-center">
              <FiltroTerritorio territorios={territorios} />
            </div>
          )}
        </div>
      </section>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        {renderEspecial ? (
          renderEspecial()
        ) : (
          <ListaItems
            items={ordenarPorPrioridad(
              filtrarPorTerritorio(categoria, territorio)
            )}
          />
        )}
      </main>
    </div>
  );
}
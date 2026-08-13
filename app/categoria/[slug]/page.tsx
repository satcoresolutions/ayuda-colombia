import { notFound } from "next/navigation";
import FiltroTerritorio from "@/components/FiltroTerritorio";
import ListaItems from "@/components/ListaItems";
import ListaOrganizaciones from "@/components/ListaOrganizaciones";
import {
  getCategoriaPorSlug,
  filtrarPorTerritorio,
  getTerritorios,
  getOrganizaciones,
  ordenarPorPrioridad,
} from "@/lib/index";

const CATEGORIA_ORGANIZACIONES = "organizaciones-ong";

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

  const esOrganizaciones = slug === CATEGORIA_ORGANIZACIONES;
  const territorios = getTerritorios();

  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">{categoria.nombre}</h2>
          <p className="text-sm text-gray-500">{categoria.descripcion}</p>
        </div>
        {!esOrganizaciones && <FiltroTerritorio territorios={territorios} />}
      </div>

      {esOrganizaciones ? (
        <ListaOrganizaciones organizaciones={getOrganizaciones()} />
      ) : (
        <ListaItems
          items={ordenarPorPrioridad(filtrarPorTerritorio(categoria, territorio))}
        />
      )}
    </div>
  );
}
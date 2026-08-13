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

// Registro de categorías con forma de datos "especial" (no son Item[]).
// Para agregar una categoría nueva de este tipo:
// 1. Crea su tipo en lib/data/types.ts
// 2. Crea su loader get<Nombre>() en lib/data/<nombre>.ts
// 3. Crea su componente Lista<Nombre>.tsx
// 4. Agrega UNA línea aquí abajo. No toques el resto de este archivo.
const CATEGORIAS_ESPECIALES: Record<string, () => React.ReactNode> = {
  "organizaciones-ong": () => (
    <ListaOrganizaciones organizaciones={getOrganizaciones()} />
  ),
  voluntariado: () => <ListaVoluntariado puntos={getVoluntariado()} />,
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
    <div>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">{categoria.nombre}</h2>
          <p className="text-sm text-gray-500">{categoria.descripcion}</p>
        </div>
        {!renderEspecial && <FiltroTerritorio territorios={territorios} />}
      </div>

      {renderEspecial ? (
        renderEspecial()
      ) : (
        <ListaItems
          items={ordenarPorPrioridad(filtrarPorTerritorio(categoria, territorio))}
        />
      )}
    </div>
  );
}

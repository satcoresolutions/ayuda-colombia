import { leerJson } from "./_fs-helpers";
import type { Categoria, CategoriaMeta, Item, Prioridad } from "./types";

function leerIndice(): CategoriaMeta[] {
  return leerJson<CategoriaMeta[]>("categorias/index.json", []);
}

function leerItems(id: string): Item[] {
  return leerJson<Item[]>(`categorias/${id}.json`, []);
}

export function getCategorias(): Categoria[] {
  return leerIndice().map((meta) => ({
    ...meta,
    items: leerItems(meta.id),
  }));
}

export function getCategoriaPorSlug(slug: string): Categoria | undefined {
  const meta = leerIndice().find((c) => c.id === slug);
  if (!meta) return undefined;
  return { ...meta, items: leerItems(slug) };
}

export function filtrarPorTerritorio(
  categoria: Categoria,
  territorioId?: string
): Item[] {
  if (!territorioId || territorioId === "nacional") {
    return categoria.items;
  }
  return categoria.items
    .map((item) => ({
      ...item,
      proveedores: item.proveedores.filter(
        (p) =>
          p.departamentosCobertura.includes(territorioId) ||
          p.departamentosCobertura.includes("nacional")
      ),
    }))
    .filter((item) => item.proveedores.length > 0);
}

export function ordenarPorPrioridad(items: Item[]): Item[] {
  const peso: Record<Prioridad, number> = { alta: 0, media: 1, baja: 2 };
  return [...items].sort((a, b) => peso[a.prioridad] - peso[b.prioridad]);
}
"use client";

import { useState } from "react";
import CategoriaCard from "@/components/CategoriaCard";
import { GRUPOS } from "@/lib/grupos";
import type { Categoria } from "@/lib/index";

export default function CategoriasFiltradas({
  categorias,
}: {
  categorias: Categoria[];
}) {
  const [grupoActivo, setGrupoActivo] = useState<string>("todos");

  const categoriasFiltradas =
    grupoActivo === "todos"
      ? categorias
      : categorias.filter((c) => c.grupo === grupoActivo);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setGrupoActivo("todos")}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            grupoActivo === "todos"
              ? "border-red-600 bg-red-600 text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
          }`}
        >
          Todas
        </button>

        {GRUPOS.map((grupo) => (
          <button
            key={grupo.id}
            type="button"
            onClick={() => setGrupoActivo(grupo.id)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              grupoActivo === grupo.id
                ? "border-red-600 bg-red-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            {grupo.nombre}
          </button>
        ))}
      </div>

      {categoriasFiltradas.length === 0 ? (
        <p className="text-sm text-slate-500">
          No hay categorías en este grupo todavía.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categoriasFiltradas.map((c) => (
            <CategoriaCard key={c.id} categoria={c} />
          ))}
        </div>
      )}
    </div>
  );
}

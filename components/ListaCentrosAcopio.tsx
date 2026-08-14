"use client";

import { useMemo, useState } from "react";
import type { CentroAcopio } from "@/lib/index";

export default function ListaCentrosAcopio({
  centros,
}: {
  centros: CentroAcopio[];
}) {
  const ciudades = useMemo(() => {
    const unicas = new Set(centros.map((c) => c.ciudad));
    return Array.from(unicas).sort();
  }, [centros]);

  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("todas");

  const centrosFiltrados = useMemo(() => {
    if (ciudadSeleccionada === "todas") return centros;
    return centros.filter((c) => c.ciudad === ciudadSeleccionada);
  }, [centros, ciudadSeleccionada]);

  if (centros.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        No hay centros de acopio registrados todavía.
      </p>
    );
  }

  return (
    <div>
      {ciudades.length > 1 && (
        <div className="mb-4">
          <select
            className="rounded-lg border px-3 py-2 text-sm"
            value={ciudadSeleccionada}
            onChange={(e) => setCiudadSeleccionada(e.target.value)}
          >
            <option value="todas">Todas las ciudades</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      {centrosFiltrados.length === 0 ? (
        <p className="text-sm text-gray-500">
          No hay centros de acopio en esa ciudad.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {centrosFiltrados.map((centro) => (
            <div key={centro.id} className="rounded-xl border bg-white p-4">
              <p className="font-medium">{centro.nombre}</p>
              <p className="mt-1 text-sm text-gray-500">
                {centro.direccion} · {centro.ciudad}, {centro.departamento}
              </p>

              <div className="mt-3 space-y-1 border-t pt-3 text-sm text-gray-600">
                {centro.horario && <p>Horario: {centro.horario}</p>}
                {centro.queReciben?.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {centro.queReciben.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {centro.contacto && <p>Contacto: {centro.contacto}</p>}
                {centro.notas && (
                  <p className="text-xs text-gray-500">{centro.notas}</p>
                )}
              </div>

              <p className="mt-3 text-xs text-gray-400">
                Actualizado:{" "}
                {new Date(centro.actualizadoEn).toLocaleString("es-CO")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

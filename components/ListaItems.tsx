import type { Item } from "@/lib/index";

const colorPrioridad: Record<Item["prioridad"], string> = {
  alta: "bg-red-50 text-red-700 border-red-200",
  media: "bg-amber-50 text-amber-700 border-amber-200",
  baja: "bg-green-50 text-green-700 border-green-200",
};

export default function ListaItems({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        No hay proveedores registrados para este territorio todavía.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border bg-white p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium">{item.nombre}</p>
              <p className="mt-1 text-sm text-gray-500">{item.descripcion}</p>
              {item.cantidadRecomendada && (
                <p className="mt-1 text-xs text-gray-400">
                  Recomendado: {item.cantidadRecomendada}
                </p>
              )}
            </div>
            <span
              className={`whitespace-nowrap rounded-full border px-2 py-0.5 text-xs ${colorPrioridad[item.prioridad]}`}
            >
              {item.prioridad}
            </span>
          </div>

          <div className="mt-3 space-y-1 border-t pt-3">
            {item.proveedores.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <span>
                  {p.nombreTienda}
                  {p.ciudad ? ` · ${p.ciudad}` : ""}
                </span>
                {p.urlCompra ? (
                  <a
                    href={p.urlCompra}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver tienda →
                  </a>
                ) : (
                  <span className="text-gray-400">Sin link</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

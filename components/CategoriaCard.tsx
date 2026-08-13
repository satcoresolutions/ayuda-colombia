import Link from "next/link";
import type { Categoria } from "@/lib/index";

export default function CategoriaCard({
  categoria,
}: {
  categoria: Categoria;
}) {
  return (
    <Link
      href={`/categoria/${categoria.id}`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
        🏠
      </div>

      <h3 className="mt-5 font-semibold text-slate-950">
        {categoria.nombre}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
        {categoria.descripcion}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">
          {categoria.items.length} recursos
        </span>

        <span className="text-sm font-semibold text-red-600 transition-transform group-hover:translate-x-1">
          Ver →
        </span>
      </div>
    </Link>
  );
}
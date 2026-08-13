import CategoriaCard from "@/components/CategoriaCard";
import { getCategorias } from "@/lib/index";

export default function CategoriasPage() {
  const categorias = getCategorias();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-950">Categorías</h1>
        <p className="mt-1 text-sm text-slate-500">
          Explora los recursos disponibles por tipo de necesidad.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {categorias.map((c) => (
          <CategoriaCard key={c.id} categoria={c} />
        ))}
      </div>
    </div>
  );
}
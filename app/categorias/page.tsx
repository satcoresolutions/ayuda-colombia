import CategoriasFiltradas from "@/components/CategoriasFiltradas";
import { getCategorias } from "@/lib/index";

export default function CategoriasPage() {
  const categorias = getCategorias();

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
              Categorías
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explora los recursos disponibles según la necesidad que tengas.
              Encuentra información, organizaciones, voluntariado y elementos
              esenciales para la emergencia.
            </p>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Explora por necesidad
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Selecciona una categoría para consultar los recursos disponibles.
          </p>
        </div>

        <CategoriasFiltradas categorias={categorias} />
      </main>
    </div>
  );
}
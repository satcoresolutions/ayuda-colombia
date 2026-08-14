import Link from "next/link";
import CategoriaCard from "@/components/CategoriaCard";
import CategoryCarousel from "./CategoryCarousel";
import { getCategorias } from "@/lib/index";

export default function CategorySection() {
  const categorias = getCategorias();

  return (
    <section
      id="categorias"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-600">
              Explora por necesidad
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              ¿Cómo puedes ayudar?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Elige una forma de colaborar y descubre qué puedes hacer para apoyar
              a las comunidades afectadas por la emergencia.
            </p>
          </div>

          <Link
            href="/categorias"
            className="shrink-0 text-sm font-semibold text-red-600 transition hover:text-red-700"
          >
            Ver todas →
          </Link>
        </div>

        {/* Carrusel */}
        <div className="mt-8">
          <CategoryCarousel>
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="w-[280px] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
              >
                <CategoriaCard categoria={categoria} />
              </div>
            ))}
          </CategoryCarousel>
        </div>

        {/* Indicador móvil */}
        <p className="mt-4 text-center text-xs text-slate-400 sm:hidden">
          Desliza para explorar →
        </p>
      </div>
    </section>
  );
}
import Link from "next/link";
import {
  Home,
  Droplet,
  UtensilsCrossed,
  Stethoscope,
  HeartHandshake,
  Shirt,
  Hammer,
  Truck,
  Route,
  Zap,
  Radio,
  Users,
  LifeBuoy,
  Baby,
  PawPrint,
  HandHeart,
  HandCoins,
  Package,
  type LucideIcon,
} from "lucide-react";
import type { Categoria } from "@/lib/index";

// Mapea el string "icono" de cada categoría (data/categorias/index.json)
// a su componente real de lucide-react. Si agregas una categoría nueva
// con un ícono que no está aquí, cae en Package por defecto.
const ICONOS: Record<string, LucideIcon> = {
  home: Home,
  droplet: Droplet,
  utensils: UtensilsCrossed,
  "first-aid-kit": Stethoscope,
  heart: HeartHandshake,
  shirt: Shirt,
  hammer: Hammer,
  truck: Truck,
  route: Route,
  zap: Zap,
  radio: Radio,
  users: Users,
  "life-buoy": LifeBuoy,
  baby: Baby,
  "paw-print": PawPrint,
  "hand-heart": HandHeart,
  "hand-coins": HandCoins,
};

export default function CategoriaCard({
  categoria,
}: {
  categoria: Categoria;
}) {
  const Icono = ICONOS[categoria.icono] ?? Package;

  return (
    <Link
      href={`/categoria/${categoria.id}`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#7A1B2E]/30 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A1B2E]/8">
        <Icono className="h-6 w-6 text-[#7A1B2E]" strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 font-[family-name:var(--font-serif)] font-semibold text-slate-950">
        {categoria.nombre}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
        {categoria.descripcion}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-xs text-slate-400">
          {categoria.items.length} recursos
        </span>

        <span className="text-sm font-semibold text-[#7A1B2E] transition-transform group-hover:translate-x-1">
          Ver →
        </span>
      </div>
    </Link>
  );
}

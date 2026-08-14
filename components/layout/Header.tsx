import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-[1000] border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ayuda Colombia - Inicio"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white shadow-sm"
            style={{
              background:
                "linear-gradient(to bottom, #FCD116 0%, #FCD116 50%, #003893 50%, #003893 75%, #CE1126 75%, #CE1126 100%)",
            }}
          >
            🆘
          </div>

          <div className="leading-tight">
            <span className="block text-sm font-bold text-slate-950 sm:text-base">
              Ayuda Colombia
            </span>

            <span className="hidden text-xs text-slate-500 sm:block">
              Recursos para emergencias
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Inicio
          </Link>

          <Link
            href="/categorias"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Categorías
          </Link>

          <Link
            href="/ubicaciones"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Dónde conseguir
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">
            🆘 Ayuda Colombia
          </p>

          <p className="mt-1 text-xs">
            Recursos e información para situaciones de emergencia.
          </p>
        </div>

        <p className="text-xs">
          Información sujeta a verificación y actualización.
        </p>
      </div>
    </footer>
  );
}
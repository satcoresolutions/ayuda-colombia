import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-colombia.png')",
      }}
    >
      {/* Capa muy sutil para mejorar la lectura sin apagar los colores */}
      <div className="absolute inset-0 -z-10 bg-black/15" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span>🇨🇴</span>
            <span>Ayuda y solidaridad en Colombia</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Ayuda donde{" "}
            <span className="text-yellow-300">más se necesita.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white drop-shadow sm:text-lg">
            Descubre qué se necesita, dónde llevarlo, cómo donar y dónde
            puedes ofrecer tu tiempo para apoyar a las comunidades afectadas.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#categorias"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              ¿Cómo puedo ayudar?
            </Link>

            <Link
              href="#ubicacion"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
            >
              📍 Ver zonas de atención
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
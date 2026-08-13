const steps = [
  {
    number: "01",
    icon: "🔎",
    title: "Encuentra lo que necesitas",
    description:
      "Explora las categorías o busca directamente un elemento específico.",
  },
  {
    number: "02",
    icon: "📍",
    title: "Selecciona tu ubicación",
    description:
      "Filtra la información según el departamento y posteriormente el municipio.",
  },
  {
    number: "03",
    icon: "🛒",
    title: "Encuentra dónde conseguirlo",
    description:
      "Consulta tiendas, proveedores y puntos de venta disponibles para tu territorio.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-red-600">
            Así funciona
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Información clara cuando más la necesitas
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            La plataforma organiza los recursos para que puedas encontrar
            rápidamente qué necesitas y dónde conseguirlo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                  {step.icon}
                </div>

                <div>
                  <p className="text-xs font-bold tracking-wider text-red-600">
                    {step.number}
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
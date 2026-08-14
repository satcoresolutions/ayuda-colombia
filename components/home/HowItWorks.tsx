const steps = [
  {
    number: "01",
    icon: "🧭",
    title: "Infórmate",
    description:
      "Consulta las necesidades reportadas y conoce qué tipo de ayuda hace falta en las zonas afectadas.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Elige cómo ayudar",
    description:
      "Puedes donar insumos, ofrecer tu tiempo como voluntario, apoyar una organización o contribuir desde tu territorio.",
  },
  {
    number: "03",
    icon: "📍",
    title: "Encuentra dónde hacerlo",
    description:
      "Consulta los puntos de atención, centros de recepción, organizaciones y lugares donde puedes llevar tu ayuda.",
  },
];

export default function HowItWorks() {
  return (
    <section className=" py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-red-600">
            ¿Cómo puedes ayudar?
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Convierte tu intención en ayuda
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Te ayudamos a encontrar información útil para que puedas tomar
            acción de forma organizada y llegar a quienes más lo necesitan.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              {/* Número */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {step.icon}
                </div>

                <span className="text-sm font-bold tracking-wider text-red-600">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-red-100 bg-red-50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-red-900">
            Cada aporte cuenta
          </p>

          <p className="mt-1 text-sm leading-6 text-red-800/80">
            Antes de desplazarte o enviar una donación, verifica siempre la
            información y las necesidades actuales del punto al que deseas
            ayudar.
          </p>
        </div>
      </div>
    </section>
  );
}
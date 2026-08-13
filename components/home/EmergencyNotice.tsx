export default function EmergencyNotice() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg">
              ⚠️
            </div>

            <div>
              <h2 className="font-semibold text-amber-950">
                Información para una emergencia
              </h2>

              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                Esta plataforma busca facilitar la consulta de recursos y
                proveedores. La disponibilidad, precios y condiciones pueden
                cambiar rápidamente, por lo que siempre debes verificar la
                información directamente con el proveedor o las autoridades
                correspondientes.
              </p>

              <p className="mt-3 text-sm leading-6 text-amber-900/80">
                Las recomendaciones de asistencia deben priorizar información
                proveniente de organismos oficiales y organizaciones
                humanitarias reconocidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
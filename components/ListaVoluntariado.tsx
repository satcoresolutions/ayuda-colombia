import type { PuntoVoluntariado } from "@/lib/index";

export default function ListaVoluntariado({
  puntos,
}: {
  puntos: PuntoVoluntariado[];
}) {
  if (puntos.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        No hay puntos de voluntariado registrados todavía.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {puntos.map((punto) => (
        <div key={punto.id} className="rounded-xl border bg-white p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium">{punto.nombre}</p>
              <p className="mt-1 text-sm text-gray-500">{punto.direccion}</p>
            </div>
            {punto.voluntariosUrgentes && (
              <span className="whitespace-nowrap rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-xs text-red-700">
                Se necesitan ya
              </span>
            )}
          </div>

          <div className="mt-3 space-y-1 border-t pt-3 text-sm text-gray-600">
            {punto.horarios && <p>Horario: {punto.horarios}</p>}
            {punto.territorio && (
              <p>
                {punto.territorio.municipio}, {punto.territorio.departamento}
              </p>
            )}
            {punto.notas && (
              <p className="text-xs text-gray-500">{punto.notas}</p>
            )}
            {punto.funciones && (
              <p className="text-xs text-gray-500">
                Funciones: {punto.funciones}
              </p>
            )}
            {punto.contactoClave && (
              <p className="text-xs text-gray-500">
                Contacto: {punto.contactoClave}
              </p>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 border-t pt-3 text-sm">
            {punto.linkInscripcion && (
              <a
                href={punto.linkInscripcion}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 hover:underline"
              >
                Inscribirse →
              </a>
            )}
            {punto.instagram && (
              <a
                href={punto.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Instagram →
              </a>
            )}
            {punto.whatsapp && (
              <a
                href={punto.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                WhatsApp →
              </a>
            )}
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Actualizado: {new Date(punto.actualizadoEn).toLocaleString("es-CO")}
          </p>
        </div>
      ))}
    </div>
  );
}

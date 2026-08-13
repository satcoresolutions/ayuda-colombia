import type { Organizacion } from "@/lib/index";

export default function ListaOrganizaciones({
  organizaciones,
}: {
  organizaciones: Organizacion[];
}) {
  if (organizaciones.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        No hay organizaciones registradas todavía.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {organizaciones.map((org) => (
        <div key={org.id} className="rounded-xl border bg-white p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium">{org.nombre}</p>
              <p className="mt-1 text-sm text-gray-500">{org.descripcion}</p>
            </div>
            {org.verificada && (
              <span className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                Verificada
              </span>
            )}
          </div>

          {org.areasDeAccion?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {org.areasDeAccion.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600"
                >
                  {area}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3 space-y-1 border-t pt-3 text-sm">
            {org.contacto?.telefono && (
              <p className="text-gray-600">Tel: {org.contacto.telefono}</p>
            )}
            {org.contacto?.whatsapp && (
              <p className="text-gray-600">
                WhatsApp: {org.contacto.whatsapp}
              </p>
            )}
            {org.contacto?.email && (
              <p className="text-gray-600">{org.contacto.email}</p>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 border-t pt-3 text-sm">
            {org.contacto?.sitioWeb && (
              <a
                href={org.contacto.sitioWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Sitio web →
              </a>
            )}
            {org.donaciones?.linkDonacionOnline && (
              <a
                href={org.donaciones.linkDonacionOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 hover:underline"
              >
                Donar →
              </a>
            )}
          </div>

          {org.donaciones?.cuentaBancaria && (
            <div className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
              <p>
                {org.donaciones.cuentaBancaria.banco} ·{" "}
                {org.donaciones.cuentaBancaria.tipoCuenta}
              </p>
              <p className="mt-0.5 font-mono">
                {org.donaciones.cuentaBancaria.numeroCuenta}
              </p>
              <p className="mt-0.5">
                A nombre de: {org.donaciones.cuentaBancaria.titular}
              </p>
            </div>
          )}

          {org.donaciones?.metodoAlterno && (
            <p className="mt-2 text-xs text-gray-500">
              {org.donaciones.metodoAlterno}
            </p>
          )}

          {org.donaciones?.nota && (
            <p className="mt-2 text-xs italic text-gray-400">
              {org.donaciones.nota}
            </p>
          )}

          <p className="mt-3 text-xs text-gray-400">
            Actualizado: {org.ultimaActualizacion}
          </p>
        </div>
      ))}
    </div>
  );
}

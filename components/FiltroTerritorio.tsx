"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Territorio } from "@/lib/index";

export default function FiltroTerritorio({
  territorios,
}: {
  territorios: Territorio[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const actual = searchParams.get("territorio") ?? "nacional";

  function onChange(valor: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (valor === "nacional") {
      params.delete("territorio");
    } else {
      params.set("territorio", valor);
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <select
      className="rounded-lg border px-3 py-2 text-sm"
      value={actual}
      onChange={(e) => onChange(e.target.value)}
    >
      {territorios
        .filter((t) => t.id === "nacional" || t.esZonaAfectada)
        .map((t) => (
          <option key={t.id} value={t.id}>
            {t.nombre}
          </option>
        ))}
    </select>
  );
}

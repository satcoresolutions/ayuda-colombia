import { leerJson } from "./_fs-helpers";
import type { Organizacion } from "./types";

export function getOrganizaciones(): Organizacion[] {
  return leerJson<Organizacion[]>("categorias/organizaciones-ong.json", []);
}
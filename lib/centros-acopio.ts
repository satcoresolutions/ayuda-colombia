import { leerJson } from "./_fs-helpers";
import type { CentroAcopio } from "./types";

export function getCentrosAcopio(): CentroAcopio[] {
  return leerJson<CentroAcopio[]>("centros-acopio.json", []);
}

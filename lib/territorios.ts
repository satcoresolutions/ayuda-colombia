import { leerJson } from "./_fs-helpers";
import type { Territorio } from "./types";

export function getTerritorios(): Territorio[] {
  return leerJson<Territorio[]>("../territorios.json", []);
}
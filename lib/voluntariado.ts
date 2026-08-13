import { leerJson } from "./_fs-helpers";
import type { PuntoVoluntariado } from "./types";

export function getVoluntariado(): PuntoVoluntariado[] {
  return leerJson<PuntoVoluntariado[]>("categorias/voluntariado.json", []);
}
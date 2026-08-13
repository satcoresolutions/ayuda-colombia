import type { GrupoCategoria } from "./types";

export const GRUPOS: { id: GrupoCategoria; nombre: string; descripcion: string }[] = [
  {
    id: "necesidades-basicas",
    nombre: "Necesidades básicas",
    descripcion: "Lo esencial para sobrevivir y estar seguro día a día",
  },
  {
    id: "logistica-operacion",
    nombre: "Logística y operación",
    descripcion: "Lo que se necesita para mover, reconstruir y mantener la respuesta",
  },
  {
    id: "ayuda-organizada",
    nombre: "Ayuda organizada",
    descripcion: "Cómo canalizar apoyo a través de organizaciones y voluntariado",
  },
  {
    id: "poblaciones-especificas",
    nombre: "Poblaciones específicas",
    descripcion: "Atención dirigida a niñez y animales afectados",
  },
];

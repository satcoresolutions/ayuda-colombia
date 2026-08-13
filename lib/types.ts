export type Prioridad = "alta" | "media" | "baja";

export interface Territorio {
  id: string;
  nombre: string;
  esZonaAfectada: boolean;
}

export interface Proveedor {
  nombreTienda: string;
  tipo: "nacional" | "regional" | "local";
  urlCompra: string;
  departamentosCobertura: string[];
  ciudad?: string;
}

export interface Item {
  id: string;
  nombre: string;
  prioridad: Prioridad;
  descripcion: string;
  cantidadRecomendada: string;
  proveedores: Proveedor[];
}

export interface CategoriaMeta {
  id: string;
  nombre: string;
  icono: string;
  descripcion: string;
}

export interface Categoria extends CategoriaMeta {
  items: Item[];
}

export interface PuntoRecepcion {
  nombre: string;
  direccion: string;
  ciudad: string;
  horario: string;
}

export interface CuentaBancaria {
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  titular: string;
  nit: string | null;
}

export interface Organizacion {
  id: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  areasDeAccion: string[];
  cobertura: {
    alcance: string;
    departamentos: string[];
  };
  contacto: {
    telefono: string | null;
    whatsapp: string | null;
    email: string | null;
    sitioWeb: string | null;
  };
  redesSociales: {
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    tiktok: string | null;
  };
  donaciones: {
    aceptaDineroDirecto: boolean;
    cuentaBancaria: CuentaBancaria | null;
    linkDonacionOnline: string | null;
    metodoAlterno?: string;
    aceptaEspecie: boolean;
    puntosRecepcion: PuntoRecepcion[];
    nota?: string;
  };
  verificada: boolean;
  ultimaActualizacion: string;
}

export type PuntoVoluntariado = {
  id: string;
  nombre: string;
  direccion: string;

  voluntariosUrgentes: boolean;

  actualizadoEn: string;

  horarios?: string;
  notas?: string;

  linkInscripcion?: string;
  whatsapp?: string;
  instagram?: string;
  contactoClave?: string;

  funciones?: string;

  territorio: {
    departamento?: string;
    municipio?: string;
  };
};
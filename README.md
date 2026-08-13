# Utensilios de emergencia — Ayuda terremoto Colombia

Sitio para ayudar a las familias afectadas por el terremoto del 10 de agosto
de 2026 a encontrar utensilios de emergencia esenciales, clasificados por
categoría, con enlaces de compra y filtro por departamento.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
app/
  page.tsx                  → Home con grid de categorías
  categoria/[slug]/page.tsx → Detalle de categoría + filtro por territorio
  layout.tsx                → Layout raíz
components/
  CategoriaCard.tsx         → Tarjeta de categoría en el home
  FiltroTerritorio.tsx      → Selector de departamento (client component)
  ListaItems.tsx            → Lista de ítems con proveedores
data/
  categorias.json           → Fuente de datos (categorías, ítems, proveedores)
lib/
  data.ts                   → Tipos + funciones de acceso/filtrado de datos
```

## Cómo agregar una categoría o ítem

Edita `data/categorias.json`. Cada ítem necesita al menos un proveedor con
`departamentosCobertura`. Usa `"Nacional"` para tiendas con envío a todo el
país; usa el nombre del departamento (ej. `"Choco"`, sin tilde) para
cobertura regional o local.

## Próximos pasos sugeridos

1. Completar `data/categorias.json` con datos reales de tiendas y ONGs.
2. Agregar buscador de texto libre en el home.
3. Migrar `data/categorias.json` a Supabase cuando el contenido crezca,
   para poder actualizarlo sin redeploy.
4. Agregar sección de "Cómo donar" y contactos de organizaciones activas
   en la zona (Cruz Roja, Bomberos, UNGRD).

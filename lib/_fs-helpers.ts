import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");

// Cache genérico en memoria, por ruta de archivo.
const cache = new Map<string, unknown>();

export function leerJson<T>(relativePath: string, fallback: T): T {
  const filePath = path.join(DATA_DIR, relativePath);
  const cacheKey = relativePath;

  if (cache.has(cacheKey)) return cache.get(cacheKey) as T;
  if (!fs.existsSync(filePath)) return fallback;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(raw) as T;
  cache.set(cacheKey, parsed);
  return parsed;
}
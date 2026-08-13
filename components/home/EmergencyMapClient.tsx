"use client";

import dynamic from "next/dynamic";

const EmergencyMap = dynamic(
  () => import("./EmergencyMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-800 text-sm text-slate-400">
        Cargando mapa...
      </div>
    ),
  }
);

export default function EmergencyMapClient() {
  return <EmergencyMap />;
}
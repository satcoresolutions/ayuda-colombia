"use client";

import { Fragment } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const emergencyIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const locations = [
  {
    id: "san-jose-del-palmar",
    name: "San José del Palmar",
    department: "Chocó",
    position: [4.89, -76.23] as [number, number],
    type: "Epicentro",
    description:
      "Punto principal de referencia de la emergencia.",
    radius: 18000,
  },
  {
    id: "quibdo",
    name: "Quibdó",
    department: "Chocó",
    position: [5.69, -76.66] as [number, number],
    type: "Zona afectada",
    description:
      "Zona reportada dentro del área de seguimiento.",
    radius: 9000,
  },
  {
    id: "cali",
    name: "Cali",
    department: "Valle del Cauca",
    position: [3.45, -76.53] as [number, number],
    type: "Zona afectada",
    description:
      "Ciudad incluida en el área de seguimiento.",
    radius: 10000,
  },
  {
    id: "pereira",
    name: "Pereira",
    department: "Risaralda",
    position: [4.81, -75.69] as [number, number],
    type: "Zona afectada",
    description:
      "Zona incluida en el área de seguimiento.",
    radius: 7000,
  },
  {
    id: "manizales",
    name: "Manizales",
    department: "Caldas",
    position: [5.07, -75.52] as [number, number],
    type: "Zona afectada",
    description:
      "Zona incluida en el área de seguimiento.",
    radius: 7000,
  },
  {
    id: "armenia",
    name: "Armenia",
    department: "Quindío",
    position: [4.53, -75.68] as [number, number],
    type: "Zona afectada",
    description:
      "Zona incluida en el área de seguimiento.",
    radius: 7000,
  },
];

export default function EmergencyMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <MapContainer
        center={[4.7, -76.2]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Fragment key={location.id}>
            <Marker
              position={location.position}
              icon={emergencyIcon}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <strong>{location.name}</strong>

                  <p className="mt-1 text-xs text-gray-500">
                    {location.department}
                  </p>

                  <p className="mt-2 text-sm">
                    {location.type}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {location.description}
                  </p>
                </div>
              </Popup>
            </Marker>

            <Circle
              center={location.position}
              radius={location.radius}
              pathOptions={{
                color: "#dc2626",
                fillColor: "#ef4444",
                fillOpacity: 0.12,
                weight: 1,
              }}
            />
          </Fragment>
        ))}
      </MapContainer>
    </div>
  );
}
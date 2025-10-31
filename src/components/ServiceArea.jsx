import React from "react";

import mapImg from "../assets/map.png";

// Your locations
const NC_CITIES = [
  "Ballantyne",
  "Belmont",
  "Charlotte",
  "Cramerton",
  "Concord",
  "Cornelius",
  "Dallas",
  "Gastonia",
  "Harrisburg",
  "Huntersville",
  "Indian Trail",
  "Lowell",
  "Matthews",
  "McAdenville",
  "Mint Hill",
  "Mount Holly",
  "Pineville",
  "Ranlo",
];

export default function ServiceArea() {
  // Split locations for a tidy two-column list on desktop
  const mid = Math.ceil(NC_CITIES.length / 2);
  const leftList = NC_CITIES.slice(0, mid);
  const rightList = NC_CITIES.slice(mid);

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Side-by-side: Locations list + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Locations only (no top heading/paragraphs) */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Serving Charlotte and the surrounding areas:
            </h3>

            {/* Two-column bullets on md+; one column on mobile */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
              <ul className="space-y-2">
                {leftList.map((city) => (
                  <li key={city} className="flex gap-2 text-gray-800">
                    <span className="mt-2 h-[6px] w-[6px] rounded-full bg-[#a3c585] shrink-0" />
                    <span className="leading-7">{city}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {rightList.map((city) => (
                  <li key={city} className="flex gap-2 text-gray-800">
                    <span className="mt-2 h-[6px] w-[6px] rounded-full bg-[#a3c585] shrink-0" />
                    <span className="leading-7">{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Outside this area? We may still be able to help —{" "}
              <span className="font-medium text-gray-700">
                call 980-990-3223
              </span>
              .
            </p>
          </div>

          {/* RIGHT: Map */}
          <div className="w-full">
            <div className="overflow-hidden shadow-md ring-1 ring-black/5">
              <img
                src={mapImg}
                alt="Map of our Charlotte-area service coverage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

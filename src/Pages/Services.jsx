import React, { useState } from "react";
import { PiCheckLight, PiMapPinLight, PiClockLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import rootslogo from "../assets/rootslogo.png";
import homeIcon from "../assets/homeicon.png"; // icon used for all package cards

const SERVICE_LISTS = {
  residential: [
    "One Time Deep Clean",
    "Regular Maintenance",
    "Organization Service",
    "Clutter Removal Service",
  ],
  commercial: ["Office Regular Maintenance ", "Warehouse Regular Maintenance"],
  construction: ["Post-construction Cleanup"],
};

const PACKAGES = {
  residential: [
    {
      name: "Residental Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere augue id rhoncus pulvinar. Aliquam ut neque vitae dolor sollicitudin pulvinar. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      name: "Residential Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis velit vel eleifend cursus. Vivamus aliquam lacus sed fringilla eleifend, neque arcu interdum dolor, non tincidunt neque lorem id orci.",
    },
  ],
  commercial: [
    {
      name: "Commercial Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue erat sit amet convallis porta, metus erat bibendum arcu, quis efficitur lorem neque vitae leo.",
    },
    {
      name: "Commercial Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat id nisl faucibus rutrum. Nunc cursus lorem vel accumsan iaculis, purus arcu vulputate ex, a blandit velit mauris non mi.",
    },
  ],
  construction: [
    {
      name: "Construction Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus congue libero id placerat finibus, justo justo dictum justo, non sodales nibh nisl non dui.",
    },
    {
      name: "Construction Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna in ipsum euismod feugiat. Vivamus aliquam lacus sed fringilla eleifend, neque arcu interdum dolor, non tincidunt neque lorem id orci.",
    },
  ],
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("residential");

  return (
    <section className="bg-gray-50">
      {/* SIMPLE HEADING (centered, no banner) */}
      <section className="py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#a3c585]">
            Cleaning Services
          </h1>
        </div>
      </section>

      {/* INDIVIDUAL SERVICES – horizontal rows per category */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* LEFT: services rows */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase mb-4">
              Explore our individual services
            </h2>

            <div className="space-y-8 text-gray-900">
              {Object.entries(SERVICE_LISTS).map(([key, services]) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold mb-3 capitalize">
                    {key.replace("-", " ")}
                  </h3>
                  {/* side-by-side list with wrapping */}
                  <ul className="flex flex-wrap gap-x-6 gap-y-3">
                    {services.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 whitespace-nowrap"
                      >
                        <PiCheckLight className="text-xl text-[#a3c585]" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Note under the section */}
            <p className="mt-8 text-sm text-gray-700">
              <span className="font-semibold">Note:</span> All services must
              have a first time deep clean in order to schedule regular
              maintenance, all services require an initial estimate.
            </p>
          </div>

          {/* RIGHT: info card with Book Now button */}
          <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={rootslogo}
                alt="Roots Cleaning Logo"
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                Roots Cleaning
              </h3>

              <div className="mt-6 w-full space-y-3 text-gray-700">
                <div className="flex items-center justify-center gap-3">
                  <PiMapPinLight className="text-2xl text-[#a3c585]" />
                  <span>Charlotte, NC 28226</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <PiClockLight className="text-2xl text-[#a3c585]" />
                  <span>Mon–Fri 08:00 AM — 05:00 PM</span>
                </div>
              </div>

              <div className="mt-6 w-full">
                <Link
                  to="/booking"
                  className="block rounded-2xl border-2 border-[#a3c585] px-6 py-4 text-center font-semibold text-gray-900 shadow-sm hover:bg-[#f6fbf2] transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== Wave into green Packages section ===== */}
      <svg
        aria-hidden="true"
        className="block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,64 1440,40 L1440,80 L0,80 Z"
          fill="#a3c585"
        />
      </svg>

      {/* PACKAGES – same content, now on green background */}
      <div className="bg-[#a3c585]">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-10 pb-14">
          <h2 className="text-2xl sm:text-5xl font-semibold text-center text-white mb-6 sm:mb-8">
            Roots Cleaning Packages
          </h2>

          {/* Category Switcher (unchanged) */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {Object.keys(PACKAGES).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                  activeCategory === cat
                    ? "bg-gray-100 text-gray-700"
                    : "bg-[#a3c585] text-white hover:bg-gray-200"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Cards container (centered) */}
          <div className="flex flex-wrap justify-center gap-8">
            {PACKAGES[activeCategory].map((pkg) => (
              <div
                key={pkg.name}
                className="bg-[#FAEFE6] rounded-2xl shadow-lg shadow-black/10 border border-black/5 px-8 py-10 flex flex-col items-center text-center max-w-sm w-full"
              >
                <img
                  src={homeIcon}
                  alt=""
                  aria-hidden="true"
                  className="mb-4 h-16 w-16 object-contain"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{pkg.desc}</p>
                <Link
                  to="/booking"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-[#6BA243] text-white font-semibold py-3 hover:brightness-95 transition"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

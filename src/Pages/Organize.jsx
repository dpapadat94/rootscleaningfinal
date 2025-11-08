import React from "react";
import { Link } from "react-router-dom";
import {
  PiMapPinLight,
  PiClockLight,
  PiPhoneLight,
  PiCheckLight,
} from "react-icons/pi";
import rootslogo from "../assets/rootslogo.png";

export default function OrganizingServices() {
  return (
    <section className="bg-gray-50">
      {/* INTRO */}
      <div className="w-full bg-[#a3c585]/20 py-12 sm:py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#4e7330] mb-4">
            Organizing & Decluttering Services
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Transform your home into a calm, functional, and inspiring space.
            Our professional organizing and decluttering services help you
            simplify, streamline, and reclaim your environment—one room at a
            time.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 flex flex-col gap-10">
        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ORGANIZATION SERVICE */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#679d38] mb-4">
              Organization Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our organization service is designed to bring clarity, order, and
              functionality to your space. We don’t just tidy up—we create
              sustainable systems that make your home easier to maintain.
            </p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              This service includes:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Assessing your space and decluttering items where needed",
                "Purchasing adequate storage solutions tailored to your style and needs",
                "Ensuring each item has a designated, practical place",
                "Creating easy-to-follow systems for long-term organization",
                "Labeling, categorizing, and arranging items for accessibility and efficiency",
                "Organizing closets, pantries, offices, garages, or any other areas of your home",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <PiCheckLight className="text-[#a3c585] text-lg mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              Our goal is to transform cluttered spaces into organized,
              stress-free environments that work for your lifestyle.
            </p>
            <Link
              to="/book"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#6BA243] text-white font-medium hover:brightness-95 transition"
            >
              Free Estimate
            </Link>
          </div>

          {/* CLUTTER REMOVAL SERVICE */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#679d38] mb-4">
              Clutter Removal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our clutter removal service is designed to bring peace, order, and
              functionality back to your space. Whether you’re tackling a few
              disordered areas or an entire home, we provide compassionate,
              judgment-free assistance to help you reclaim your environment.
            </p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              This service includes:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Sorting, categorizing, and removing unwanted or unnecessary items",
                "Hauling away trash, donation items, and recyclables",
                "Light cleaning of cleared areas to restore freshness and usability",
                "Assistance with decision-making on what to keep, donate, or discard",
                "Coordination with donation centers or disposal services (if requested)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <PiCheckLight className="text-[#a3c585] text-lg mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              We approach each project with care, confidentiality, and respect—
              helping you create a cleaner, calmer home where every item has its
              place.
            </p>
            <Link
              to="/book"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#6BA243] text-white font-medium hover:brightness-95 transition"
            >
              Free Estimate
            </Link>
          </div>
        </div>

        {/* CONTACT INFO CARD — now BELOW services */}
        <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left md:gap-6">
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-0">
            <img
              src={rootslogo}
              alt="Roots Cleaning Logo"
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <PiClockLight className="text-xl text-[#a3c585]" />
              <span>Mon–Fri 8:00 AM — 5:00 PM</span>
            </div>
            <a
              href="tel:9809903223"
              className="flex items-center gap-2 font-semibold text-[#6BA243] hover:underline"
            >
              <PiPhoneLight className="text-lg" />
              980-990-3223
            </a>
          </div>

          <Link
            to="/book"
            className="mt-5 md:mt-0 inline-flex items-center justify-center rounded-xl bg-[#6BA243] text-white font-semibold px-6 py-3 hover:brightness-95 transition"
          >
            Free Estimate
          </Link>
        </aside>
      </div>
    </section>
  );
}

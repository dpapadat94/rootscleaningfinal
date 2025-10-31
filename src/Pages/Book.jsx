import React from "react";
import { PiCheckLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import rootslogo from "../assets/rootslogo.png";

export default function Book() {
  return (
    <section className="bg-gray-50">
      {/* HERO / INTRO */}
      <div className="w-full bg-[#a3c585]/20 py-12 sm:py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#4e7330] mb-4">
            Get a Free Residential Cleaning Quote
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Welcome to Roots Cleaning! We use all-natural, eco-friendly products
            to give your home a safe and refreshing clean. Use this page to
            calculate your instant quote — and later, you’ll be able to book
            directly through our online system.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 flex flex-col gap-10">
        {/* QUOTE TABLE SECTION */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#679d38] mb-4">
            Base Cleaning Package
          </h2>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• General dusting, vacuuming, sweeping, and mopping</li>
            <li>• Wiping down kitchen counters & stovetop</li>
            <li>• Bathroom sink & counter wipe down</li>
            <li>• Spot cleaning of mirrors & glass</li>
            <li>• Trash removal</li>
          </ul>
          <p className="text-gray-800 mb-6">
            <span className="font-semibold">Rate:</span> $0.12 per square foot
          </p>

          {/* HOME SIZE TABLE */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-[#a3c585]/40">
                  <th className="p-3 font-semibold text-gray-800 border border-gray-300">
                    Home Size
                  </th>
                  <th className="p-3 font-semibold text-gray-800 border border-gray-300">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "1,000 sq ft", price: "$120" },
                  { size: "1,500 sq ft", price: "$180" },
                  { size: "2,000 sq ft", price: "$240" },
                ].map((row) => (
                  <tr key={row.size}>
                    <td className="p-3 border border-gray-300 text-gray-700">
                      {row.size}
                    </td>
                    <td className="p-3 border border-gray-300 text-gray-700">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ADD-ONS SECTION */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#679d38] mb-4">
            Available Add-On Services
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-[#a3c585]/40">
                  <th className="p-3 font-semibold text-gray-800 border border-gray-300">
                    Add-On Service
                  </th>
                  <th className="p-3 font-semibold text-gray-800 border border-gray-300">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Full Bathroom Deep Clean", "$35 each"],
                  ["Interior Window Cleaning", "$8 each"],
                  ["Dishes / Kitchen Reset", "$30"],
                  ["Inside Oven Cleaning", "$35"],
                  ["Inside Refrigerator Cleaning", "$40"],
                  ["Baseboards Detailed Cleaning", "$30 per 500 sq ft"],
                  ["Cabinet Wipe Down (outside only)", "$25 per kitchen"],
                  ["Laundry Service (wash, dry, fold)", "$20 per load"],
                ].map(([service, price]) => (
                  <tr key={service}>
                    <td className="p-3 border border-gray-300 text-gray-700">
                      {service}
                    </td>
                    <td className="p-3 border border-gray-300 text-gray-700">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PREMIUM UPGRADES */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Premium Upgrades:
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                • <strong>Deep Clean Upgrade:</strong> +$0.06 per sq ft
                (includes baseboards, appliances, and extra detail)
              </li>
              <li>
                • <strong>Move-In / Move-Out Cleaning:</strong> +$0.10 per sq ft
                (includes inside appliances, cabinets, and closets)
              </li>
            </ul>
          </div>
        </div>

        {/* BOOKING FORM PLACEHOLDER */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#679d38] mb-4">
            Ready to Book?
          </h2>
          <p className="text-gray-700 mb-6">
            Select your square footage, add-ons, and upgrades to see your
            instant quote. Once integrated, our booking form will allow you to
            reserve your appointment directly on this page!
          </p>

          {/* === Booking Koala Embed Placeholder === */}
          <div className="border border-dashed border-[#a3c585] rounded-xl p-8 text-gray-500">
            Booking Koala form will be embedded here soon.
          </div>

          {/* CONTACT / CTA */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#6BA243] text-white font-semibold px-6 py-3 hover:brightness-95 transition"
            >
              Contact Us for a Free Quote
            </Link>
          </div>
        </div>

        {/* FOOTER CARD */}
        <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left md:gap-6">
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-0">
            <img
              src={rootslogo}
              alt="Roots Cleaning Logo"
              className="h-16 sm:h-20 w-auto"
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            Roots Cleaning is proud to keep your home fresh, safe, and natural —
            with eco-friendly cleaning you can feel good about.
          </p>
          <Link
            to="/contact"
            className="mt-5 md:mt-0 inline-flex items-center justify-center rounded-xl bg-[#6BA243] text-white font-semibold px-6 py-3 hover:brightness-95 transition"
          >
            Free Estimate
          </Link>
        </aside>
      </div>
    </section>
  );
}

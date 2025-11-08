import React from "react";
import rootslogo from "../assets/rootslogo.png";
import contactBg from "../assets/contactimg.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <main
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 sm:py-24">
        {/* Logo */}
        <img
          src={rootslogo}
          alt="Roots Cleaning Logo"
          className="h-24 sm:h-28 w-auto mb-6"
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#4e7330] mb-6">
          Contact Roots Cleaning
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mb-10">
          Have questions or want to schedule a service? We’d love to hear from
          you. Reach out to us using the info below or select one of the options
          to get started.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link
            to="/book"
            className="bg-[#6BA243] text-white px-8 py-4 rounded-lg font-semibold hover:brightness-95 transition"
          >
            Book Now
          </Link>
          <Link
            to="/estimate"
            className="bg-white border-2 border-[#6BA243] text-[#4e7330] px-8 py-4 rounded-lg font-semibold hover:bg-[#6BA243]/10 transition"
          >
            Free Estimate
          </Link>
        </div>

        {/* Contact Details */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl shadow-md max-w-2xl p-8 space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold"> Phone:</span>{" "}
            <a
              href="tel:+19809903223"
              className="text-[#4e7330] hover:underline"
            >
              (980) 990-3223
            </a>
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@rootscleaningllc.com"
              className="text-[#4e7330] hover:underline"
            >
              info@rootscleaningllc.com
            </a>
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold"> Address:</span> Charlotte, North
            Carolina 28269
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold"> Hours:</span> Mon–Fri 8:00 AM –
            6:00 PM
          </p>
        </div>
      </div>
    </main>
  );
}

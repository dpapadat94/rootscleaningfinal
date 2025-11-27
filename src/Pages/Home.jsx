import React from "react";
import { Link } from "react-router-dom";
import rootslogo from "../assets/rootslogo.png";
import heroBg from "../assets/herobackground2.png";

import ServicesPreview from "../components/ServicesPreview.jsx";
import OurMission from "../components/OurMission.jsx";
import ServiceArea from "../components/ServiceArea.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      {/* HERO SECTION (image background + slightly flatter bottom wave) */}
      <section className="relative min-h-[clamp(560px,70vh,820px)] overflow-hidden -mt-16 bg-white">
        {/* Background image */}
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none select-none absolute inset-0 w-full h-full max-w-none object-cover object-center"
          aria-hidden="true"
        />
        {/* Subtle brand-tint + gradient for legibility */}
        <div className="absolute inset-0 bg-[#a3c585]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/20" />

        {/* Centered content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-8 min-h-[clamp(560px,70vh,820px)] gap-4 sm:gap-5 md:gap-6 translate-y-2 sm:translate-y-3 md:translate-y-4 pb-10">
          <img
            src={rootslogo}
            alt="Roots Cleaning Logo"
            className="
              w-[clamp(300px,64vw,560px)]
              sm:w-[clamp(360px,54vw,620px)]
              md:w-[clamp(440px,34vw,680px)]
              h-auto mb-1
              drop-shadow-[0_8px_26px_rgba(0,0,0,0.28)]
            "
          />
          <p className="text-white text-sm sm:text-base md:text-xl font-medium tracking-wide drop-shadow">
            Select and schedule your services in under 5 minutes
          </p>
          <Link
            to="/book"
            className="inline-block px-8 sm:px-10 py-3 rounded bg-[#FFD8F0] text-black text-lg sm:text-xl font-semibold shadow-md hover:bg-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 transition"
          >
            Instant Book
          </Link>
        </div>

        {/* Bottom wave (same shape style, less amplitude) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[70px] sm:h-[90px] md:h-[110px] z-10"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,84 C240,108 480,52 720,68 C960,84 1200,108 1440,92 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      <ServicesPreview />
      <OurMission />
      {/* <Testimonials /> */}
      <ServiceArea />
    </>
  );
}

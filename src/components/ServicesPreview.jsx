import React from "react";
import { Link } from "react-router-dom";

// Small icons for the four services
import homeIcon from "../assets/homeicon.png";
import commercialIcon from "../assets/commercialicon.png";
import constructionIcon from "../assets/constructionicon.png";
import organizeIcon from "../assets/organizeicon.png";

const services = [
  {
    key: "residential",
    title: "Residential",
    desc: "Thorough home cleaning tailored to your space with non-toxic, family- and pet-safe products.",
    icon: homeIcon,
  },
  {
    key: "commercial",
    title: "Commercial",
    desc: "We tailor each cleaning plan to the unique needs of your business or office environment.",
    icon: commercialIcon,
  },
  {
    key: "post-construction",
    title: "Post Construction",
    desc: "Designed to transform newly built or renovated spaces into clean, move-in-ready environments.",
    icon: constructionIcon,
  },
  {
    key: "organization",
    title: "Organization",
    desc: "Our organization service is designed to bring clarity, order, and functionality to your space. ",
    icon: organizeIcon,
  },
];

export default function ServicesPreview() {
  return (
    <section className="pt-0 pb-12 bg-white">
      {/* -------- Banner (styled text only) -------- */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-10 md:py-12">
          <div className="text-center">
            <h1 className="text-[#a3c585] font-extrabold tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.05)] text-[clamp(24px,5.2vw,56px)]">
              Welcome to Roots Cleaning
            </h1>

            <p className="mt-4 text-black leading-snug text-[clamp(16px,2.8vw,28px)]">
              Our products are{" "}
              <span className="text-[#a3c585] font-extrabold">
                100% natural
              </span>{" "}
              and environmentally friendly, giving your home or business a safe,
              refreshing clean.
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="inline-block h-0.5 w-16 md:w-20 bg-black/40 rounded-full" />
              <span className="text-black/60 text-sm md:text-[15px]">
                Non-toxic • Pet &amp; child safe • Beautiful results
              </span>
              <span className="inline-block h-0.5 w-16 md:w-20 bg-black/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* -------- Wave into green section (starts AFTER banner) -------- */}
      <svg
        aria-hidden="true"
        className="block w-full"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,60 480,20 720,30 C960,40 1200,55 1440,45 L1440,70 L0,70 Z"
          fill="#a3c585"
        />
      </svg>

      {/* -------- Green background area (no white card) -------- */}
      <div className="bg-[#a3c585]">
        <div className="mx-auto w-full max-w-6xl px-6 pt-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-10 md:gap-12 text-center">
            {services.flatMap((svc, idx) => {
              const Card = (
                <div key={svc.key} className="flex-1 max-w-sm mx-auto">
                  <img
                    src={svc.icon}
                    alt=""
                    aria-hidden="true"
                    className="mx-auto mb-4 h-20 w-20 object-contain"
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-white/90 text-base leading-relaxed">
                    {svc.desc}
                  </p>
                  <Link
                    to={`/services#${svc.key}`}
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm transition"
                  >
                    Learn More
                  </Link>
                </div>
              );

              const Sep =
                idx < services.length - 1 ? (
                  <div
                    key={`sep-${idx}`}
                    className="flex items-center justify-center md:self-start md:mt-16"
                    aria-hidden="true"
                  >
                    <span className="md:hidden block h-0.5 w-16 bg-white/70 rounded-full" />
                    <span className="hidden md:block w-0.5 h-16 bg-white/70 rounded-full" />
                  </div>
                ) : null;

              return [Card, Sep];
            })}
          </div>

          <div className="h-8" />
        </div>

        {/* -------- Bottom wave back to white (Mission section) -------- */}
        <svg
          aria-hidden="true"
          className="block w-full"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C240,10 480,50 720,40 C960,30 1200,15 1440,25 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

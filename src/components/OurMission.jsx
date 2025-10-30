import React from "react";
import visionHero from "../assets/visionimg.png";

// New mission icon images
import trustIcon from "../assets/trust.png";
import naturalIcon from "../assets/natural.png";
import qualityIcon from "../assets/quality.png";
import healthIcon from "../assets/health.png";

export default function OurMission() {
  return (
    <section className="w-full">
      {/* ====== MISSION (all on white) ====== */}
      <div className="w-full bg-white text-gray-900">
        {/* Mission title */}
        <div className="py-10 sm:py-12">
          <h2 className="text-center text-[clamp(28px,5vw,56px)] font-extrabold tracking-tight">
            OUR MISSION
          </h2>
        </div>

        {/* Pillars row (icons without background) */}
        <div className="mx-auto w-full max-w-6xl px-6 pb-6 sm:pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {/* 1 — Integrity & Trust */}
            <div className="flex items-center gap-3">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center">
                <img
                  src={trustIcon}
                  alt="Integrity & Trust icon"
                  className="h-7 w-7 sm:h-12 sm:w-12 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-[15px] sm:text-xl">
                  Integrity & Trust
                </p>
                <p className="text-[12px]/5 sm:text-[14px]/5 opacity-80">
                  Relationships first
                </p>
              </div>
            </div>

            {/* 2 — Natural Solutions */}
            <div className="flex items-center gap-3">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center">
                <img
                  src={naturalIcon}
                  alt="Natural Solutions icon"
                  className="h-7 w-7 sm:h-12 sm:w-12 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-[15px] sm:text-xl">
                  Natural Solutions
                </p>
                <p className="text-[12px]/5 sm:text-[14px]/5 opacity-80">
                  Sustainable & safe
                </p>
              </div>
            </div>

            {/* 3 — Quality & Detail */}
            <div className="flex items-center gap-3">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center">
                <img
                  src={qualityIcon}
                  alt="Quality & Detail icon"
                  className="h-7 w-7 sm:h-12 sm:w-12 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-[15px] sm:text-xl">
                  Quality & Detail
                </p>
                <p className="text-[12px]/5 sm:text-[14px]/5 opacity-80">
                  Results that shine
                </p>
              </div>
            </div>

            {/* 4 — Health & Safety */}
            <div className="flex items-center gap-3">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center">
                <img
                  src={healthIcon}
                  alt="Health & Safety icon"
                  className="h-7 w-7 sm:h-12 sm:w-12 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-[15px] sm:text-xl">
                  Health & Safety
                </p>
                <p className="text-[12px]/5 sm:text-[14px]/5 opacity-80">
                  Above all else
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission quote */}
        <div className="mx-auto w-full max-w-6xl px-6 pb-10 sm:pb-12">
          <blockquote className="relative">
            <span className="absolute left-0 -top-3 text-6xl sm:text-7xl text-[#a3c585] select-none leading-none pointer-events-none">
              “
            </span>
            <p className="mt-8 sm:mt-6 text-gray-700 italic not-[]:text-lg sm:text-xl md:text-[22px] leading-relaxed text-center px-2 sm:px-6">
              At Roots Cleaning and Organization, we value one thing above all:
              creating a harmonious, precise, and chemical-free space for
              families, individuals, and pets alike. Our company is guided by
              four key principles that help us strive toward our mission. These
              principles include building integrity and trustful relationships
              with clients, using only sustainable and natural solutions,
              delivering attention to detail and high-quality results, and
              prioritizing health and safety above all else. We are committed to
              protecting our clients, their families, and the environment—one
              clean space at a time.
            </p>
            <span className="absolute right-0 -bottom-6 text-6xl sm:text-7xl text-[#a3c585] select-none leading-none pointer-events-none">
              ”
            </span>
          </blockquote>
        </div>
      </div>

      {/* ====== VISION (uniform green, with top + bottom waves) ====== */}
      <section className="relative w-full overflow-hidden">
        {/* TOP green wave (flipped vertically) */}
        <svg
          aria-hidden="true"
          className="-mb-1 block w-full"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <g transform="translate(0,90) scale(1,-1)">
            <path
              d="M0,36 C240,6 480,72 720,56 C960,40 1200,10 1440,30 L1440,0 L0,0 Z"
              fill="#a3c585"
            />
          </g>
        </svg>

        {/* Solid uniform green band */}
        <div className="relative -mt-px bg-[#a3c585]">
          <div className="mx-auto w-full max-w-6xl px-6 pt-8 pb-8 sm:pt-9 sm:pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {/* Left: logo + heading + copy + quote */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-white  text-[clamp(28px,5.8vw,56px)] font-extrabold leading-[0.95] tracking-tight">
                    OUR VISION
                  </h3>
                </div>

                <blockquote className="relative mt-4 max-w-2xl">
                  <span className="pointer-events-none select-none absolute -left-2 -top-2 text-4xl text-white/90 leading-none">
                    “
                  </span>
                  <p className="pl-4 pr-2 italic text-white/100 text-base sm:text-xl leading-relaxed">
                    Our vision is to provide a spotless, stress-free space for
                    our clients, all while using products that are completely
                    non-toxic and natural. At Roots Cleaning and Organization,
                    we want our clients—families, children, and pets— to be able
                    to use 100% of their space without the dangers of chemicals
                    or products that could potentially make them ill.
                  </p>
                  <span className="pointer-events-none select-none absolute -right-1 -bottom-2 text-4xl text-white/90 leading-none">
                    ”
                  </span>
                </blockquote>
              </div>

              {/* Right: image */}
              <div className="relative">
                <div className="h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden shadow-xl">
                  <img
                    src={visionHero}
                    alt="Pristine kitchen representing our vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM green-to-white wave */}
          <svg
            aria-hidden="true"
            className="block w-full"
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C240,80 480,0 720,18 C960,36 1200,90 1440,50 L1440,70 L0,70 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </section>
  );
}

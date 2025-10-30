import React from "react";
import aboutBanner from "../assets/aboutbanner.png";
import rootslogo from "../assets/rootslogo.png";

export default function About() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative h-[68vh] min-h-[460px] w-full overflow-hidden">
          <img
            src={aboutBanner}
            alt="Cleaning supplies on counter"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/55" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#7f966a] drop-shadow">
              About Roots Cleaning &amp; Organization
            </h1>

            <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-900 leading-relaxed">
              Our team at Roots Cleaning and Organization is composed of
              dedicated and hardworking individuals. Our two co owners, Lily
              Thompson and Jake Bush, experienced their first big clean-up on a
              hoarder property they purchased together. It took two full days to
              clean out the property, and they found the process to be very
              rewarding.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-[#FFD8F0] px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Book with us today
              </a>
            </div>
          </div>

          <svg
            className="absolute -bottom-px left-0 w-full"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C240,112 480,0 720,32 C960,64 1200,144 1440,96 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-8">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-slate-700 text-base sm:text-xl leading-relaxed space-y-6">
            <p>
              That experience inspired them to come together and make something
              out of their newfound skill, and together they founded Roots
              Cleaning and Organization.
            </p>
            <p>
              Today, our team is made up of dedicated and hardworking
              individuals who take pride in every home and business we care for.
              We believe that a clean space should also be a safe and healthy
              one, which is why we use only natural products and reusable
              materials in all of our services.
            </p>
            <p>
              Our team has a devoted passion for nature and the environment. It
              is important to us to provide the best quality of service while
              assuring your space remains free of any unwanted chemicals or
              hazards.
            </p>
            <p>
              At Roots, we’re committed to the highest quality of service while
              keeping your space free of harsh chemicals—and full of balance,
              freshness, and peace of mind.
            </p>

            {/* Logo under the text */}
            <div className="mt-10 flex justify-center">
              <img
                src={rootslogo}
                alt="Roots Cleaning & Organization logo"
                className="h-20 sm:h-24 w-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

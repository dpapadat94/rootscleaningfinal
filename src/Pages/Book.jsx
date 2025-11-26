import React, { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#a3c585]/40 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#4e7330] mb-4">
          Booking Form Temporarily Unavailable
        </h1>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          Our online scheduling system is currently undergoing maintenance.
          Please email us to request a booking or ask any questions.
        </p>

        <div className="bg-[#f6fbf2] border border-[#a3c585] rounded-xl py-4 px-6 mb-6">
          <p className="text-sm text-gray-600  tracking-wide mb-1">
            Email us at
          </p>
          <a
            href="mailto:info@rootscleaningllc.com"
            className="block text-xl sm:text-2xl font-semibold text-[#4e7330] hover:underline transition"
          >
            info@rootscleaningllc.com
          </a>
        </div>

        <p className="text-sm text-gray-500">
          We apologize for the inconvenience and appreciate your patience.
        </p>
      </div>
    </section>
  );
}

/* ========================================================================
   OLD BOOKING FORM CODE (TEMPORARILY DISABLED)
   Keep this here so you can restore it later – it has NO effect right now.
   ========================================================================

import React, { useEffect } from "react";

export function LegacyBookForm() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMessage = (event) => {
      if (event.origin.includes("bookingkoala.com") && event.data.height) {
        const iframe = document.getElementById("bk-embed");
        if (iframe) iframe.style.height = `${event.data.height + 350}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="bg-[#a3c585]/20 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold text-[#4e7330] mb-3">
          Book Now or Schedule Your Free Estimate
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto px-4 text-base sm:text-lg">
          Choose between residential cleaning or commercial/construction
          estimates below. Fill in your contact details and preferred date—no
          payment required.
        </p>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-10">
          <iframe
            id="bk-embed"
            src="https://rootscleaningllc.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false&banner=false"
            title="Roots Cleaning Booking Form"
            width="100%"
            height="2000"
            style={{
              border: "none",
              display: "block",
              margin: "0 auto",
              overflowY: "auto",
              transition: "height 0.3s ease",
            }}
            scrolling="yes"
          ></iframe>

          <script
            src="https://rootscleaningllc.bookingkoala.com/resources/embed.js"
            defer
          ></script>
        </div>
      </div>
    </section>
  );
}

*/

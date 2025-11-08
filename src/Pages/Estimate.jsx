import React, { useEffect } from "react";

export default function Estimate() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMessage = (event) => {
      if (event.origin.includes("bookingkoala.com") && event.data.height) {
        const iframe = document.getElementById("bk-estimate");
        if (iframe) iframe.style.height = `${event.data.height + 350}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-[#a3c585]/20 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold text-[#4e7330] mb-3">
          Schedule a Free Estimate
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto px-4 text-base sm:text-lg">
          Request a free quote for your commercial or construction cleaning
          needs. Fill out your contact details and preferred date below — no
          payment required.
        </p>
      </div>

      {/* EMBEDDED ESTIMATE FORM */}
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10"
          style={{
            overflow: "auto",
            maxHeight: "90vh",
            paddingBottom: "300px", // prevents bottom cutoff
          }}
        >
          <iframe
            id="bk-estimate"
            src="https://rootscleaningllc.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false&banner=false"
            title="Roots Cleaning Estimate Form"
            width="100%"
            height="3400"
            style={{
              border: "none",
              display: "block",
              margin: "0 auto",
              overflow: "visible",
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

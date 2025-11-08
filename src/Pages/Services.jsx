import React, { useMemo, useState } from "react";
import { PiCheckLight, PiMapPinLight, PiClockLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import rootslogo from "../assets/rootslogo.png";
import homeIcon from "../assets/homeicon.png";

const SERVICE_LISTS = {
  residential: [
    "One Time Deep Clean",
    "Regular Maintenance",
    "Organization Service",
    "Clutter Removal Service",
  ],
  commercial: ["Office Regular Maintenance", "Warehouse Regular Maintenance"],
  construction: ["Post-construction Cleanup"],
};

const PACKAGES = {
  residential: [
    {
      name: "One Time Deep Clean",
      desc: "This service is designed to provide a detailed, top-to-bottom clean that refreshes and restores your entire home. Including a thorough cleaning of all bedrooms, bathrooms, kitchen, and living spaces. Dusting, vacuuming, and mopping of all accessible surfaces and floors. Wiping down baseboards, doors, and light switches. Deep cleaning of kitchen appliances, counters, and cabinets (exterior). Scrubbing and sanitizing bathroom fixtures, tiles, and mirrors. Attention to overlooked areas.",
    },
    {
      name: "Residential Maintenance",
      desc: "Our regular maintenance service helps keep your home consistently clean, comfortable, and stress-free. Services can be scheduled weekly, biweekly, or monthly, depending on your needs and lifestyle. This service includes all the areas listed in the one-time deep clean, with a focus on upkeep and maintaining freshness. Regular maintenance is perfect for busy families, professionals, or anyone who wants to enjoy a consistently clean home without the hassle. Add-ons can be included for an extra charge, such as laundry services, interior window cleaning, light organization, or deep cleaning specific rooms.",
    },
    {
      name: "Organization Service",
      desc: "Our organization service is designed to bring clarity, order, and functionality to your space. We don’t just tidy up—we create sustainable systems that make your home easier to maintain. This service includes: Assessing your space and decluttering items where needed. Purchasing adequate storage solutions tailored to your style and needs. Ensuring each item has a designated, practical place. Creating easy-to-follow systems for long-term organization. Labeling, categorizing, and arranging items for accessibility and efficiency. Organizing closets, pantries, offices, garages, or any other areas of your home",
    },
    {
      name: "Clutter Removal",
      desc: "Our clutter removal service is designed to bring peace, order, and functionality back to your space. Whether you’re tackling a few highly disordered areas or an entire home, we provide compassionate, judgment-free assistance to help you reclaim your environment. This service includes: Sorting, categorizing, and removing unwanted or unnecessary items. Hauling away trash, donation items, and recyclables. Light cleaning of cleared areas to restore freshness and usability. Assistance with decision-making on what to keep, donate, or discard. Coordination with donation centers or disposal services (if requested). We approach each project with care, confidentiality, and respect—helping you create a cleaner, calmer home where every item has its place.",
    },
  ],
  commercial: [
    {
      name: "Office Regular Maintenance",
      desc: "The goal of our office regular maintenance service is to ensure a consistently clean, organized, and professional workspace. We tailor each cleaning plan to the unique needs of your business or office environment. Services can be scheduled for a nightly quick clean, weekly or biweekly service, or monthly maintenance, depending on the size and traffic of your workspace. This service includes: Dusting and wiping down desks, counters, and office furniture. Sanitizing high-touch areas such as door handles, light switches, and shared surfaces. Vacuuming, sweeping, and mopping of floors. Emptying trash bins and replacing liners. Cleaning and restocking restroom supplies. Kitchen or breakroom cleaning, including sinks, counters, and appliances (if applicable). Optional add-ons such as indoor window cleaning, carpet shampooing, detailed deep cleans, etc",
    },
    {
      name: "Warehouse Regular Maintenance",
      desc: " Our warehouse regular maintenance service is designed to support the efficiency, safety, and productivity of your workspace by maintaining a clean and organized environment. A tidy warehouse not only improves workflow but also reduces hazards and helps your team operate more effectively. We offer nightly clean-ups, as well as weekly, biweekly, or monthly maintenance plans tailored to the unique needs of your facility. This service includes: Sweeping, vacuuming, and mopping of warehouse floors. Removal of debris, packing materials, and trash. Wiping down workstations, shelving, and equipment surfaces. Cleaning of employee areas such as breakrooms, restrooms, and offices. Sanitizing high-touch areas to maintain a safe and healthy workspace. Organizing and straightening commonly used areas to support efficiency. Optional add-ons such as high dusting, detailed deep cleaning, or hauling unwanted waste",
    },
  ],
  construction: [
    {
      name: "Post-Construction Clean",
      desc: "Our post-construction cleanup service transforms newly built or renovated spaces into move-in ready environments. Includes debris removal, detailed surface cleaning, window cleaning, and polishing fixtures to ensure a spotless finish. our services include: This service includes: Hauling and proper disposal of construction debris, dust, and waste materials. Thorough cleaning of all floors, walls, and baseboards to remove fine dust and residue. Wiping down cabinets, countertops, doors, and trim. Cleaning interior windows, frames, and tracks. Sanitizing bathrooms and kitchens (if applicable). Polishing fixtures, vents, and appliances. Final detailing to ensure every surface is spotless and ready for use or staging",
    },
  ],
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("residential");
  const [expanded, setExpanded] = useState({});
  const [slide, setSlide] = useState(0);

  const chunks = useMemo(() => {
    const items = PACKAGES[activeCategory] || [];
    const out = [];
    const cardsPerSlide = window.innerWidth < 768 ? 1 : 2; // 1 card on mobile, 2 on desktop
    for (let i = 0; i < items.length; i += cardsPerSlide)
      out.push(items.slice(i, i + cardsPerSlide));
    return out;
  }, [activeCategory]);

  const maxSlide = Math.max(0, chunks.length - 1);

  const toggleReadMore = (idxGlobal) =>
    setExpanded((prev) => ({ ...prev, [idxGlobal]: !prev[idxGlobal] }));

  const nextSlide = () => setSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  return (
    <section className="bg-gray-50">
      {/* ===== INDIVIDUAL SERVICES ===== */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#679d38] mb-4 sm:mb-6">
              Explore our individual services
            </h2>

            <div className="space-y-6 sm:space-y-8 text-gray-900">
              {Object.entries(SERVICE_LISTS).map(([key, services]) => (
                <div key={key}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 capitalize">
                    {key.replace("-", " ")}
                  </h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
                    {services.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
                      >
                        <PiCheckLight className="text-lg sm:text-xl text-[#a3c585]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-700 leading-snug sm:leading-normal">
              <span className="font-semibold">Note:</span> All services require
              an initial estimate and a first-time deep clean before scheduling
              regular maintenance.
            </p>
          </div>

          {/* RIGHT CARD */}
          <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-8 text-center flex flex-col items-center">
            <img
              src={rootslogo}
              alt="Roots Cleaning Logo"
              className="h-16 sm:h-20 w-auto mb-3 sm:mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Roots Cleaning
            </h3>

            <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <PiMapPinLight className="text-xl sm:text-2xl text-[#a3c585]" />
                <span>Charlotte, NC 28226</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <PiClockLight className="text-xl sm:text-2xl text-[#a3c585]" />
                <span>Mon–Fri 8:00 AM — 5:00 PM</span>
              </div>
            </div>

            <Link
              to="/book"
              className="mt-6 w-full inline-block rounded-2xl border-2 border-[#a3c585] px-6 py-3 sm:py-4 text-center font-semibold text-gray-900 hover:bg-[#f6fbf2] transition"
            >
              Book Now
            </Link>
          </aside>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
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

      {/* ===== PACKAGES SECTION ===== */}
      <div className="bg-[#a3c585]">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-10 pb-14 relative">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center text-white mb-6">
            Roots Cleaning Packages
          </h2>

          {/* CATEGORY TOGGLE */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {Object.keys(PACKAGES).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setExpanded({});
                  setSlide(0);
                  setActiveCategory(cat);
                }}
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

          {/* CAROUSEL */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {chunks.map((pair, chunkIdx) => (
                  <div
                    key={chunkIdx}
                    className="w-full flex-shrink-0 px-1 sm:px-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {pair.map((pkg, i) => {
                        const globalIdx = chunkIdx * 2 + i;
                        const isExpanded = !!expanded[globalIdx];
                        const limit = 240;
                        const short =
                          pkg.desc.length > limit && !isExpanded
                            ? pkg.desc.slice(0, limit) + "..."
                            : pkg.desc;

                        const isResidential = activeCategory === "residential";
                        const buttonLabel = isResidential
                          ? "Book Now"
                          : "Free Estimate";
                        const buttonLink = isResidential ? "/book" : "/book";

                        return (
                          <div
                            key={pkg.name}
                            className="bg-[#FAEFE6] rounded-2xl shadow-lg shadow-black/10 border border-black/5 px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-center text-center"
                          >
                            <img
                              src={homeIcon}
                              alt=""
                              aria-hidden="true"
                              className="mb-3 sm:mb-4 h-14 sm:h-16 w-14 sm:w-16 object-contain"
                            />
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                              {pkg.name}
                            </h3>
                            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                              {short}
                              {pkg.desc.length > limit && (
                                <span
                                  className="text-[#6BA243] cursor-pointer font-medium"
                                  onClick={() => toggleReadMore(globalIdx)}
                                >
                                  {isExpanded ? " Show less" : " Read more"}
                                </span>
                              )}
                            </p>
                            <Link
                              to={buttonLink}
                              className="mt-5 sm:mt-6 w-full inline-flex items-center justify-center rounded-md bg-[#6BA243] text-white font-semibold py-2.5 sm:py-3 hover:brightness-95 transition"
                            >
                              {buttonLabel}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ARROWS */}
            {chunks.length > 1 && (
              <>
                <button
                  aria-label="Previous"
                  onClick={prevSlide}
                  className="absolute top-1/2 -translate-y-1/2 left-1 sm:-left-6 bg-white text-gray-800 rounded-full shadow-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  onClick={nextSlide}
                  className="absolute top-1/2 -translate-y-1/2 right-1 sm:-right-6 bg-white text-gray-800 rounded-full shadow-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

import React from "react";

const TESTIMONIALS = [
  {
    name: "Alex R.",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat sapien non arcu feugiat, ac imperdiet lacus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "Morgan S.",
    blurb:
      "Nunc pulvinar, sapien non gravida posuere, ligula neque pretium sem, non pharetra erat turpis vel magna. Sed facilisis lorem vitae velit suscipit, in luctus lorem euismod.",
  },
  {
    name: "Taylor P.",
    blurb:
      "Mauris luctus, augue at dictum cursus, urna arcu elementum mi, sit amet tempus leo lacus in risus. Curabitur tincidunt, velit in varius blandit, justo mi volutpat quam, sed dictum nibh eros et nibh.",
  },
  // You can keep more items, but only the first 3 are rendered
];

function Stars({ count = 5 }) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${
            i < count ? "fill-amber-400" : "fill-gray-200"
          }`}
          aria-hidden="true"
        >
          <path d="M10 15.27 15.18 18l-1.64-5.03L18 9.24l-5.19-.04L10 4 7.19 9.2 2 9.24l4.46 3.73L4.82 18 10 15.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const visible = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-3xl font-semibold text-gray-900">
          What our clients are saying
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(({ name, blurb }, idx) => {
            const initials = name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <article
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className="h-14 w-14 rounded-full bg-[#a3c585] text-white grid place-items-center text-base font-semibold shadow-sm">
                  {initials}
                </div>

                {/* Stars */}
                <div className="mt-3">
                  <Stars count={5} />
                </div>

                {/* Quote */}
                <p className="mt-4 text-gray-700 leading-relaxed">{blurb}</p>

                {/* Name */}
                <div className="mt-5 text-sm font-medium text-gray-900">
                  {name}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

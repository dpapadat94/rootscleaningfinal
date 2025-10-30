import React, { useState } from "react";
import rootslogo from "../assets/rootslogo.png";
import contactBg from "../assets/contactimg.png";

export default function Contact() {
  const [status, setStatus] = useState({ ok: false, error: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.company.value) {
      setStatus({ ok: false, error: "Spam detected." });
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      subject: form.subject.value.trim(),
      serviceType: form.serviceType.value,
      message: form.message.value.trim(),
      date: form.date.value,
      time: form.time.value,
    };

    if (!data.name || !data.email || !data.message) {
      setStatus({ ok: false, error: "Please fill name, email, and message." });
      return;
    }

    setStatus({ ok: true, error: "" });
    form.reset();
  }

  const fieldClass =
    "mt-1 w-full h-12 rounded-lg border-2 border-gray-300 bg-white/95 px-4 text-base " +
    "focus:border-[#a3c585] focus:ring-2 focus:ring-[#a3c585]";

  return (
    <main
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* soft overlay above the background */}
      <div className="absolute inset-0 bg-white/60 z-0" />

      {/* everything else sits above */}
      <div className="relative z-10">
        {/* Header / Logo */}
        <section className="flex items-center justify-center py-12 sm:py-16">
          <img
            src={rootslogo}
            alt="Roots Cleaning Logo"
            className="h-24 sm:h-28 w-auto"
          />
        </section>

        {/* Contact Form */}
        <section className="pb-16">
          <div className="mx-auto w-full max-w-4xl px-6">
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-[2px] bg-[#f3f3f3] rounded-2xl border-2 border-gray-300 p-6 sm:p-8 shadow"
              noValidate
            >
              {/* Status messages */}
              <div aria-live="polite" className="mb-4">
                {status.error && (
                  <p className="text-sm text-red-600">{status.error}</p>
                )}
                {status.ok && (
                  <p className="text-sm text-green-700">
                    Thanks! Your message has been sent. We’ll get back to you
                    soon.
                  </p>
                )}
              </div>

              {/* Honeypot (hidden) */}
              <label className="sr-only" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={fieldClass}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="(704) 266-1150"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={fieldClass}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className={fieldClass}
                    defaultValue="residential"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Preferred Time
                    </label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="mt-1 w-full rounded-lg border-2 border-gray-300 bg-white/95 px-4 py-3 text-base focus:border-[#a3c585] focus:ring-2 focus:ring-[#a3c585] min-h-[140px]"
                    placeholder="Tell us about your space, timing, and any priorities."
                    required
                  />
                </div>

                <div className="sm:col-span-2 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#a3c585] focus:ring-[#a3c585]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    You may contact me about scheduling and service details.
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600">
                  Prefer to talk? Call us at{" "}
                  <a href="tel:+17042661150" className="underline">
                    (704) 266-1150
                  </a>
                </p>
                <button
                  type="submit"
                  className="inline-block px-8 py-3 rounded-lg bg-[#FFD8F0] text-black font-medium hover:bg-pink-300 transition-colors"
                >
                  Send Message
                </button>
              </div>

              <div className="mt-10 border-top border-gray-200 pt-6 text-center">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Address:</span> 123 Business
                  Drive, Charlotte, NC 28269
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

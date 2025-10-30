import React from "react";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const linkBase = "px-8 py-2 rounded-lg text-md font-medium";
const linkActiveBase = "font-bold"; // keep bolding for active

export default function Header() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8); // threshold
        raf = 0;
      });
    };
    onScroll(); // initialize on first render
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Solid if: not on home, or scrolled, or mobile menu open
  const solid = !onHome || scrolled || open;

  // Idle (non-active) link styles swap with background state
  const linkIdle = solid
    ? "text-gray-900 hover:bg-white/40"
    : "text-black hover:bg-white/20";

  // Active link gets the "hover white bg" effect by default
  const linkActive = solid
    ? `${linkActiveBase} bg-white/40 text-gray-900`
    : `${linkActiveBase} bg-white/20 text-black`;

  return (
    <>
      {/* Fixed BELOW the 36px topbar; transparent on home/top, solid elsewhere */}
      <header
        className={`fixed top-9 left-0 right-0 z-40 transition-all duration-300
          ${solid ? "bg-[#a3c585] shadow-md" : "bg-transparent"}
        `}
      >
        <div className="mx-auto w-full max-w-6xl px-4 h-16 flex items-center justify-center">
          {/* Centered nav (desktop) */}
          <nav className="hidden md:flex items-center gap-4">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/services", label: "Cleaning Services" },
              { to: "/organize", label: "Organizing" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger (right) */}
          <button
            className={`absolute right-4 md:hidden inline-flex items-center justify-center rounded-lg p-2 transition
              ${
                solid
                  ? "text-gray-900 hover:bg-white/40"
                  : "text-black hover:bg-white/20"
              }
            `}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu panel (sits directly below the header) */}
      {open && (
        <nav
          className="fixed left-0 right-0 z-30 bg-[#e1f3c3] md:hidden shadow-sm"
          style={{ top: "100px" }} // 36px topbar + 64px header = 100px
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-3 space-y-1 text-center">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/services", label: "Cleaning Services" },
              { to: "/organize", label: "Organizing" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${linkBase} ${
                    isActive
                      ? "font-bold bg-white/50 text-gray-900"
                      : "text-gray-900 hover:bg-white/50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

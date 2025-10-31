// src/App.jsx
import React from "react";

import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Topbar />
        <Header />
        {/* Top padding = topbar (36px) + header (64px) ≈ 100px */}
        <main className="pt-[100px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

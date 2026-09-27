import React from "react";
import { Header } from "@/components/Header";
import { ResumeDocument } from "@/components/ResumeDocument";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900">
      {/* Top Navbar for actions (Download PDF, Print) */}
      <Header />

      {/* Main Resume Document */}
      <div className="py-2 sm:py-6">
        <ResumeDocument />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

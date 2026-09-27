import React from "react";
import { resumeData } from "@/data/resumeData";

export const Footer: React.FC = () => {
  return (
    <footer className="no-print mt-12 border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
      <div className="mx-auto max-w-4xl px-4">
        <p className="font-medium text-slate-700">
          {resumeData.personalInfo.name} &bull; {resumeData.personalInfo.title}
        </p>
        <p className="mt-1">
          Primary URL:{" "}
          <a
            href="https://resume.divyanshuvarshney.online"
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://resume.divyanshuvarshney.online
          </a>
        </p>
      </div>
    </footer>
  );
};

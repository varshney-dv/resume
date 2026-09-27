"use client";

import React, { useState } from "react";
import { resumeData } from "@/data/resumeData";

export const PdfSection: React.FC = () => {
  const [showEmbed, setShowEmbed] = useState(false);
  const { pdfConfig } = resumeData;

  return (
    <section className="no-print mx-auto my-8 max-w-4xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-slate-900 px-6 py-5 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                Original Resume PDF Document
              </h2>
            </div>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              {pdfConfig.description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-0">
            <button
              onClick={() => setShowEmbed(!showEmbed)}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-700 hover:text-white sm:text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showEmbed ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a9.04 9.04 0 012.122-.363c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                )}
              </svg>
              <span>{showEmbed ? "Hide Embedded PDF" : "Preview PDF"}</span>
            </button>

            <a
              href={pdfConfig.pdfUrl}
              download={pdfConfig.filename}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 sm:text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer toggle */}
        {showEmbed && (
          <div className="border-t border-slate-200 bg-slate-100 p-4">
            <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-inner">
              <iframe
                src={`${pdfConfig.pdfUrl}#toolbar=0`}
                className="h-[600px] w-full"
                title="Divyanshu Varshney Resume PDF"
              />
            </div>
            <p className="mt-2 text-center text-xs text-slate-500">
              If the preview does not load in your browser, you can directly{" "}
              <a
                href={pdfConfig.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                open the PDF file in a new tab
              </a>
              .
            </p>
          </div>
        )}

        {/* Quick config explanation for user */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            <strong className="font-semibold text-slate-700">PDF File location:</strong>{" "}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-slate-800">
              public/resume.pdf
            </code>
          </span>
          <span className="text-slate-400">
            Easily update <code className="font-mono">resumeData.ts</code> to point to any new PDF.
          </span>
        </div>
      </div>
    </section>
  );
};

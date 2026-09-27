import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import { resumeData } from "@/data/resumeData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resume.divyanshuvarshney.online"),
  title: "Divyanshu Varshney | Software Engineer",
  description:
    "Official web resume of Divyanshu Varshney, Computer Science & Engineering student at NIT Jalandhar, Web Developer, and Competitive Programmer.",
  keywords: [
    "Divyanshu Varshney",
    "Software Engineer",
    "Web Developer",
    "NIT Jalandhar",
    "MERN Stack",
    "Next.js",
    "React",
    "Full Stack Developer",
    "Competitive Programming",
    "Resume",
  ],
  authors: [{ name: "Divyanshu Varshney", url: "https://divyanshuvarshney.online" }],
  creator: "Divyanshu Varshney",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Divyanshu Varshney | Software Engineer",
    description:
      "Official web resume of Divyanshu Varshney. CSE student at NIT Jalandhar, Web Developer Intern at LETSCMS, MERN & AI platform developer.",
    url: "https://resume.divyanshuvarshney.online",
    siteName: "Divyanshu Varshney Resume",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Varshney | Software Engineer",
    description:
      "Official web resume of Divyanshu Varshney. CSE student at NIT Jalandhar, Web Developer Intern at LETSCMS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.personalInfo.name,
    jobTitle: resumeData.personalInfo.title,
    telephone: resumeData.personalInfo.phone,
    email: resumeData.personalInfo.email,
    url: "https://resume.divyanshuvarshney.online",
    sameAs: [
      resumeData.personalInfo.links.linkedin,
      resumeData.personalInfo.links.github,
      resumeData.personalInfo.links.portfolio,
      resumeData.personalInfo.links.leetcode,
      resumeData.personalInfo.links.codeforces,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: resumeData.education.institution,
    },
    worksFor: {
      "@type": "Organization",
      name: resumeData.experience[0]?.company || "",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} min-h-screen bg-slate-100/70 text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

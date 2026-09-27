import React from "react";

export const ResumeDocument: React.FC = () => {
  return (
    <article className="resume-paper font-latex text-[10pt] text-[#1f2937] leading-[1.05] selection:bg-blue-100">
      {/* HEADER SECTION */}
      <header className="text-center">
        {/* Name Title: \fontsize{26}{28}\selectfont\bfseries DIVYANSHU VARSHNEY */}
        <h1 className="text-[20pt] sm:text-[26pt] font-bold text-[#111827] leading-tight sm:leading-[28pt] tracking-normal">
          DIVYANSHU VARSHNEY
        </h1>

        {/* Contact info (Phone & Email with Icons): \vspace{2pt} {\small ...} */}
        <div className="mt-[2pt] text-[9pt] sm:text-[9.5pt] text-[#1f2937] flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-1">
          <span className="inline-flex items-center">
            <i className="fas fa-phone text-[8.5pt] mr-1.5 text-[#1f2937]"></i>
            +91-8077925406
          </span>
          <span className="inline-flex items-center">
            <i className="fas fa-envelope text-[8.5pt] mr-1.5 text-[#1f2937]"></i>
            <a href="mailto:divyanshu.varshney.work@gmail.com" className="latex-link">
              divyanshu.varshney.work@gmail.com
            </a>
          </span>
        </div>

        {/* Links bar with icons: \vspace{2pt} {\small ...} */}
        <div className="mt-[2pt] text-[9pt] sm:text-[9.5pt] text-[#1f2937] flex justify-center items-center flex-wrap gap-y-1">
          <a
            href="https://linkedin.com/in/divyanshu-varshney"
            target="_blank"
            rel="noopener noreferrer"
            className="latex-link inline-flex items-center"
          >
            <i className="fab fa-linkedin text-[9pt] mr-1 text-[#005580]"></i>
            LinkedIn
          </a>
          <span className="mx-1.5 sm:mx-2.5 text-[#1f2937]">|</span>

          <a
            href="https://github.com/varshney-dv"
            target="_blank"
            rel="noopener noreferrer"
            className="latex-link inline-flex items-center"
          >
            <i className="fab fa-github text-[9pt] mr-1 text-[#005580]"></i>
            GitHub
          </a>
          <span className="mx-1.5 sm:mx-2.5 text-[#1f2937]">|</span>

          <a
            href="https://divyanshuvarshney.online"
            target="_blank"
            rel="noopener noreferrer"
            className="latex-link inline-flex items-center"
          >
            <i className="fas fa-globe text-[8.5pt] mr-1 text-[#005580]"></i>
            Portfolio
          </a>
          <span className="mx-1.5 sm:mx-2.5 text-[#1f2937]">|</span>

          <a
            href="https://leetcode.com/u/code_with_dv"
            target="_blank"
            rel="noopener noreferrer"
            className="latex-link inline-flex items-center"
          >
            <i className="fas fa-code text-[8.5pt] mr-1 text-[#005580]"></i>
            LeetCode
          </a>
          <span className="mx-1.5 sm:mx-2.5 text-[#1f2937]">|</span>

          <a
            href="https://codeforces.com/profile/code_with_dv"
            target="_blank"
            rel="noopener noreferrer"
            className="latex-link inline-flex items-center"
          >
            <i className="fas fa-terminal text-[8.5pt] mr-1 text-[#005580]"></i>
            Codeforces
          </a>
        </div>
      </header>

      {/* \vspace{2pt} \hrule \vspace{0pt} */}
      <hr className="mt-[2pt] mb-0 border-t border-[#D1D5DB]" />

      {/* MAIN CONTENT */}
      <main>
        {/* EDUCATION */}
        <section className="break-inside-avoid">
          <h2 className="mt-[4pt] mb-[1pt] text-[14.4pt] font-bold text-[#111827] leading-tight">
            Education
          </h2>

          <div className="text-[10pt] leading-[1.05]">
            <div className="flex justify-between items-baseline">
              <strong className="font-bold text-[#1f2937]">
                Dr. B. R. Ambedkar National Institute of Technology, Jalandhar
              </strong>
              <span className="text-[#1f2937]">Jul 2023 – Present</span>
            </div>
            <div className="flex justify-between items-baseline mt-[1pt]">
              <span className="text-[#1f2937]">
                Bachelor of Technology in Computer Science and Engineering
              </span>
              <span className="text-[#1f2937]">CGPA: 8.7/10</span>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="break-inside-avoid">
          <h2 className="mt-[4pt] mb-[1pt] text-[14.4pt] font-bold text-[#111827] leading-tight">
            Professional Experience
          </h2>

          <div>
            <div className="flex justify-between items-baseline">
              <strong className="text-[12pt] font-bold text-[#111827]">
                LETSCMS PRIVATE LIMITED
              </strong>
              <span className="text-[10pt] text-[#1f2937]">May 2026 – Jul 2026</span>
            </div>

            <div className="flex justify-between items-baseline mt-[1pt]">
              <span className="italic text-[#1f2937]">Web Developer Intern</span>
              <span className="text-[10pt] text-[#1f2937]">Aligarh, Uttar Pradesh</span>
            </div>

            <div className="mt-0 text-[8pt] text-[#6B7280]">
              Web Development | Business Applications | REST APIs | MySQL | API Testing | Process Automation | Agile Development
            </div>

            <ul className="latex-itemize mt-[1pt]">
              <li>
                <strong>Developed and integrated an automated notification system</strong> for a client-facing school website, streamlining user communication and reducing manual effort in sending notifications.
              </li>
              <li>
                Contributed to frontend development and <strong>RESTful API testing</strong>, using Postman to debug functional issues and improve application reliability and user experience.
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="mt-[4pt] mb-[1pt] text-[14.4pt] font-bold text-[#111827] leading-tight">
            Projects
          </h2>

          <div className="space-y-[2pt]">
            {/* Project 1: VK Hospital */}
            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <strong className="text-[12pt] font-bold text-[#111827]">
                  VK Hospital – AI-Powered Healthcare Management Platform
                </strong>
                <div className="text-[10pt] flex items-center gap-x-3">
                  <a
                    href="https://hospital.divyanshuvarshney.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link font-bold"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/varshney-dv/VK_HOSPITAL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link inline-flex items-center"
                  >
                    <i className="fab fa-github text-[9pt] mr-1 text-[#005580]"></i>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="mt-[2pt] text-[8pt] text-[#6B7280]">
                MERN Stack | OpenAI API | Gemini API | Razorpay | Cloudinary
              </div>

              <ul className="latex-itemize mt-[1pt]">
                <li>
                  Developed a full-stack healthcare management platform using the MERN stack, enabling appointment scheduling, workflow management, and coordination across patients, doctors, and administrators.
                </li>
                <li>
                  Integrated <strong>OpenAI and Gemini APIs</strong> for AI-powered symptom analysis, generating specialist recommendations to support patient decision-making and reduce manual effort.
                </li>
                <li>
                  Implemented <strong>role-based dashboards</strong> for appointments, payments, doctor availability, and operational metrics, improving visibility into healthcare operations.
                </li>
              </ul>
            </div>

            {/* Project 2: SeatSetGo */}
            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <strong className="text-[12pt] font-bold text-[#111827]">
                  SeatSetGo – Smart JoSAA Counselling Platform
                </strong>
                <div className="text-[10pt] flex items-center gap-x-3">
                  <a
                    href="https://counselling.divyanshuvarshney.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link font-bold"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/varshney-dv/SeatSetGo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link inline-flex items-center"
                  >
                    <i className="fab fa-github text-[9pt] mr-1 text-[#005580]"></i>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="mt-[2pt] text-[8pt] text-[#6B7280]">
                MERN Stack | MongoDB | SQLite | JWT | Google OAuth
              </div>

              <ul className="latex-itemize mt-[1pt]">
                <li>
                  Developed a MERN-based JoSAA counselling platform analyzing five years of admission data to provide data-driven college selection recommendations.
                </li>
                <li>
                  Optimized database retrieval using indexed MongoDB and SQLite, improving prediction performance for large-scale counselling queries and supporting <strong>90,000+ prediction requests</strong>.
                </li>
              </ul>
            </div>

            {/* Project 3: WatchWise */}
            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <strong className="text-[12pt] font-bold text-[#111827]">
                  WatchWise – AI Video Safety Moderation Platform
                </strong>
                <div className="text-[10pt] flex items-center gap-x-3">
                  <a
                    href="http://watchwise.divyanshuvarshney.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link font-bold"
                  >
                    Live
                  </a>
                  <a
                    href="https://huggingface.co/spaces/code37dv/watchwise/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latex-link inline-flex items-center"
                  >
                    <i className="fab fa-github text-[9pt] mr-1 text-[#005580]"></i>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="mt-[2pt] text-[8pt] text-[#6B7280]">
                FastAPI | ResNet-50 | YOLOv8 | OpenCV
              </div>

              <ul className="latex-itemize mt-[1pt]">
                <li>
                  Developed an AI-powered video moderation platform using FastAPI, YOLOv8, ResNet-50, and OpenCV to automate video content analysis.
                </li>
                <li>
                  Reduced video processing time by nearly <strong>66%</strong> through optimized preprocessing, workflow optimization, and efficient resource utilization.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="break-inside-avoid">
          <h2 className="mt-[4pt] mb-[1pt] text-[14.4pt] font-bold text-[#111827] leading-tight">
            Technical Skills
          </h2>

          <table className="w-full border-collapse text-[10pt]">
            <tbody>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Programming Languages
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  C, C++, Python, JavaScript, TypeScript
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Web Development
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  React.js, Next.js, Node.js, Express.js, FastAPI, HTML5, CSS3, Tailwind CSS
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Backend &amp; APIs
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  RESTful APIs, JWT Authentication, Google OAuth, API Integration, API Testing
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Databases
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  MongoDB, MySQL, SQLite
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Machine Learning
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  NumPy, Pandas, Scikit-learn, Feature Engineering, Supervised Learning, Unsupervised Learning, Regression, Classification, Decision Trees, Random Forest, SVM, KNN, PCA
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Generative AI
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  OpenAI API, Gemini API, Retrieval-Augmented Generation (RAG), Prompt Engineering
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Cloud &amp; Tools
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  AWS, EC2, Hugging Face Spaces, Git, GitHub, Postman, Vercel, Render, Cloudinary, Razorpay
                </td>
              </tr>
              <tr>
                <td className="w-[1.75in] pr-[10pt] pb-[2pt] font-bold text-[#111827] align-top whitespace-nowrap">
                  Coursework
                </td>
                <td className="pb-[2pt] text-[#1f2937] align-top">
                  Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ACHIEVEMENTS & LEADERSHIP */}
        <section className="break-inside-avoid">
          <h2 className="mt-[4pt] mb-[1pt] text-[14.4pt] font-bold text-[#111827] leading-tight">
            Achievements &amp; Leadership
          </h2>

          <ul className="latex-itemize mt-[1pt]">
            <li>
              <strong>Competitive Programming Lead, GDG NIT Jalandhar:</strong> Mentored <strong>100+ students</strong>, organized coding contests, and coordinated technical initiatives and cross-functional teams.
            </li>
            <li>
              <strong>Co-Secretary, PACE (CSE Society):</strong> Coordinated departmental technical events, collaborated with faculty members, and managed student teams.
            </li>
            <li>
              <strong>Competitive Programming:</strong> Solved <strong>1500+ algorithmic problems</strong>; achieved <strong>2000+ LeetCode (Knight)</strong>, <strong>1300+ Codeforces (Pupil)</strong>, and <strong>1700+ CodeChef</strong> ratings.
            </li>
          </ul>
        </section>
      </main>
    </article>
  );
};

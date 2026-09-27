export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  links: {
    linkedin: string;
    github: string;
    portfolio: string;
    leetcode: string;
    codeforces: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  roleOrTitle: string;
  description: string;
}

export interface PdfConfig {
  pdfUrl: string;
  filename: string;
  lastUpdated: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
  pdfConfig: PdfConfig;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "DIVYANSHU VARSHNEY",
    title: "Software Engineer",
    phone: "+91-8077925406",
    email: "divyanshu.varshney.work@gmail.com",
    location: "Jalandhar / Aligarh, India",
    links: {
      linkedin: "https://linkedin.com/in/divyanshu-varshney",
      github: "https://github.com/varshney-dv",
      portfolio: "https://divyanshuvarshney.online",
      leetcode: "https://leetcode.com/u/code_with_dv",
      codeforces: "https://codeforces.com/profile/code_with_dv",
    },
  },
  pdfConfig: {
    pdfUrl: "/resume.pdf",
    filename: "Resume_Divyanshu_Varshney.pdf",
    lastUpdated: "2026",
    description: "Official PDF version of Divyanshu Varshney's resume. You can download or print directly.",
  },
  education: {
    institution: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jul 2023 – Present",
    cgpa: "8.7/10",
  },
  experience: [
    {
      company: "LETSCMS PRIVATE LIMITED",
      role: "Web Developer Intern",
      period: "May 2026 – Jul 2026",
      location: "Aligarh, Uttar Pradesh",
      technologies: [
        "Web Development",
        "Business Applications",
        "REST APIs",
        "MySQL",
        "API Testing",
        "Process Automation",
        "Agile Development",
      ],
      bullets: [
        "Developed and integrated an automated notification system for a client-facing school website, streamlining user communication and reducing manual effort in sending notifications.",
        "Contributed to frontend development and RESTful API testing, using Postman to debug functional issues and improve application reliability and user experience.",
      ],
    },
  ],
  projects: [
    {
      title: "VK Hospital",
      subtitle: "AI-Powered Healthcare Management Platform",
      liveUrl: "https://hospital.divyanshuvarshney.online",
      githubUrl: "https://github.com/varshney-dv/VK_HOSPITAL",
      technologies: ["MERN Stack", "OpenAI API", "Gemini API", "Razorpay", "Cloudinary"],
      bullets: [
        "Developed a full-stack healthcare management platform using the MERN stack, enabling appointment scheduling, workflow management, and coordination across patients, doctors, and administrators.",
        "Integrated OpenAI and Gemini APIs for AI-powered symptom analysis, generating specialist recommendations to support patient decision-making and reduce manual effort.",
        "Implemented role-based dashboards for appointments, payments, doctor availability, and operational metrics, improving visibility into healthcare operations.",
      ],
    },
    {
      title: "SeatSetGo",
      subtitle: "Smart JoSAA Counselling Platform",
      liveUrl: "https://counselling.divyanshuvarshney.online",
      githubUrl: "https://github.com/varshney-dv/SeatSetGo",
      technologies: ["MERN Stack", "MongoDB", "SQLite", "JWT", "Google OAuth"],
      bullets: [
        "Developed a MERN-based JoSAA counselling platform analyzing five years of admission data to provide data-driven college selection recommendations.",
        "Optimized database retrieval using indexed MongoDB and SQLite, improving prediction performance for large-scale counselling queries and supporting 90,000+ prediction requests.",
      ],
    },
    {
      title: "WatchWise",
      subtitle: "AI Video Safety Moderation Platform",
      liveUrl: "http://watchwise.divyanshuvarshney.online",
      githubUrl: "https://huggingface.co/spaces/code37dv/watchwise/tree/main",
      technologies: ["FastAPI", "ResNet-50", "YOLOv8", "OpenCV"],
      bullets: [
        "Developed an AI-powered video moderation platform using FastAPI, YOLOv8, ResNet-50, and OpenCV to automate video content analysis.",
        "Reduced video processing time by nearly 66% through optimized preprocessing, workflow optimization, and efficient resource utilization.",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend & APIs",
      skills: ["RESTful APIs", "JWT Authentication", "Google OAuth", "API Integration", "API Testing"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "SQLite"],
    },
    {
      category: "Machine Learning",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Feature Engineering",
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Classification",
        "Decision Trees",
        "Random Forest",
        "SVM",
        "KNN",
        "PCA",
      ],
    },
    {
      category: "Generative AI",
      skills: ["OpenAI API", "Gemini API", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"],
    },
    {
      category: "Cloud & Tools",
      skills: [
        "AWS",
        "EC2",
        "Hugging Face Spaces",
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Render",
        "Cloudinary",
        "Razorpay",
      ],
    },
    {
      category: "Coursework",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ],
  achievements: [
    {
      roleOrTitle: "Competitive Programming Lead, GDG NIT Jalandhar",
      description:
        "Mentored 100+ students, organized coding contests, and coordinated technical initiatives and cross-functional teams.",
    },
    {
      roleOrTitle: "Co-Secretary, PACE (CSE Society)",
      description:
        "Coordinated departmental technical events, collaborated with faculty members, and managed student teams.",
    },
    {
      roleOrTitle: "Competitive Programming",
      description:
        "Solved 1500+ algorithmic problems; achieved 2000+ LeetCode (Knight), 1300+ Codeforces (Pupil), and 1700+ CodeChef ratings.",
    },
  ],
};

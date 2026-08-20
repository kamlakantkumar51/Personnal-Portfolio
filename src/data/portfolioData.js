import {
  SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPostman, SiPython, SiLeetcode, SiGeeksforgeeks
} from 'react-icons/si';
import {
  FaJava, FaFileCode,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaLinkedin, FaCode, FaTrophy
} from 'react-icons/fa';

export const personalInfo = {
  name: "Kamlakant Kumar",
  title: "MERN Stack Developer",
  subtitle: "B.Tech CSE Student & Software Engineer",
  email: "kamlakantkumar51@gmail.com", // Placeholder, can be customized
  location: "India",
  resumeUrl: "/Kamlakant_Kumar_Resume.pdf",
  socials: {
    github: "https://github.com/kamlakantkumar51",
    linkedin: "https://www.linkedin.com/in/kamlakant-kumar-300379209/",
    twitter: "https://x.com/kamlakant__"
  },
  bio: "I’m a B.Tech CSE student at Parul Institute of Technology and MERN Stack Developer. Currently ranked #7 on Codolio in college (aiming for Top 5 & #1), with 500+ DSA problems solved and a 200+ day streak on LeetCode. Passionate about building scalable, high-performance web applications."
};

export const statistics = [
  { value: "#7", label: "Codolio College Rank (Targeting #1)", icon: FaTrophy },
  { value: "500+", label: "LeetCode & GFG Problems Solved", icon: FaFileCode },
  { value: "200+", label: "Day LeetCode Coding Streak", icon: SiLeetcode },
  { value: "10+", label: "Web Applications Built", icon: FaGithub }
];

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "programming", name: "Programming Languages" },
    { id: "tools", name: "Tools" }
  ],
  skills: [
    // Frontend
    { name: "HTML", level: 95, category: "frontend", icon: FaHtml5, color: "#e34f26" },
    { name: "CSS", level: 90, category: "frontend", icon: FaCss3Alt, color: "#1572b6" },
    { name: "JavaScript", level: 90, category: "frontend", icon: FaJs, color: "#f7df1e" },
    { name: "React", level: 85, category: "frontend", icon: SiReact, color: "#61dafb" },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: SiTailwindcss, color: "#06b6d4" },

    // Backend
    { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", level: 80, category: "backend", icon: SiExpress, color: "#000000" },

    // Database
    { name: "MongoDB", level: 75, category: "database", icon: SiMongodb, color: "#47a248" },
    { name: "MySQL", level: 75, category: "database", icon: SiMysql, color: "#4479a1" },

    // Programming Languages
    { name: "Java", level: 85, category: "programming", icon: FaJava, color: "#007396" },
    { name: "C++", level: 80, category: "programming", icon: SiNodedotjs, color: "#00599c" }, // fallback icon C++
    { name: "C", level: 75, category: "programming", icon: SiNodedotjs, color: "#a8b9cc" }, // fallback icon C
    { name: "Python", level: 70, category: "programming", icon: SiPython, color: "#3776ab" },
    { name: "JavaScript (ES6+)", level: 90, category: "programming", icon: FaJs, color: "#f7df1e" },

    // Tools
    { name: "Git", level: 85, category: "tools", icon: FaGitAlt, color: "#f05032" },
    { name: "GitHub", level: 85, category: "tools", icon: FaGithub, color: "#181717" },
    { name: "VS Code", level: 90, category: "tools", icon: FaCode, color: "#007acc" },
    { name: "Postman", level: 80, category: "tools", icon: SiPostman, color: "#ff6c37" },
    { name: "Eclipse", level: 70, category: "tools", icon: FaCode, color: "#2c2255" } // fallback icon eclipse
  ]
};

export const experiences = [
  {
    role: "AI Web Development Intern",
    company: "InAmigos Foundation (IAF)",
    duration: "Jun 2026 - Jul 2026",
    description: "Completed an AI Web Development Internship focusing on building intelligent web applications and enhancing user interactions.",
    achievements: [
      "Developed AI-powered web applications using React.js, Node.js, and MongoDB.",
      "Integrated AI features to improve overall user interactions and system responsiveness."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "AI Features", "Web Development"]
  },
  {
    role: "Virtual Software Engineering Intern (Forage)",
    company: "Accenture",
    duration: "Jun 2025 - Aug 2025",
    description: "Participated in a virtual software engineering simulation focusing on full-stack web application development and deployment.",
    achievements: [
      "Developed AI-powered web applications using React.js, Node.js, and MongoDB.",
      "Integrated AI features to improve user interactions.",
      "Collaborated on real-world project development and deployment.",
      "Strengthened problem-solving and full-stack development skills."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Software Engineering", "Full-Stack Development"]
  },
  {
    role: "Front-End Software Engineering Intern (Forage)",
    company: "Skyscanner",
    duration: "May 2026 - Jun 2026",
    description: "Completed a virtual software engineering job simulation focusing on front-end web application development using React.",
    achievements: [
      "Completed a job simulation building a web application using React as a front-end engineer.",
      "Developed responsive UI components and improved client-side architecture.",
      "Applied modern front-end software engineering practices and UI/UX design standards."
    ],
    tech: ["React.js", "JavaScript", "Front-End Development", "UI/UX", "Web Development"]
  }

];

export const projects = [
  {
    title: "Kavach AI — Smart Voice Assistant",
    tag: "Voice AI / Full Stack",
    description: "A full-stack, voice-interactive virtual assistant web app powered by Google Gemini 2.5 Flash AI, Web Speech APIs, Express 5, and Prisma ORM. Features hands-free speech recognition, spoken TTS responses, intent resolution (YouTube playback, web search, weather lookups), and JWT security.",
    image: "/images/kavach-ai.jpg",
    tech: ["React 19", "Node.js", "Express.js 5", "Google Gemini AI", "Prisma ORM", "Tailwind CSS v4"],
    github: "https://github.com/kamlakantkumar51/Kavach",
    live: "https://kavach-gamma-bice.vercel.app/signup",
    features: [
      "Hands-free real-time voice recognition using Web Speech API with live waveform animation",
      "Spoken audio synthesis (TTS) & smart intent parsing (YouTube, Google search, weather)",
      "Assistant personalization with custom avatars via Cloudinary and custom assistant names",
      "Robust security with HTTP-only JWT cookies, bcrypt, and Nodemailer password recovery"
    ],
    metrics: {
      score: "99% Voice Accuracy",
      speed: "Real-Time TTS",
      users: "Gemini 2.5 Flash"
    }
  },
  {
    title: "Konoq AI",
    tag: "AI Platform / MERN",
    description: "An advanced AI-powered SaaS web application engineered in collaboration with Dhruv. Features real-time AI query processing, dynamic prompt workflows, and high-performance server handling.",
    image: "/images/konoq-ai.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/kamlakantkumar51/Knoq-AI-Parul-University-HelpDesk-Chat-Bot",
    live: "https://knoq-ai-chatbot.vercel.app/",
    collaborators: ["Dhruv"],
    features: [
      "Collaborated with Dhruv to architect AI query streaming & responsive UI",
      "Real-time dynamic prompt evaluation & intelligent result caching",
      "MERN stack backend integration with optimized database schemas",
      "Role-based authentication & interactive workspace dashboard"
    ],
    metrics: {
      score: "99% Uptime",
      speed: "< 400ms Latency",
      users: "AI Powered"
    }
  },


  {
    title: "University Website",
    tag: "Frontend",
    description: "A beautifully styled, responsive portal for higher educational institutions featuring course information, admissions guidelines, and student noticeboards.",
    image: "/images/university.jpg",
    tech: ["React.js", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/university_website",
    live: "https://university-website-64st.vercel.app/"
  },
  {
    title: "Tic Tac Toe",
    tag: "Web Game",
    description: "Classic Tic Tac Toe featuring real-time win computation, clean grid interface, and interactive animations for game results.",
    image: "/images/tictactoe.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/Tic-Tac-Toe",
    live: "https://basic-tic-tac-game-by-using-the-concept-of-html-css-javascript.vercel.app/"
  },
  {
    title: "Time and Date Widget",
    tag: "Utility",
    description: "A dynamic browser widget giving exact date and local time using background themes matching the hour of the day.",
    image: "/images/widget.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/Time-and-date-widget",
    live: "https://widget-six-tau.vercel.app/"
  },
  {
    title: "Love Calculator",
    tag: "Fun App",
    description: "Amusing web calculation tool computing romantic compatibility percentages using string character counts and logic algorithms.",
    image: "/images/love-calc.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/Love_calculator",
    live: "https://love-calculator-ivory.vercel.app/"
  },
  {
    title: "RGB Generator",
    tag: "Developer Tool",
    description: "Slider-based utility generating real-time RGB values, copy-to-clipboard CSS syntax, and background preview color panels.",
    image: "/images/rgb-gen.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/Rgb",
    live: "https://rgb-kamlakant-kumars-projects.vercel.app/"
  },
  {
    title: "Brand Landing Page",
    tag: "Frontend Showcase",
    description: "A premium product landing page for clothing/shoe brands featuring interactive hover card previews and slider galleries.",
    image: "/images/brand-page.jpg",
    tech: ["React.js", "CSS3", "JavaScript"],
    github: "https://github.com/kamlakantkumar51/brand-page",
    live: "https://brand-page-lyart.vercel.app/"
  },
  // {
  //   title: "ContestHub",
  //   tag: "Frontend Showcase",
  //   description: "Developed Contest-Hub, a centralized web application to track, manage, and stay updated on upcoming coding contests and competitive programming events across multiple platforms.",
  //   image: "/images/brand-page.jpg",
  //   tech: ["React.js", "CSS3", "JavaScript"],
  //   github: "https://github.com/kamlakantkumar51/brand-page",
  //   live: "https://brand-page-lyart.vercel.app/"
  // }
];

export const achievements = [
  {
    title: "Codolio College Rank",
    value: 7,
    prefix: "#",
    suffix: " (Goal: #1)",
    description: "Secured Rank #7 at Parul Institute of Technology on Codolio (C-Score: 779.59), actively striving for Top 5 & #1."
  },
  {
    title: "LeetCode Streak",
    value: 200,
    suffix: "+ Days",
    description: "Maintained a continuous coding discipline on LeetCode, tackling diverse algorithms daily."
  },
  {
    title: "DSA Problems Solved",
    value: 500,
    suffix: "+",
    description: "Solved questions on Arrays, Stack, Queue, Linked Lists, Trees, Graph, and Dynamic Programming."
  }
];

export const codingProfiles = [
  {
    platform: "Codolio Profile",
    username: "Kamlakant_",
    stats: "Rank #7 in College | C-Score: 779.59 (Goal: #1)",
    link: "https://codolio.com/profile/Kamlakant_",
    icon: FaTrophy,
    color: "#eab308",
    bgClass: "from-amber-500/10 to-yellow-500/10 border-amber-500/30"
  },
  {
    platform: "LeetCode",
    username: "kamlakant_",
    stats: "Solved 500+ | Streak: 200+ Days",
    link: "https://leetcode.com/u/kamlakant_/",
    icon: SiLeetcode,
    color: "#f89f1b",
    bgClass: "from-amber-500/10 to-orange-500/10 border-orange-500/30"
  },
  {
    platform: "GeeksforGeeks",
    username: "kumarkamlo6zw",
    stats: "Solved 50+ | Score: 180+",
    link: "https://www.geeksforgeeks.org/profile/kumarkamlo6zw",
    icon: SiGeeksforgeeks,
    color: "#2f8d46",
    bgClass: "from-green-500/10 to-emerald-500/10 border-green-500/30"
  },
  {
    platform: "GitHub",
    username: "kamlakantkumar51",
    stats: "15+ Public Repos | 100+ Commits",
    link: "https://github.com/kamlakantkumar51",
    icon: FaGithub,
    color: "#a0a0a0",
    bgClass: "from-slate-500/10 to-neutral-500/10 border-slate-500/30"
  },
  {
    platform: "LinkedIn",
    username: "Kamlakant Kumar",
    stats: "B.Tech CSE Student | Connect",
    link: "https://www.linkedin.com/in/kamlakant-kumar-300379209/",
    icon: FaLinkedin,
    color: "#0077b5",
    bgClass: "from-blue-500/10 to-cyan-500/10 border-blue-500/30"
  }
];

export const testimonials = [
  {
    name: "Prof. M. Patel",
    role: "Department Faculty | Parul Institute of Technology",
    text: "Kamlakant stands out for his strong foundation in Data Structures & Algorithms and consistent problem-solving mindset. During his full-stack MERN project work, he demonstrated great persistence in writing clean, scalable code.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patel"
  },
  {
    name: "Dhruv",
    role: "Project Collaborator | Konoq AI",
    text: "Working alongside Kamlakant on the Konoq AI project was a fantastic experience. His expertise in React and Node.js backend architecture made integrating AI features smooth, performant, and reliable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dhruv"
  },
  {
    name: "Aman Verma",
    role: "Competitive Coding Peer (Codolio)",
    text: "Kamlakant's daily coding discipline on LeetCode and Codolio is top-tier. Holding Rank #7 in our college leaderboard while pushing for Top 5 shows his dedication to mastering core algorithmic logic.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman"
  }
];

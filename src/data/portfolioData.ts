export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    details?: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bioIntro: string;
    profileImagePath: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availability: string;
  };
  about: {
    introduction: string[];
    education: {
      degree: string;
      institution: string;
      period?: string;
      details: string;
    };
    careerInterests: string[];
    strengths: {
      title: string;
      description: string;
    }[];
  };
  skillCategories: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Justine Abordo",
    role: "IT Student | Technical Support & Web Development",
    tagline: "Information Technology student dedicated to hardware troubleshooting, structured networking, and modern web development.",
    bioIntro: "I am an Information Technology student passionate about diagnosing hardware issues, configuring networks, and building modern web applications. Eager to learn, gain industry experience, and contribute to a technical team through internship or entry-level roles.",
    profileImagePath: "/assets/Akutami_Gege.webp",
    location: "Available for on-site, hybrid, and remote roles",
    email: "abordojustine79@gmail.com",
    phone: "+1 (555) 234-5678",
    linkedin: "https://linkedin.com/in/justine-abordo",
    github: "https://github.com/justineabordo",
    availability: "Open for Internship / OJT & Entry-Level Roles",
  },
  about: {
    introduction: [
      "I am an Information Technology student with hands-on training and foundational knowledge spanning computer hardware maintenance, structured RJ45 cabling, and web development. I enjoy learning how systems operate from the ground up—whether assembling and diagnosing PC workstations, setting up local area networks, or coding responsive web interfaces.",
      "As an aspiring IT professional, I am dedicated to continuous learning, attention to detail, and methodical problem-solving. I am excited to apply my academic background and practical lab skills to real-world projects and team environments."
    ],
    education: {
      degree: "Bachelor of Science in Information Technology",
      institution: "College of Computer Studies",
      details: "Comprehensive coursework in Computer Systems Architecture, Data Communications and Networking, Database Management Systems, System Administration, and Web Systems."
    },
    careerInterests: [
      "IT Technical Support & Systems Administration",
      "Network Infrastructure & Cabling Technician",
      "Front-End and Full-Stack Web Development",
      "Hardware Diagnostics & Field Engineering"
    ],
    strengths: [
      {
        title: "Methodical Hardware & Network Diagnostics",
        description: "Systematic root-cause analysis for faulty components, intermittent connection drops, and hardware conflicts without hasty guesswork."
      },
      {
        title: "Clean Workmanship & Standards Discipline",
        description: "High standard for clean RJ45 termination, organized server/desk cable management, and clean, standards-compliant TypeScript and HTML code."
      },
      {
        title: "Clear Technical Communication & Eagerness to Learn",
        description: "Receptive to feedback, active listener, and able to explain technical steps clearly with patience."
      }
    ]
  },
  skillCategories: [
    {
      id: "networking",
      name: "Networking",
      description: "Foundational data communications, cabling, and router/switch setup",
      skills: [
        { name: "Networking Fundamentals", details: "OSI & TCP/IP models, IPv4 subnetting, DNS/DHCP concepts" },
        { name: "RJ45 Cabling", details: "T568A / T568B pinouts, crimping, patch cable creation, cable testing" },
        { name: "Network Configuration", details: "SOHO routers, wireless APs, static IP assignment, gateway setup" },
        { name: "Basic Troubleshooting", details: "Ping, traceroute, ipconfig/ifconfig, resolving IP conflicts" }
      ]
    },
    {
      id: "hardware",
      name: "Hardware & Technical Support",
      description: "Component-level computer assembly, maintenance, and diagnostics",
      skills: [
        { name: "PC Assembly", details: "Motherboard seating, CPU/cooler installation, thermal paste, PSU wiring" },
        { name: "PC Disassembly", details: "Safe teardown, anti-static safety, organized component storage" },
        { name: "Hardware Troubleshooting", details: "POST diagnostics, RAM testing, PSU load checks, drive health" },
        { name: "Computer Configuration", details: "BIOS/UEFI settings, OS installation (Windows/Linux), driver deployment" }
      ]
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Modern, responsive, and maintainable web applications and databases",
      skills: [
        { name: "HTML", details: "Semantic elements, accessible DOM structure, modern HTML5 forms" },
        { name: "CSS", details: "Flexbox, CSS Grid, responsive design, Tailwind CSS utilities" },
        { name: "JavaScript", details: "ES6+, asynchronous programming, DOM APIs, event handling" },
        { name: "TypeScript", details: "Static typing, interfaces, strict mode, compiler configuration" },
        { name: "React", details: "Functional components, custom hooks, state management, SPA architecture" },
        { name: "PHP", details: "Server-side scripting, form handling, session management" },
        { name: "MySQL", details: "Relational schema design, normalization, queries, CRUD operations" }
      ]
    }
  ]
};

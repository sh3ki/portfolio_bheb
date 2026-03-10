import {
  AppWindow,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Figma,
  GitBranch,
  Globe,
  Layers,
  LayoutDashboard,
  MonitorSmartphone,
  Network,
  Package,
  Puzzle,
  Server,
  ServerCog,
  ShieldCheck,
  Smartphone,
  SquareCode,
  Terminal,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TechItem = {
  name: string;
  icon: LucideIcon;
  logoUrl?: string;
};

export type ExperienceItem = {
  year: string;
  title: string;
  details: string;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export const profile = {
  name: "Bheberlyn O. Eugenio",
  role: "Software Project Manager",
  tagline:
    "Delivering reliable, high-quality software systems from planning to production — on time, within scope, and built to scale.",
  email: "bheberlyn.eugenio@gmail.com",
  facebook: "facebook.com/bheberlyn.eugenio",
  phone: "+63 900 000 0000",
  instagram: "@bheberlyn.eugenio",
  location: "Laguna, Philippines",
};

export const featuredTechnologies: TechItem[] = [
  { name: "React",         icon: Layers,     logoUrl: `${DI}/react/react-original.svg` },
  { name: "Next.js",       icon: AppWindow,  logoUrl: `${DI}/nextjs/nextjs-original.svg` },
  { name: "Vue.js",        icon: Layers,     logoUrl: `${DI}/vuejs/vuejs-original.svg` },
  { name: "TypeScript",    icon: Code2,      logoUrl: `${DI}/typescript/typescript-original.svg` },
  { name: "Node.js",       icon: ServerCog,  logoUrl: `${DI}/nodejs/nodejs-original.svg` },
  { name: "Laravel",       icon: Server,     logoUrl: `${DI}/laravel/laravel-original.svg` },
  { name: "Django",        icon: Server,     logoUrl: `${DI}/django/django-plain.svg` },
  { name: "Python",        icon: Terminal,   logoUrl: `${DI}/python/python-original.svg` },
  { name: "Flutter",       icon: Smartphone, logoUrl: `${DI}/flutter/flutter-original.svg` },
  { name: "React Native",  icon: Smartphone, logoUrl: `${DI}/react/react-original.svg` },
  { name: "Kotlin",        icon: Smartphone, logoUrl: `${DI}/kotlin/kotlin-original.svg` },
  { name: "Firebase",      icon: Database,   logoUrl: `${DI}/firebase/firebase-original.svg` },
  { name: "PostgreSQL",    icon: Database,   logoUrl: `${DI}/postgresql/postgresql-original.svg` },
  { name: "Docker",        icon: Package,    logoUrl: `${DI}/docker/docker-original.svg` },
  { name: "Figma",         icon: Figma,      logoUrl: `${DI}/figma/figma-original.svg` },
  { name: "Jira",          icon: LayoutDashboard, logoUrl: `${DI}/jira/jira-original.svg` },
];

export const spotlightCards = [
  {
    title: "20+ Systems Delivered",
    detail: "Successfully shipped web, mobile, automation, and enterprise systems across multiple industries.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Delivery",
    detail: "From requirements and sprint planning to deployment and post-launch support — fully managed.",
    icon: Workflow,
  },
  {
    title: "Cross-Functional Leadership",
    detail: "Bridging developers, designers, stakeholders, and clients to keep every project moving with clarity.",
    icon: Users,
  },
];

export const services: ServiceItem[] = [
  {
    title: "Web Application Development",
    description:
      "Plan and deliver scalable web platforms tailored to business operations, customer engagement, and long-term growth.",
    icon: Globe,
  },
  {
    title: "Mobile Application Development",
    description:
      "Coordinate cross-functional teams to launch mobile applications with strong usability and reliable performance across iOS and Android.",
    icon: MonitorSmartphone,
  },
  {
    title: "Hardware & IoT Integration",
    description:
      "Connect software systems with hardware devices and sensors for real-time data capture, control, and field monitoring.",
    icon: Network,
  },
  {
    title: "Business Automation Systems",
    description:
      "Design automation workflows that eliminate manual bottlenecks, improve operational efficiency, and increase process visibility.",
    icon: Workflow,
  },
  {
    title: "Custom Software & Systems",
    description:
      "Build bespoke digital systems aligned with your exact operational requirements — from discovery and planning through to production deployment.",
    icon: SquareCode,
  },
  {
    title: "Capstone & Thesis Systems",
    description:
      "Guide academic and student teams in delivering complete, well-documented, and fully functional capstone and thesis software projects.",
    icon: Layers,
  },
  {
    title: "API Development & Integrations",
    description:
      "Develop secure, well-documented API layers and third-party integrations that connect services, data sources, and external platforms.",
    icon: Puzzle,
  },
  {
    title: "Project Management Consulting",
    description:
      "Provide strategic project leadership, sprint facilitation, risk assessment, and delivery process optimization for software teams.",
    icon: Briefcase,
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    year: "2024 – Present",
    title: "Software Project Manager",
    details:
      "Leading end-to-end software delivery across web, mobile, and automation projects. Responsible for sprint planning, stakeholder communication, scope management, and team execution.",
  },
  {
    year: "2022 – 2024",
    title: "Technical Project Lead",
    details:
      "Managed sprint cycles, release schedules, and QA workflows across multiple concurrent projects. Maintained delivery quality through structured review and milestone tracking.",
  },
  {
    year: "2020 – 2022",
    title: "Systems Delivery Coordinator",
    details:
      "Oversaw planning and end-to-end delivery of software systems for educational institutions, small businesses, and corporate clients.",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Define project goals, scope, and constraints through structured requirement-gathering sessions with stakeholders.",
  },
  {
    title: "Planning",
    description:
      "Build a detailed roadmap, establish milestones, assign priorities, and set communication cadences for the project lifecycle.",
  },
  {
    title: "Development",
    description:
      "Coordinate implementation, code reviews, QA testing, and iterative feedback cycles to maintain quality and velocity.",
  },
  {
    title: "Delivery",
    description:
      "Execute a confident production launch with proper documentation, stakeholder handover, and active post-deployment support.",
  },
];

export const technologyGroups: { title: string; items: TechItem[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript",  icon: Code2,    logoUrl: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript",  icon: Code2,    logoUrl: `${DI}/typescript/typescript-original.svg` },
      { name: "Python",      icon: Terminal, logoUrl: `${DI}/python/python-original.svg` },
      { name: "PHP",         icon: Code2,    logoUrl: `${DI}/php/php-original.svg` },
      { name: "Java",        icon: Code2,    logoUrl: `${DI}/java/java-original.svg` },
      { name: "C#",          icon: Code2,    logoUrl: `${DI}/csharp/csharp-original.svg` },
      { name: "Dart",        icon: Code2,    logoUrl: `${DI}/dart/dart-original.svg` },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React",        icon: Layers,    logoUrl: `${DI}/react/react-original.svg` },
      { name: "Next.js",      icon: AppWindow, logoUrl: `${DI}/nextjs/nextjs-original.svg` },
      { name: "Vue.js",       icon: Layers,    logoUrl: `${DI}/vuejs/vuejs-original.svg` },
      { name: "Tailwind CSS", icon: Layers,    logoUrl: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "HTML5 & CSS3", icon: Globe,     logoUrl: `${DI}/html5/html5-original.svg` },
      { name: "Vite",         icon: Layers,    logoUrl: `${DI}/vitejs/vitejs-original.svg` },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js",     icon: ServerCog, logoUrl: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Laravel",     icon: Server,    logoUrl: `${DI}/laravel/laravel-original.svg` },
      { name: "Django",      icon: Server,    logoUrl: `${DI}/django/django-plain.svg` },
      { name: "Express.js",  icon: Server,    logoUrl: `${DI}/express/express-original.svg` },
      { name: "NestJS",      icon: Server,    logoUrl: `${DI}/nestjs/nestjs-original.svg` },
      { name: "Spring Boot", icon: Server,    logoUrl: `${DI}/spring/spring-original.svg` },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter",        icon: Smartphone,      logoUrl: `${DI}/flutter/flutter-original.svg` },
      { name: "React Native",   icon: Smartphone,      logoUrl: `${DI}/react/react-original.svg` },
      { name: "Android Studio", icon: MonitorSmartphone, logoUrl: `${DI}/androidstudio/androidstudio-original.svg` },
      { name: "Kotlin",         icon: Smartphone,      logoUrl: `${DI}/kotlin/kotlin-original.svg` },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL",              icon: Database, logoUrl: `${DI}/mysql/mysql-original.svg` },
      { name: "PostgreSQL",         icon: Database, logoUrl: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB",            icon: Database, logoUrl: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Firebase Firestore", icon: Database, logoUrl: `${DI}/firebase/firebase-original.svg` },
      { name: "SQLite",             icon: Database, logoUrl: `${DI}/sqlite/sqlite-original.svg` },
      { name: "Redis",              icon: Database, logoUrl: `${DI}/redis/redis-original.svg` },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Vercel",          icon: Cloud,      logoUrl: `${SI}/vercel/000000` },
      { name: "AWS",             icon: Cloud,      logoUrl: `${SI}/amazonaws/FF9900` },
      { name: "Docker",          icon: Package,    logoUrl: `${DI}/docker/docker-original.svg` },
      { name: "Git",             icon: GitBranch,  logoUrl: `${DI}/git/git-original.svg` },
      { name: "GitHub Actions",  icon: GitBranch,  logoUrl: `${SI}/githubactions/2088FF` },
      { name: "Azure DevOps",    icon: Cloud,      logoUrl: `${SI}/azuredevops/0078D7` },
      { name: "DigitalOcean",    icon: Cloud,      logoUrl: `${SI}/digitalocean/0080FF` },
    ],
  },
  {
    title: "IoT & Hardware",
    items: [
      { name: "Arduino",         icon: Cpu,     logoUrl: `${DI}/arduino/arduino-original.svg` },
      { name: "Raspberry Pi",    icon: Cpu,     logoUrl: `${DI}/raspberrypi/raspberrypi-original.svg` },
      { name: "ESP32 / ESP8266", icon: Cpu },
      { name: "Node-RED",        icon: Network, logoUrl: `${SI}/nodered/8F0000` },
    ],
  },
  {
    title: "Project Management Tools",
    items: [
      { name: "Jira",             icon: LayoutDashboard, logoUrl: `${DI}/jira/jira-original.svg` },
      { name: "Notion",           icon: LayoutDashboard, logoUrl: `${SI}/notion/000000` },
      { name: "ClickUp",          icon: LayoutDashboard, logoUrl: `${SI}/clickup/7B68EE` },
      { name: "Asana",            icon: LayoutDashboard, logoUrl: `${SI}/asana/F06A6A` },
      { name: "Trello",           icon: LayoutDashboard, logoUrl: `${DI}/trello/trello-original.svg` },
      { name: "GitHub",           icon: GitBranch,       logoUrl: `${DI}/github/github-original.svg` },
      { name: "Slack",            icon: Users,           logoUrl: `${DI}/slack/slack-original.svg` },
      { name: "Microsoft Teams",  icon: Users,           logoUrl: `${SI}/microsoftteams/6264A7` },
    ],
  },
  {
    title: "Design & Prototyping",
    items: [
      { name: "Figma",            icon: Figma,  logoUrl: `${DI}/figma/figma-original.svg` },
      { name: "Canva",            icon: Wrench, logoUrl: `${SI}/canva/00C4CC` },
      { name: "Adobe Photoshop",  icon: Wrench, logoUrl: `${SI}/adobephotoshop/31A8FF` },
    ],
  },
];

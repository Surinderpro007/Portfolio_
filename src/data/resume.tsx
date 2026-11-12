import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Surinder Singh",
  initials: "SS",
  url: "https://google.com",
  location: "#",
  locationLink: "#",
  description:
    "Front-end developer crafting high-performance, responsive web interfaces with React.js and modern JavaScript.",
  summary:
    "Front-end developer with 2.10 years of experience building responsive, high-performance web applications using React.js, JavaScript, HTML, CSS and Tailwind CSS. I specialize in turning complex designs into clean, scalable and accessible interfaces, with a strong focus on performance, reusable components and maintainable code. I collaborate closely with designers and back-end teams, integrate REST APIs, and stay current with modern front-end practices to deliver polished, user-centric products that meet business goals.",
  avatarUrl: "/",
   skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Bootstrap",
    "Sass/SCSS",
    "jQuery",
    "shadcn/ui",
    "Magic UI",
    "Aceternity UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "REST APIs",
    "Axios",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Web Performance Optimization",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "WordPress",
    "Shopify",
  ],      
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "#",
    tel: "0",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Surinderpro007",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/surinder-singh-436898176",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Webchefz Infotech",
      href: "https://www.webchefz.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/webChefz.svg",
      start: "Dec 2023",
      end: "Oct 2026",
      description:
        "I have 2.10 years of experience as a front-end developer at WebChefz Info Tech, where I build responsive, high-performance web applications using React.js, JavaScript, HTML, CSS and Tailwind CSS. I turn designs into clean, reusable components, integrate REST APIs, and work closely with designers and back-end teams to deliver polished, user-friendly interfaces.",
    },
  
    
  ],
  education: [
    {
      school: "Chandigarh University, Punjab",
      href: "https://www.cuchd.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/cu.svg",
      start: "",
      end: "Pursuing (Expected 2027)",
    },
    
  ],
  projects: [
            {
      title: "Stock Market App",
      href: "https://stock-surind4r.vercel.app/",
      dates: "",
      active: true,
      description:
        "A stock market web application built with Next.js that lets users track live stock prices, search companies, view interactive price charts and manage a personal watchlist, through a clean and responsive dashboard.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://stock-surind4r.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Surinderpro007/Stock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "stockmarket.mp4",
    },
        {
      title: "Link Chat",
      href: "https://linkchat-flame.vercel.app/",
      dates: "",
      active: true,
      description:
        "A real-time private chat web application built with Next.js and Firebase. Users create a named room, share a unique link, and only people who know the room name can join. Messages sync instantly, no sign-up is needed, and only the room creator can delete the room.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://linkchat-flame.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Surinderpro007/linkchat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "link-chat.mp4",
    },
        {
      title: "Tally Poll App",
      href: "https://tally-poll-app.vercel.app/",
      dates: "",
      active: true,
      description:
        "A group polling web application built with React and Firebase. Users create a poll and share a single link, and every voter verifies their email with a 6-digit code (sent via EmailJS) so each person can vote only once. Results update live as votes come in, shown as a ranked, animated leaderboard from first place to last, with no sign-up and no custom backend server.",
      technologies: [
        "React.js",
        "Vite",
        "JavaScript",
        "Firebase",
        "Firestore",
        "EmailJS",
        "React Router",
      ],
      links: [
        {
          type: "Website",
          href: "https://tally-poll-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Surinderpro007/tally-poll-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "tallypoll.mp4",
    },
    {
  title: "PokerCasino Poker",
  href: "https://pokercasino-opal.vercel.app/",
  dates: "",
  active: true,
  description:
    "A modern online poker platform website built with Next.js and Tailwind CSS. It includes a cinematic landing page with animated hero sections, a tournaments list, tables grid, playable game demos (poker, roulette and slot machine), a how-to-play and games guide, casino brand reviews, a VIP tier program, a blog with dynamic post pages and image cards, a press page with expandable story cards, a help center, a contact form and a live chat widget. The UI uses smooth Framer Motion animations, a responsive resizable navbar and a dark, gold-accented design.",
  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Aceternity UI",
    "Lucide React",
  ],
  links: [
    {
      type: "Website",
      href: "https://pokercasino-opal.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/Surinderpro007/PokerCasino",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/poker.png",
  video: "",
},
    {
      title: "Enhance Image Application",
      href: "https://enhace-image.vercel.app/",
      dates: "",
      active: true,
      description:
        "The Enhance Image Application is a modern web-based tool developed using React.js, designed to improve and process images through an intuitive user interface. It integrates with backend services using Axios to fetch and enhance image data efficiently.",
      technologies: [
        "React.js",
        "Axios",
        "TailwindCSS",
        "Pickwish API",
      ],
      links: [
        {
          type: "Website",
          href: "https://enhace-image.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Surinderpro007/EnhaceImage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/imageCompare.png",
      video:
        "",
    },
    {
      title: "Code Share App",
      href: "#",
      dates: "",
      active: true,
      description:
        "Code Share is an app for creating, editing, and sharing code snippets. It allows users to store and manage their code locally, with a simple interface and quick search functionality.",
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "cShare.mp4",
    },
    
    {
      title: "Tic Tac Toe Game",
      href: "#",
      dates: "",
      active: true,
      description:
        "A fun and interactive Tic Tac Toe game built with React. Challenge a friend or the computer in this classic, easy-to-play game with a simple and intuitive interface.",
      technologies: [
        "HTML",
        "Css",
        "JavaScript",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://tic-tac-toe-bice-eight-39.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "ticTac.mp4",
    },
    {
      title: "Todo App",
      href: "#",
      dates: "",
      active: true,
      description:
        "A feature-rich Todo application for managing daily tasks. Includes functionalities like task addition, status updates (pending, in-progress, completed), and local storage for persistence.",
      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",

      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/",
    },

  
  ],
  
  hackathons: [
    {
      title: "Google Data Analytics Professional Certificate",
      dates: "",
      location: "by Google",
      description:
        "Completed the Google Data Analytics Professional Certificate, gaining a solid understanding of data analysis and tools like Excel and SQL.",
      image:
        "/google.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      dates: "",
      location: "by Meta",
      description:
        "Earned the Meta Front-End Developer Professional Certificate, gaining expertise in HTML, CSS, JavaScript, and React.js, and completing real-world projects to build a strong foundation in front-end development.",
      image:
        "/meta.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "IBM Full Stack Software Developer Professional Certificate (Currently Pursuing)",
      dates: "",
      location: "by IBM",
      description:
        "Preparing for a career as a full-stack developer by building job-ready skills, including front-end and back-end development, and learning essential AI skills. Currently enrolled in this course to enhance full-stack development knowledge.",
      icon: "public",
      image:
        "/ibm.svg",
      links: [],
    },


  ],
  Contact:[
    {
      title: "Contact",
    }

  ]

} as const;

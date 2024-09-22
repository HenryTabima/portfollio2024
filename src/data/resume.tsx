import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Henry Tabima Giraldo",
  initials: "HTG",
  url: "https://henrytabimagiraldo.com",
  location: "Cali, Colombia",
  locationLink: "https://www.google.com/maps/place/Cali",
  description:
    "🚀 Taking coding to the next level | Next Level coding 🎥 | Open Source & Web3 insights. Innovation without limits. 🌐 #Web3 #Code #Tech.",
  summary: `I am a Senior Software Engineer with expertise in full-stack development. With over 6 years of experience, I have a proven track record of delivering high-quality solutions for complex problems.
  
  My technical skills include proficiency in JavaScript/Typescript, both on the front-end with React.js and various other libraries, and on the back-end with Node.js. I also have extensive experience with Ruby on Rails for rapid REST API development.
  
  I am passionate about leveraging technology to solve real-world problems and have applied my skills to a wide range of projects, from energy management systems to manufacturing automation and data analysis using Python (Pandas).
  
  As a team player, I am adept at collaborating with cross-functional teams to achieve project goals. I have a goal-oriented mindset and can learn new skills quickly to stay up-to-date with the latest technologies and methodologies.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/12721896",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Ruby on Rails",
    "Ruby",
    "Rust",
    "Python",
    "Postgres",
    "Docker",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "henrytabima.dev@gmail.com",
    tel: "+573106488894",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HenryTabima",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henrytabimagiraldo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HenryTabimaG",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@NextLevel_Coding",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:henrytabima.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Fulcrum",
      href: "https://fulcrum.com",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/fulcrum.jpeg",
      start: "Mar 2022",
      end: "Present",
      description:
        "Significant influence on code organization and architecture, including recommending a new approach to code documentation resulting in more efficient and streamlined processes. Had a significant impact on front-end and back-end code organization and architecture, improving overall code quality and user experience. Known for timely and efficient implementation of new features and bug fixes, collaborating closely with designers, developers, and project managers.",
    },
    {
      company: "Versapay",
      href: "https://versapay.com",
      badges: [],
      location: "Cali, Valle del Cauca, Colombia",
      title: "Software Engineer",
      logoUrl: "/versapay.jpeg",
      start: "Mar 2021",
      end: "Mar 2022",
      description:
        "Versapay is focused on changing the way companies do business together by offering Customer-Centric Order-to-Cash solutions for mid-market and enterprise businesses. We help our clients offer a superior customer experience, enabling CFOs to accelerate cash conversion, reduce costs, and eliminate paper, checks and manual business processes. Based in Toronto with offices in Atlanta, Cleveland, Baltimore, LA, and Las Vegas, Versapay is owned by Great Hill Partners, a Boston-based technology investment firm.",
    },
    {
      company: "1200.aero",
      href: "https://1200.aero",
      badges: [],
      location: "Cali, Valle del Cauca, Colombia",
      title: "Software Engineer",
      logoUrl: "/1200aero.jpeg",
      start: "Apr 2020",
      end: "Mar 2021",
      description:
        "Successfully rebuilt 1200.aero, a real-time aircraft tracking and flight analysis web application, from Angular to React using TypeScript. Reduced production bundle size from 20mb to ~5mb. Implemented live-map and tracking-history features using state machines with xState. Initiated documentation efforts using Docusaurus and StoryBook. Prepared the project for future testing implementation using Jest and Cypress.",
    },
    {
      company: "Microverse",
      href: "https://www.microverse.org/",
      badges: [],
      location: "Remote",
      title: "TSE (Technical Support Engineer)",
      logoUrl: "/microverseinc.jpeg",
      start: "Jun 2019",
      end: "Aug 2019",
      description:
        "Conducted comprehensive code reviews for student projects in HTML/CSS, Rails, and JavaScript. Mentored and provided technical support to students. Facilitated collaborative practice sessions for groups of up to 10 applicants, promoting teamwork and providing feedback to improve the program's effectiveness.",
    },
  ],
  education: [
    {
      school: "Microverse",
      href: "https://www.microverse.org/",
      degree: "Remote Full-Stack Developer, Web Development",
      logoUrl: "/microverseinc.jpeg",
      start: "2018",
      end: "2019",
      description:
        "Dedicated over 1200 hours to mastering algorithms, data structures, and full-stack development while simultaneously creating more than 20 projects in Ruby, Rails, Javascript, React, Redux, and HTML/CSS. Honed skills in remote pair-programming using industry standards such as GitHub, Git flow, and daily standups to effectively communicate and collaborate with remote developers worldwide.",
    },
    {
      school: "Universidad Autónoma de Occidente",
      href: "https://www.uao.edu.co/",
      degree: "Mechatronics Engineer, Engineering",
      logoUrl: "/uao.jpeg",
      start: "2009",
      end: "2017",
      description:
        "Mechatronics Engineer combines principles from mechanical, electrical, and computer engineering to design, develop, and maintain advanced systems that integrate these different areas. They work on projects such as robotics, automation, and control systems, and they are responsible for integrating mechanical systems with electronics and computer controls to achieve the desired functionality. Mechatronics Engineers are valuable members of teams that design and build complex systems in industries such as automotive, aerospace, manufacturing, and more.",
    },
  ],
  projects: [
    {
      title: "Faceverse - Social network web app",
      href: "https://github.com/SunnyAsar/faceverse",
      dates: "",
      active: false,
      description: "Social network web app made with Ruby on Rails",
      technologies: ["Ruby on Rails"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/SunnyAsar/faceverse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/faceverse.png",
    },
    {
      title: "Websites Screenshots CLI tool",
      href: "https://github.com/HenryTabima/websites-screenshot-cli",
      dates: "",
      active: false,
      description: "CLI tool for taking screenshots of websites",
      technologies: [],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/HenryTabima/websites-screenshot-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screenshotcli.png",
    },
    {
      title: "React Bookstore",
      href: "https://github.com/SunnyAsar/react-Bookstore",
      dates: "",
      active: false,
      description: "React-Redux project with frontend CRUD operations",
      technologies: ["React", "Redux"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/SunnyAsar/react-Bookstore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/react-bookstore.png",
    },
    {
      title: "Rails Setup",
      href: "https://github.com/HenryTabima/rails-setup",
      dates: "",
      active: false,
      description: "Rails documentation site made with Docusaurus",
      technologies: ["Rails", "Docusaurus"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/HenryTabima/rails-setup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rails-setup.png",
    },
  ],
  hackathons: [
    {
      title: "Starknet Hackathon 2024",
      dates: "September 09th - October 19th, 2024",
      location: "Remote",
      description:
        "The Starknet Hackathon 2024, organized by OpenBuild in collaboration with the Starknet Foundation, is a landmark event designed to bring together the brightest minds in the blockchain community. This hackathon is a part of the larger Starknet Developer Season 2, an initiative aimed at fostering innovation and development within the Starknet ecosystem.",
      image: "/SN.png",
      mlh: "/SN.png",
      links: [],
    },
  ],
} as const;

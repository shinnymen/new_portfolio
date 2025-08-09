import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-5.png";
import project3 from "../assets/projects/project-6.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-7.png";
import project6 from "../assets/projects/project-8.png";
import project7 from "../assets/projects/project-9.png";
import project8 from "../assets/projects/project-10.png";
import project9 from "../assets/projects/project-11.png";
import project10 from "../assets/projects/project-12.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. I also hold a Bachelor's degree in System and Network Administration, which has provided me with a strong foundation in infrastructure management and networking. Additionally, I have developed practical expertise in cybersecurity through platforms like Root Me, where I have sharpened my skills in ethical hacking, identifying system vulnerabilities, and implementing secure application designs. My goal is to leverage my diverse skill set to create innovative, secure, and impactful solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Engineer IT",
    company: "Delinked",
    description: `Full Stack WEB Development - AI Development & Implementation - WEB Cybersecurity. Startup company in an Incubator at EuraTechnologie.`,
    technologies: ["Javascript", "Python", "Django", "React.js", "Next.js", "mongoDB", "Figma", "AI", "Pipecat"],
  },
  {
    year: "2024",
    role: "Administrator of the Systems and Networks",
    company: "DIRISI",
    description: `Working at the Joint Directorate of Defense Infrastructure Networks and Information Systems. Responsible for setting up a dedicated server for a new internet network and ensuring its security.`,
    technologies: ["Linux", "DHCP-DNS-NIS", "VMware", "Cyber"],
  },
  {
    year: "2024",
    role: "Administrator of the Systems and Networks",
    company: "Tysta Networks",
    description: `Participated in the Radio Local Loop connection project for the leading poultry industry group in Senegal.
    Managed enterprise network administration, including Cisco routers, switches, and relay antennas.`,
    technologies: ["CISCO", "LINUX", "Git", "Figma", "Three.js", "GoogleMaps API"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developper",
    company: "W3bCraft & Kid Coding",
    description: `Establishment of a web development and computer programming school for children - Training module on Scratch, Arduino, and JavaScript - Creation of the school's website.`,
    technologies: ["React","Redux", "Javascript", "Node.js", "Express.js", "MongoDB", "Git", "Figma", "Three.js", "GoogleMaps API"],
  },
  {
    year: "2022 - 2022",
    role: "Cybersecurity Analyst",
    company: "ASERO WorldWide",
    description: `Conducted security audits for government organizations in Senegal - Established a national Cyber Defense SOC for the Senegalese government - On-site support (Data Center, Bank, Power Plants) with a cybersecurity expert. Drafted the NIST framework - Prepared reports - Delivered presentations to the client.`,
    technologies: ["NIST", "Kali Linux", "PHP", "Sqlite"],
  },
  {
    year: "2021",
    role: "Developper Front-End",
    company: "Afreecom",
    description: `Conducted security audits for government organizations in Senegal - Established a national Cyber Defense SOC for the Senegalese government - On-site support (Data Center, Bank, Power Plants) with a cybersecurity expert. Drafted the NIST framework - Prepared reports - Delivered presentations to the client.`,
    technologies: ["Angular", "Node.js", "JavaScript"],
  },
];

export const PROJECTS = [
  
  {
    title: "Kid Coding Website",
    image: project1,
    description:
      "A modern platform designed for parents to register their children for coding courses. Once registered, parents are contacted to refine their specific requests. The platform offers flexibility with courses delivered either in-person in dedicated classrooms or online via video conferencing. Equipped with a secure authentication system, the website ensures a seamless registration process while maintaining a responsive and user-friendly experience. Built with React.js for the front-end and Node.js with MongoDB for the back-end, Kid Coding facilitates efficient communication and course management.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://meek-dodol-2a7f61.netlify.app/",
  },
  {
    title: "Interform Africa Website & Blog",
    image: project2,
    description:
      "A user-centric platform designed to help prospective students register for training programs while staying informed through an integrated blog section. The website features a secure authentication system for user account creation and login, ensuring personalized access to the platform's functionalities. Developed with a focus on responsiveness and scalability, the platform combines a modern front-end built with React.js and a robust back-end powered by Node.js and MongoDB. Interform Africa simplifies the enrollment process and keeps users engaged with up-to-date content.",
    technologies: ["HTML", "CSS", "Angular", "React", "MongoDB"],
    link: "https://www.interformafrica.com/",
  },
  {
    title: "On The Road Website & App",
    image: project3,
    description:
      "A comprehensive VTC (chauffeur-driven transport) platform designed to connect clients with professional drivers for seamless transportation services. The platform features client and chauffeur registration, secure authentication, and dynamic dashboards tailored for both roles. Clients can easily book rides to destinations such as airports or train stations, while chauffeurs can manage their availability, reservations, and earnings. Built with React.js for the front-end and Node.js with MongoDB for the back-end, the platform ensures real-time geolocation tracking and efficient ride management. On The Road provides a scalable and user-friendly solution, setting a new standard in chauffeur-driven transport services.",
    technologies: ["HTML", "CSS", "React", "React Native", "MongoDB", "Javascript", "MongoDB"],
  },
  {
    title: "Green Meerkat App",
    image: project5,
    description:
      "A dedicated application designed for golfers to organize their games seamlessly on the courses of their choice. The platform enables golfers to connect, schedule matches, and enhance the competitive experience by placing wagers on their games in a secure and regulated environment. With features like user authentication, real-time match organization, and integrated payment management, Green Meerkat offers a streamlined solution tailored to the golfing community. Built with modern technologies like React Native for cross-platform compatibility and Node.js with MongoDB for a robust back-end, the app combines social networking features with innovative tools to elevate the golfing experience.",
    technologies: ["HTML", "CSS", "React", "Javascript", "MongoDB"],
  },
  {
    title: "Afreecom Website",
    image: project4,
    description:
      "A dynamic e-commerce platform dedicated to empowering local businesses and connecting them with customers across Africa. During my internship, I contributed to the implementation of the front-end, ensuring a responsive and user-friendly interface. Built with modern web technologies, the platform offers features such as product browsing, user registration, and secure checkout. My work focused on delivering a seamless user experience by integrating interactive design components and optimizing the performance of the front-end. Afreecom.net bridges the gap between businesses and customers, fostering economic growth through accessible online shopping.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "https://afreecom.net",
  },
  {
    title: "Webcraft Website",
    image: project6,
    description:
      "IT company belonging to the Medor Diop Entreprises group. Created in 2023 in the Paris region, our goal is to become a key player in the development of web projects that positively impact our environment or aim to improve it.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    link: "https://www.w3bcraft.com/",
  },
  {
    title: "Ecommerce 'Jeund' Website",
    image: project7,
    description:
      "My e-commerce website is a modern and responsive platform, built with React.js and Tailwind CSS, and integrated with AliExpress for automated dropshipping. It features a secure payment system (Stripe, PayPal), optimized user experience, and efficient order management. Designed for scalability, it offers a seamless shopping experience with no stock handling required.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    link: "https://jeund.netlify.app/",
  },
  {
    title: "Carte Restaurant + QR Code",
    image: project8,
    description:
       "DjangoByMomCrêpe is a responsive e-commerce website built with React.js and Node.js, dedicated to selling homemade crêpes. It features a user-friendly interface, customizable orders, and real-time order tracking. The admin panel allows full control over the menu, orders, and content. Secure payments and dynamic UI ensure a smooth and modern experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    link: "https://www.djangobymomcrepes.com/",
  },
    {
    title: "WELI – Mode & Accessoires - En cours",
    image: project9, 
    description:
      "WELI is a modern e-commerce platform dedicated to fashion and accessories, developed with React.js and Node.js. The polished interface offers smooth navigation, a powerful search engine, a dynamic shopping cart, and a secure authentication system. It allows users to explore trendy collections, while enabling sellers to easily showcase their products.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
    link: "https://weli.netlify.app/",
  },
    {
    title: "Toysosex – E-commerce Automatisé",
    image: project10, 
    description:
      "Toysosex is an online store specializing in intimate wellness, built with React.js, Node.js, and MongoDB. The site features an automated dropshipping solution with AliExpress (import, images, videos, orders), a secure authentication system (JWT + Google OAuth), a back-office for product management, and a private community space in development. Secure payments via Stripe/PayPal.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express", "Cloudinary", "Puppeteer"],
    link: "https://toysosex.fr/",
  }

];

export const CONTACT = {
  address: "Paris, France",
  phoneNo: "+33 7 64 36 02 49",
  email: "alexandre.medor@gmail.com",
};

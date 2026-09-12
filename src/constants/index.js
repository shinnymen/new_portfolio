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
import project11 from "../assets/projects/project-13.jpg";
import project12 from "../assets/projects/project-14.png";
import project13 from "../assets/projects/project-15.png";

export const HERO_CONTENT = `I am a Full Stack Developer and IT Engineer with 5 years of experience building modern web, mobile, and real-time applications. I work across the entire development stack, from front-end interfaces with React, Next.js, and React Native to scalable back-end systems using Node.js, Express, TypeScript, MongoDB, PostgreSQL, and REST APIs. I have designed and developed complete platforms involving real-time communication, geolocation, secure payments, authentication, cloud services, and automated systems.

Alongside software development, I hold a degree in Systems and Network Administration, giving me a strong understanding of infrastructure, Linux environments, networking, virtualization, and system security. I also have practical experience in cybersecurity, including vulnerability analysis, security auditing, secure application design, and technologies based on NIST principles.

My recent projects include a complete ride-hailing platform, a digital art marketplace, and an automated cryptocurrency trading system using real-time market data. I enjoy solving complex technical problems and building secure, scalable, and reliable products from concept to production.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "IT Engineer",
    roleFr: "Ingénieur IT",
    company: "Delinked",

    description:
      "Full Stack WEB Development - AI Development & Implementation - WEB Cybersecurity. Startup company in an Incubator at EuraTechnologie.",

    descriptionFr:
      "Développement Web Full Stack - Développement et intégration de solutions d’intelligence artificielle - Cybersécurité Web. Startup accompagnée au sein d’un incubateur à EuraTechnologies.",

    technologies: [
      "Javascript",
      "Python",
      "Django",
      "React.js",
      "Next.js",
      "MongoDB",
      "Figma",
      "AI",
      "Pipecat",
    ],
  },

  {
    year: "2024",
    role: "Systems and Network Administrator",
    roleFr: "Administrateur Systèmes et Réseaux",
    company: "DIRISI",

    description:
      "Working at the Joint Directorate of Defense Infrastructure Networks and Information Systems. Responsible for setting up a dedicated server for a new internet network and ensuring its security.",

    descriptionFr:
      "Mission au sein de la Direction Interarmées des Réseaux d’Infrastructure et des Systèmes d’Information. Mise en place d’un serveur dédié pour un nouveau réseau internet et sécurisation de l’infrastructure.",

    technologies: [
      "Linux",
      "DHCP-DNS-NIS",
      "VMware",
      "Cyber",
    ],
  },

  {
    year: "2024",
    role: "Systems and Network Administrator",
    roleFr: "Administrateur Systèmes et Réseaux",
    company: "Tysta Networks",

    description:
      "Participated in the Radio Local Loop connection project for the leading poultry industry group in Senegal. Managed enterprise network administration, including Cisco routers, switches, and relay antennas.",

    descriptionFr:
      "Participation à un projet de raccordement par boucle locale radio pour un important groupe de l’industrie avicole au Sénégal. Administration du réseau d’entreprise, notamment des routeurs Cisco, switches et antennes relais.",

    technologies: [
      "CISCO",
      "LINUX",
      "Git",
      "Figma",
      "Three.js",
      "GoogleMaps API",
    ],
  },

  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    roleFr: "Développeur Full Stack",
    company: "W3bCraft & Kid Coding",

    description:
      "Establishment of a web development and computer programming school for children - Training module on Scratch, Arduino, and JavaScript - Creation of the school's website.",

    descriptionFr:
      "Création d’une école de développement web et de programmation informatique destinée aux enfants. Conception de modules de formation sur Scratch, Arduino et JavaScript, ainsi que développement du site web de l’école.",

    technologies: [
      "React",
      "Redux",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "Figma",
      "Three.js",
      "GoogleMaps API",
    ],
  },

  {
    year: "2022",
    role: "Cybersecurity Analyst",
    roleFr: "Analyste Cybersécurité",
    company: "ASERO WorldWide",

    description:
      "Conducted security audits for government organizations in Senegal - Established a national Cyber Defense SOC for the Senegalese government - On-site support (Data Center, Bank, Power Plants) with a cybersecurity expert. Drafted the NIST framework - Prepared reports - Delivered presentations to the client.",

    descriptionFr:
      "Réalisation d’audits de sécurité pour des organismes gouvernementaux au Sénégal. Participation à la mise en place d’un SOC national de cyberdéfense. Interventions sur site dans des data centers, banques et centrales électriques aux côtés d’un expert en cybersécurité. Travail autour du framework NIST, rédaction de rapports et présentations aux clients.",

    technologies: [
      "NIST",
      "Kali Linux",
      "PHP",
      "Sqlite",
    ],
  },

  {
    year: "2021",
    role: "Front-End Developer",
    roleFr: "Développeur Front-End",
    company: "Afreecom",

    description:
      "Contributed to the development of the front-end of the Afreecom platform, focusing on user interfaces and web application features.",

    descriptionFr:
      "Participation au développement du front-end de la plateforme Afreecom, avec un travail centré sur les interfaces utilisateur et les fonctionnalités de l’application web.",

    technologies: [
      "Angular",
      "Node.js",
      "JavaScript",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Dieli – VTC Platform",
    titleFr: "Dieli – Plateforme VTC",
    image: project12,
    description:
      "A complete ride-hailing platform developed for both passengers and professional drivers. Dieli includes two React Native mobile applications, a Node.js backend, a web administration dashboard and a public website. The platform supports instant and scheduled rides, real-time driver geolocation, intelligent driver matching, favorite drivers, dynamic pricing and secure payment authorization and capture with Stripe. Real-time ride updates and driver availability are handled through Socket.IO, while MongoDB manages users, rides, pricing rules and operational data.",
    descriptionFr:
      "Une plateforme VTC complète développée pour les passagers et les chauffeurs professionnels. Dieli comprend deux applications mobiles React Native, un backend Node.js, un tableau de bord d’administration web ainsi qu’un site public. La plateforme permet de gérer les courses immédiates et programmées, la géolocalisation des chauffeurs en temps réel, l’attribution intelligente des chauffeurs, les chauffeurs favoris, la tarification dynamique ainsi que l’autorisation et la capture sécurisées des paiements avec Stripe. Les mises à jour des courses et la disponibilité des chauffeurs sont gérées en temps réel via Socket.IO, tandis que MongoDB centralise les utilisateurs, les courses, les règles tarifaires et les données opérationnelles.",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "JWT",
      "REST API",
      "Geolocation",
    ],
    link: "https://dieli.fr/",
  },

  {
    title: "Automated Crypto Trading Bot – JTO",
    titleFr: "Bot de Trading Crypto Automatisé – JTO",
    image: project11,
    description:
      "An automated cryptocurrency trading system designed to analyze the JTO market in real time and execute trading strategies based on live market data. The bot monitors bid/ask prices, spread, portfolio value and market movements through a real-time ticker. It includes a paper-trading engine for strategy testing without financial risk, automated position management, profit and loss tracking, and a live monitoring dashboard. The architecture was designed to evolve toward multiple trading strategies and a SaaS model.",
    descriptionFr:
      "Un système automatisé de trading de cryptomonnaies conçu pour analyser le marché JTO en temps réel et exécuter des stratégies de trading basées sur les données du marché. Le bot surveille les prix bid/ask, le spread, la valeur du portefeuille ainsi que les mouvements du marché via un ticker en temps réel. Il intègre un moteur de paper trading permettant de tester les stratégies sans risque financier, une gestion automatisée des positions, le suivi des gains et pertes ainsi qu’un tableau de bord de supervision en direct. L’architecture a été conçue pour évoluer vers plusieurs stratégies de trading et un modèle SaaS.",
    technologies: [
      "JavaScript",
      "Node.js",
      "REST API",
      "WebSocket",
      "Trading API",
      "Real-Time Data",
      "Algorithmic Trading",
      "Paper Trading",
    ],
  },

  {
    title: "Kalosium – Digital Art Platform",
    titleFr: "Kalosium – Plateforme d’Art Numérique",
    image: project13,
    description:
      "A full-stack digital art platform designed to connect artists, collectors and art enthusiasts. The application features secure user authentication, role-based access, artwork management, bidding, private messaging and an administration system. Images are uploaded directly to Cloudinary using secure backend-generated signatures, while artwork metadata and user data are stored in MongoDB Atlas. The platform is built with a React/Vite front-end and a Node.js/TypeScript REST API architecture.",
    descriptionFr:
      "Une plateforme full-stack dédiée à l’art numérique, conçue pour connecter artistes, collectionneurs et passionnés d’art. L’application propose une authentification sécurisée, une gestion des accès par rôles, la gestion des œuvres, un système d’enchères, une messagerie privée ainsi qu’un espace d’administration. Les images sont envoyées directement vers Cloudinary grâce à des signatures sécurisées générées par le backend, tandis que les métadonnées des œuvres et les données utilisateurs sont stockées dans MongoDB Atlas. La plateforme repose sur un front-end React/Vite et une architecture API REST Node.js/TypeScript.",
    technologies: [
      "React.js",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "REST API",
      "Heroku",
    ],
    link: "https://etheralafricart.netlify.app/",
  },

  {
    title: "Kid Coding Website",
    titleFr: "Site Kid Coding",
    image: project1,
    description:
      "A modern platform designed for parents to register their children for coding courses. Once registered, parents are contacted to refine their specific requests. The platform offers flexibility with courses delivered either in-person in dedicated classrooms or online via video conferencing. Equipped with a secure authentication system, the website ensures a seamless registration process while maintaining a responsive and user-friendly experience. Built with React.js for the front-end and Node.js with MongoDB for the back-end, Kid Coding facilitates efficient communication and course management.",
    descriptionFr:
      "Une plateforme moderne permettant aux parents d’inscrire leurs enfants à des cours de programmation. Après l’inscription, les parents sont contactés afin de préciser leurs besoins. La plateforme propose des cours en présentiel dans des salles dédiées ou à distance par visioconférence. Grâce à un système d’authentification sécurisé, le site offre un processus d’inscription fluide ainsi qu’une expérience responsive et simple d’utilisation. Développé avec React.js pour le front-end et Node.js avec MongoDB pour le back-end, Kid Coding facilite la communication et la gestion des formations.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://meek-dodol-2a7f61.netlify.app/",
  },

  {
    title: "Interform Africa Website & Blog",
    titleFr: "Interform Africa – Site Web & Blog",
    image: project2,
    description:
      "A user-centric platform designed to help prospective students register for training programs while staying informed through an integrated blog section. The website features a secure authentication system for user account creation and login, ensuring personalized access to the platform's functionalities. Developed with a focus on responsiveness and scalability, the platform combines a modern front-end built with React.js and a robust back-end powered by Node.js and MongoDB. Interform Africa simplifies the enrollment process and keeps users engaged with up-to-date content.",
    descriptionFr:
      "Une plateforme centrée sur l’utilisateur, conçue pour permettre aux futurs étudiants de s’inscrire à des programmes de formation tout en restant informés grâce à une section blog intégrée. Le site dispose d’un système d’authentification sécurisé pour la création de comptes et la connexion des utilisateurs. Développée avec une attention particulière portée au responsive design et à l’évolutivité, la plateforme associe un front-end moderne en React.js à un back-end Node.js et MongoDB. Interform Africa simplifie le processus d’inscription tout en proposant du contenu régulièrement mis à jour.",
    technologies: ["HTML", "CSS", "Angular", "React", "MongoDB"],
    link: "https://www.interformafrica.com/",
  },

  {
    title: "On The Road Website & App",
    titleFr: "On The Road – Site Web & Application",
    image: project3,
    description:
      "A comprehensive VTC (chauffeur-driven transport) platform designed to connect clients with professional drivers for seamless transportation services. The platform features client and chauffeur registration, secure authentication, and dynamic dashboards tailored for both roles. Clients can easily book rides to destinations such as airports or train stations, while chauffeurs can manage their availability, reservations, and earnings. Built with React.js for the front-end and Node.js with MongoDB for the back-end, the platform ensures real-time geolocation tracking and efficient ride management. On The Road provides a scalable and user-friendly solution, setting a new standard in chauffeur-driven transport services.",
    descriptionFr:
      "Une plateforme VTC complète conçue pour mettre en relation les clients avec des chauffeurs professionnels. Elle propose l’inscription des clients et chauffeurs, une authentification sécurisée ainsi que des tableaux de bord adaptés à chaque rôle. Les clients peuvent facilement réserver des courses vers des destinations comme les aéroports ou les gares, tandis que les chauffeurs peuvent gérer leur disponibilité, leurs réservations et leurs revenus. Développée avec React.js pour le front-end et Node.js avec MongoDB pour le back-end, la plateforme permet le suivi de géolocalisation en temps réel et une gestion efficace des courses. On The Road propose une solution évolutive et simple d’utilisation pour les services de transport avec chauffeur.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "React Native",
      "MongoDB",
      "Javascript",
      "MongoDB",
    ],
  },

  {
    title: "Green Meerkat App",
    titleFr: "Application Green Meerkat",
    image: project5,
    description:
      "A dedicated application designed for golfers to organize their games seamlessly on the courses of their choice. The platform enables golfers to connect, schedule matches, and enhance the competitive experience by placing wagers on their games in a secure and regulated environment. With features like user authentication, real-time match organization, and integrated payment management, Green Meerkat offers a streamlined solution tailored to the golfing community. Built with modern technologies like React Native for cross-platform compatibility and Node.js with MongoDB for a robust back-end, the app combines social networking features with innovative tools to elevate the golfing experience.",
    descriptionFr:
      "Une application dédiée aux golfeurs permettant d’organiser facilement leurs parties sur les parcours de leur choix. La plateforme leur permet de se connecter entre eux, de programmer des matchs et d’enrichir l’aspect compétitif de leurs parties grâce à un système de mises dans un environnement sécurisé et réglementé. Avec des fonctionnalités comme l’authentification utilisateur, l’organisation des matchs en temps réel et la gestion intégrée des paiements, Green Meerkat propose une solution adaptée à la communauté des golfeurs. Développée avec React Native pour la compatibilité multiplateforme et Node.js avec MongoDB pour le back-end, l’application combine fonctionnalités sociales et outils innovants.",
    technologies: ["HTML", "CSS", "React", "Javascript", "MongoDB"],
  },

  {
    title: "Afreecom Website",
    titleFr: "Site Afreecom",
    image: project4,
    description:
      "A dynamic e-commerce platform dedicated to empowering local businesses and connecting them with customers across Africa. During my internship, I contributed to the implementation of the front-end, ensuring a responsive and user-friendly interface. Built with modern web technologies, the platform offers features such as product browsing, user registration, and secure checkout. My work focused on delivering a seamless user experience by integrating interactive design components and optimizing the performance of the front-end. Afreecom.net bridges the gap between businesses and customers, fostering economic growth through accessible online shopping.",
    descriptionFr:
      "Une plateforme e-commerce dynamique destinée à soutenir les entreprises locales et à les connecter avec des clients à travers l’Afrique. Durant mon stage, j’ai participé au développement du front-end afin de proposer une interface responsive et simple d’utilisation. La plateforme permet notamment de parcourir les produits, de créer un compte utilisateur et de réaliser des paiements sécurisés. Mon travail s’est concentré sur l’amélioration de l’expérience utilisateur, l’intégration de composants interactifs et l’optimisation des performances du front-end. Afreecom.net contribue à rapprocher entreprises et consommateurs grâce au commerce en ligne.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "https://afreecom.net",
  },

  {
    title: "Webcraft Website",
    titleFr: "Site Webcraft",
    image: project6,
    description:
      "IT company belonging to the Medor Diop Entreprises group. Created in 2023 in the Paris region, our goal is to become a key player in the development of web projects that positively impact our environment or aim to improve it.",
    descriptionFr:
      "Entreprise informatique appartenant au groupe Medor Diop Entreprises. Créée en 2023 en région parisienne, son objectif est de devenir un acteur important dans le développement de projets web ayant un impact positif sur leur environnement ou visant à l’améliorer.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    link: "https://w3bcraft.netlify.app/",
  },

  {
    title: "Ecommerce 'Jeund' Website",
    titleFr: "Site E-commerce « Jeund »",
    image: project7,
    description:
      "My e-commerce website is a modern and responsive platform, built with React.js and Tailwind CSS, and integrated with AliExpress for automated dropshipping. It features a secure payment system (Stripe, PayPal), optimized user experience, and efficient order management. Designed for scalability, it offers a seamless shopping experience with no stock handling required.",
    descriptionFr:
      "Mon site e-commerce est une plateforme moderne et responsive développée avec React.js et Tailwind CSS, intégrée à AliExpress pour automatiser le dropshipping. Elle dispose d’un système de paiement sécurisé avec Stripe et PayPal, d’une expérience utilisateur optimisée ainsi que d’une gestion efficace des commandes. Pensée pour être évolutive, la plateforme propose une expérience d’achat fluide sans nécessiter de gestion directe des stocks.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    link: "https://jeund.netlify.app/",
  },

  {
    title: "Carte Restaurant + QR Code",
    titleFr: "Carte Restaurant + QR Code",
    image: project8,
    description:
      "DjangoByMomCrêpe is a responsive e-commerce website built with React.js and Node.js, dedicated to selling homemade crêpes. It features a user-friendly interface, customizable orders, and real-time order tracking. The admin panel allows full control over the menu, orders, and content. Secure payments and dynamic UI ensure a smooth and modern experience.",
    descriptionFr:
      "DjangoByMomCrêpe est un site e-commerce responsive développé avec React.js et Node.js, dédié à la vente de crêpes faites maison. Il propose une interface simple d’utilisation, des commandes personnalisables ainsi qu’un suivi des commandes en temps réel. Le panneau d’administration permet de gérer entièrement le menu, les commandes et le contenu du site. Les paiements sécurisés et l’interface dynamique garantissent une expérience moderne et fluide.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
    link: "https://www.djangobymomcrepes.com/",
  },

  {
    title: "WELI – Fashion & Accessories - In progress",
    titleFr: "WELI – Mode & Accessoires - En cours",
    image: project9,
    description:
      "WELI is a modern e-commerce platform dedicated to fashion and accessories, developed with React.js and Node.js. The polished interface offers smooth navigation, a powerful search engine, a dynamic shopping cart, and a secure authentication system. It allows users to explore trendy collections, while enabling sellers to easily showcase their products.",
    descriptionFr:
      "WELI est une plateforme e-commerce moderne dédiée à la mode et aux accessoires, développée avec React.js et Node.js. Son interface soignée offre une navigation fluide, un moteur de recherche performant, un panier dynamique ainsi qu’un système d’authentification sécurisé. Elle permet aux utilisateurs de découvrir différentes collections tout en donnant aux vendeurs la possibilité de présenter facilement leurs produits.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    link: "https://weli.netlify.app/",
  },

  {
    title: "Toysosex – Automated E-commerce",
    titleFr: "Toysosex – E-commerce Automatisé",
    image: project10,
    description:
      "Toysosex is an online store specializing in intimate wellness, built with React.js, Node.js, and MongoDB. The site features an automated dropshipping solution with AliExpress (import, images, videos, orders), a secure authentication system (JWT + Google OAuth), a back-office for product management, and a private community space in development. Secure payments via Stripe/PayPal.",
    descriptionFr:
      "Toysosex est une boutique en ligne spécialisée dans le bien-être intime, développée avec React.js, Node.js et MongoDB. Le site intègre une solution automatisée de dropshipping avec AliExpress pour l’importation des produits, images, vidéos et commandes, un système d’authentification sécurisé avec JWT et Google OAuth, un back-office pour la gestion des produits ainsi qu’un espace communautaire privé en cours de développement. Les paiements sont sécurisés via Stripe et PayPal.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express",
      "Cloudinary",
      "Puppeteer",
    ],
    link: "https://sextoyzfront.netlify.app/",
  },
];

export const CONTACT = {
  address: "Paris, France",
  phoneNo: "+33 7 64 36 02 49",
  email: "alexandre.medor@gmail.com",
};

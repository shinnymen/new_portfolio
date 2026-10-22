
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

// ==========================================
// HERO — PROFESSIONAL PROFILE
// ==========================================

export const HERO_CONTENT = `I am a Cloud & Cybersecurity Consultant specializing in cloud security, security governance, technical audits, risk and vulnerability assessments, and remediation.

My experience includes consulting assignments with FENIA (2024–2026) and SkyStacks (2022–2024), focusing on securing cloud environments, systems, networks, and applications.

I work on IAM/RBAC access reviews, security hardening, network segmentation, least-privilege principles, SOC/SIEM monitoring, and NIST-aligned security assessments.

With a background in systems and network administration and secure software development, I bridge cybersecurity governance and hands-on technical implementation.`;

export const HERO_CONTENT_FR = `Je suis consultant Cloud & Cybersécurité, spécialisé en sécurité cloud, gouvernance cybersécurité, audits techniques, analyses de risques, évaluations de vulnérabilités et accompagnement à la remédiation.

Mon parcours comprend des missions de conseil chez FENIA (2024–2026) et SkyStacks (2022–2024), sur des environnements cloud, systèmes, réseaux et applications.

J'interviens sur les revues IAM/RBAC, le durcissement des systèmes, la segmentation réseau, le principe du moindre privilège, la supervision SOC/SIEM et les évaluations de sécurité alignées sur NIST.

Ma double compétence en administration systèmes et réseaux et en développement sécurisé me permet d'associer gouvernance cybersécurité et mise en œuvre technique.`;

// ==========================================
// ABOUT
// ==========================================

export const ABOUT_TEXT = `My professional focus is cybersecurity consulting, including security governance, CSO advisory support, cloud security assessments, infrastructure audits, vulnerability management, IAM/RBAC reviews, and remediation.

My assignments have involved sensitive environments, network infrastructures, and SOC monitoring, with experience in security reporting and technical recommendations.

My full-stack development background complements my cybersecurity expertise through a practical understanding of application architectures, authentication, authorization, API security, and cloud deployments.

I continuously strengthen my technical skills through Root-Me challenges, security labs, and infrastructure projects.`;

export const ABOUT_TEXT_FR = `Mon activité professionnelle est centrée sur le conseil en cybersécurité : gouvernance, CSO Advisory, évaluations de sécurité cloud, audits d'infrastructure, gestion des vulnérabilités, revues IAM/RBAC et accompagnement à la remédiation.

Mes missions m'ont amené à intervenir sur des environnements sensibles, des infrastructures réseau et des activités de supervision SOC, avec une attention particulière portée aux recommandations techniques et au reporting.

Mon parcours en développement full-stack complète mon expertise cybersécurité grâce à une compréhension concrète des architectures applicatives, de l'authentification, des autorisations, de la sécurité des API et des déploiements cloud.

Je continue de développer mes compétences à travers Root-Me, des laboratoires de sécurité et des projets d'infrastructure.`;

// ==========================================
// PROFESSIONAL EXPERIENCE
// ==========================================

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Cloud & Cybersecurity Consultant",
    roleFr: "Consultant Cloud & Cybersécurité",
    company: "FENIA",

    description:
      "Security Governance and CSO Advisory support, including risk analysis, security recommendations and remediation guidance. Security audits and risk assessments across cloud, systems, networks and applications. Cloud security configuration reviews, IAM/RBAC access reviews, network segmentation, least-privilege controls, vulnerability assessments, security hardening, and SIEM log analysis.",

    descriptionFr:
      "Contribution à la gouvernance cybersécurité et aux activités de CSO Advisory : analyse des risques, recommandations et accompagnement à la remédiation. Réalisation d'audits de sécurité et d'analyses de risques sur les environnements cloud, systèmes, réseaux et applications. Revues de configuration cloud, contrôle des accès IAM/RBAC, segmentation réseau, moindre privilège, évaluations de vulnérabilités, durcissement et analyse des événements via SIEM.",

    technologies: [
      "AWS",
      "IAM",
      "RBAC",
      "Linux",
      "Windows Server",
      "Docker",
      "Git",
      "Splunk",
      "ELK",
      "Wireshark",
      "Nmap",
      "OpenVAS",
      "JWT",
      "API Security",
      "Zero Trust",
      "SIEM",
    ],
  },

  {
    year: "2021 - 2023",
    role: "Cybersecurity Consultant",
    roleFr: "Consultant Cybersécurité",
    company: "SkyStacks",

    description:
      "Security governance and CSO support, infrastructure security audits, risk and vulnerability assessments. Linux and Windows security hardening, network traffic analysis, segmentation, access controls and configuration reviews. SOC/SIEM monitoring, security event analysis, incident follow-up, reporting and remediation tracking.",

    descriptionFr:
      "Contribution à la gouvernance de sécurité et au support CSO. Réalisation d'audits techniques, d'analyses de risques des infrastructures et d'évaluations de vulnérabilités. Durcissement des environnements Linux et Windows, analyse des flux réseau, segmentation, contrôle des accès et sécurisation des configurations. Supervision SOC/SIEM, analyse des événements, suivi des incidents, rédaction de rapports et accompagnement à la remédiation.",

    technologies: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Cisco IOS",
      "VLAN",
      "TCP/IP",
      "Stormshield",
      "Wireshark",
      "Nmap",
      "OpenVAS",
      "Burp Suite",
      "Splunk",
      "ELK",
      "VMware",
      "Proxmox",
    ],
  },

  {
    year: "2017 - 2024",
    role: "Cybersecurity Analyst",
    roleFr: "Analyste Cybersécurité",
    company: "ASERO Worldwide",

    description:
      "Security audits for government organizations in Senegal. Support and monitoring of a national cyberdefense SOC. Security assignments involving sensitive infrastructures including data centers, banks and power plants. NIST-aligned security reporting and presentation of findings.",

    descriptionFr:
      "Réalisation d'audits de sécurité auprès d'organisations gouvernementales au Sénégal. Support et monitoring d'un SOC national de cyberdéfense. Interventions sur des infrastructures sensibles : datacenters, banques et centrales électriques. Rédaction de rapports alignés sur le référentiel NIST et présentation des constats.",

    technologies: [
      "NIST",
      "Security Audit",
      "SOC",
      "Cyber Defense",
      "Critical Infrastructure",
      "Risk Assessment",
      "Security Reporting",
    ],
  },

  {
    year: "2021 - 2022",
    role: "Systems & Network Security",
    roleFr: "Sécurité Systèmes & Réseaux",
    company: "Tysta Networks",

    description:
      "Deployment and administration of multisite network infrastructure. Configuration of Cisco routers, switches, VLANs and secure IP addressing. RADWIN wireless network deployment and RNMS monitoring, including performance and redundancy. Technical documentation and network security.",

    descriptionFr:
      "Déploiement et administration d'une infrastructure réseau multisite. Configuration de routeurs et switches Cisco, VLAN et adressage IP sécurisé. Déploiement RADWIN et supervision RNMS, optimisation des performances et de la redondance. Documentation technique et sécurisation de l'exploitation réseau.",

    technologies: [
      "RADWIN",
      "RNMS",
      "Cisco IOS",
      "VLAN",
      "Routing",
      "TCP/IP",
      "Windows Server",
      "Network Monitoring",
    ],
  },

  {
    year: "Oct 2024",
    role: "Infrastructure Security Administrator",
    roleFr: "Administrateur Sécurité Infrastructure",
    company: "DIRISI (French Armed Forces)",

    description:
      "Deployment of a dedicated server for an operational unit. Securing the server infrastructure and its internet connectivity, with attention to systems, networks and access security.",

    descriptionFr:
      "Mise en place d'un serveur dédié pour une unité métier au sein de la DIRISI. Sécurisation du serveur et de son accès Internet, avec une approche orientée systèmes, réseaux et sécurité.",

    technologies: [
      "Windows",
      "Linux",
      "Server Infrastructure",
      "Network Security",
    ],
  },
];

// ==========================================
// PROJECTS
// ==========================================

export const PROJECTS = [
  {
    title: "Secure Server Infrastructure – Two Remote Sites",
    titleFr: "Infrastructure Serveur Sécurisée – Deux Sites Distants",
    image: project4,

    description:
      "Academic project involving the design and deployment of a secure server infrastructure across two remote sites. Dell PowerEdge virtualization with VMware and Proxmox, Windows Server 2016 domain services, DNS, DHCP, DMZ architecture, Docker and secured mail services using Postfix, SpamAssassin and ClamAV. Technical documentation of the architecture and security decisions.",

    descriptionFr:
      "Projet académique de conception et de déploiement d'une infrastructure serveur sécurisée sur deux sites distants. Virtualisation Dell PowerEdge avec VMware et Proxmox, contrôleur de domaine Windows Server 2016, DNS, DHCP, architecture DMZ, Docker et messagerie sécurisée avec Postfix, SpamAssassin et ClamAV. Documentation de l'architecture et des choix de sécurité.",

    technologies: [
      "Windows Server 2016",
      "VMware",
      "Proxmox",
      "DNS",
      "DHCP",
      "DMZ",
      "Docker",
      "Postfix",
      "SpamAssassin",
      "ClamAV",
    ],
  },

  {
    title: "Cybersecurity Practice – Root-Me",
    titleFr: "Pratique Cybersécurité – Root-Me",
    image: project11,

    description:
      "Hands-on cybersecurity practice since 2022 with more than 106 challenges covering web security, cryptography, reverse engineering, network security, digital forensics and privilege escalation. Practical vulnerability analysis, secure coding and system hardening.",

    descriptionFr:
      "Pratique de la cybersécurité depuis 2022 avec plus de 106 challenges Root-Me dans les domaines de la sécurité web, cryptographie, reverse engineering, réseaux, forensic et élévation de privilèges. Analyse pratique des vulnérabilités, développement sécurisé et durcissement des systèmes.",

    technologies: [
      "Web Security",
      "Network Security",
      "Forensics",
      "Reverse Engineering",
      "Cryptography",
      "Privilege Escalation",
    ],
  },

  {
    title: "Dieli – Application Security / Secure Development",
    titleFr: "Dieli – Sécurité Applicative / Développement Sécurisé",
    image: project12,

    description:
      "Professional ride-hailing platform developed with a security-focused application architecture. JWT authentication, role-based access control for passengers, drivers and administrators, protected REST APIs, data validation and Stripe payment authorization/capture workflows. The platform includes two React Native mobile applications, a Node.js/Express backend, MongoDB, real-time Socket.IO communication, geolocation, instant and scheduled rides, and a web administration dashboard.",

    descriptionFr:
      "Plateforme VTC professionnelle développée avec une approche orientée sécurité applicative. Authentification JWT, contrôle d'accès RBAC pour les clients, chauffeurs et administrateurs, protection des API REST, validation des données et gestion des flux de préautorisation et capture des paiements Stripe. La plateforme comprend deux applications React Native, un backend Node.js/Express, MongoDB, Socket.IO, la géolocalisation en temps réel, les courses immédiates et programmées et un tableau de bord d'administration.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React Native",
      "Socket.IO",
      "JWT",
      "RBAC",
      "Stripe",
      "Firebase",
      "API Security",
    ],

    link: "https://dieli.fr/",
  },

  {
    title: "Kalosium – Digital Art Platform",
    titleFr: "Kalosium – Plateforme d'Art Numérique",
    image: project13,

    description:
      "Digital art marketplace connecting artists, collectors and art enthusiasts. Secure authentication, role-based access control, artwork management, bidding, private messaging and administration. Cloudinary uploads with backend-generated signatures, MongoDB Atlas data storage and a Node.js/TypeScript REST API. The project demonstrates secure application architecture and access management.",

    descriptionFr:
      "Plateforme de marché de l'art numérique destinée aux artistes, collectionneurs et passionnés. Authentification sécurisée, gestion des accès par rôles, gestion des œuvres, offres d'achat, messagerie privée et administration. Téléversement Cloudinary avec signatures générées côté backend, stockage MongoDB Atlas et API REST Node.js/TypeScript. Le projet met en avant la sécurité applicative et la gestion des autorisations.",

    technologies: [
      "React.js",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "RBAC",
      "Cloudinary",
      "REST API",
      "Heroku",
    ],

    link: "https://etheralafricart.netlify.app/",
  },

  {
    title: "Automated Crypto Trading Bot – JTO",
    titleFr: "Bot de Trading Crypto Automatisé – JTO",
    image: project11,

    description:
      "Automated cryptocurrency trading system analyzing JTO market data in real time. Bid/ask monitoring, spread analysis, portfolio tracking, paper-trading engine, automated position management and live monitoring dashboard. Built around REST APIs, WebSockets and real-time data processing.",

    descriptionFr:
      "Système automatisé de trading de cryptomonnaies permettant d'analyser le marché JTO en temps réel. Surveillance des prix bid/ask, analyse du spread, suivi du portefeuille, moteur de paper trading, gestion automatisée des positions et tableau de bord de supervision. Architecture basée sur les API REST, WebSockets et le traitement de données en temps réel.",

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
    title: "Kid Coding Website",
    titleFr: "Site Kid Coding",
    image: project1,

    description:
      "Web platform allowing parents to register their children for programming courses. Authentication, registration management and responsive interfaces. Courses cover Scratch, Arduino and JavaScript, with both in-person and online learning options.",

    descriptionFr:
      "Plateforme web permettant aux parents d'inscrire leurs enfants à des cours de programmation. Authentification, gestion des inscriptions et interfaces responsive. Formations autour de Scratch, Arduino et JavaScript, en présentiel ou à distance.",

    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
    ],

    link: "https://meek-dodol-2a7f61.netlify.app/",
  },

  {
    title: "Interform Africa Website & Blog",
    titleFr: "Interform Africa – Site Web & Blog",
    image: project2,

    description:
      "Training registration platform with an integrated blog, user authentication and responsive interfaces. Front-end and back-end development focused on accessibility, account management and scalability.",

    descriptionFr:
      "Plateforme d'inscription à des formations avec blog intégré, authentification utilisateur et interfaces responsive. Développement front-end et back-end orienté accessibilité, gestion des comptes et évolutivité.",

    technologies: [
      "HTML",
      "CSS",
      "Angular",
      "React",
      "MongoDB",
    ],

    link: "https://www.interformafrica.com/",
  },

  {
    title: "On The Road Website & App",
    titleFr: "On The Road – Site Web & Application",
    image: project3,

    description:
      "Ride-hailing platform connecting customers and professional drivers. Secure authentication, role-specific dashboards, ride reservations, driver availability, real-time geolocation and ride management.",

    descriptionFr:
      "Plateforme VTC mettant en relation clients et chauffeurs professionnels. Authentification sécurisée, tableaux de bord par rôle, réservations, gestion des disponibilités, géolocalisation en temps réel et suivi des courses.",

    technologies: [
      "HTML",
      "CSS",
      "React",
      "React Native",
      "MongoDB",
      "JavaScript",
    ],
  },

  {
    title: "Green Meerkat App",
    titleFr: "Application Green Meerkat",
    image: project5,

    description:
      "Mobile application for golfers to organize games, connect with other players and manage matches. User authentication, real-time match organization and integrated payment features.",

    descriptionFr:
      "Application mobile destinée aux golfeurs pour organiser leurs parties, échanger avec d'autres joueurs et gérer leurs matchs. Authentification utilisateur, organisation des rencontres en temps réel et fonctionnalités de paiement intégrées.",

    technologies: [
      "HTML",
      "CSS",
      "React",
      "JavaScript",
      "MongoDB",
    ],
  },

  {
    title: "Afreecom Website",
    titleFr: "Site Afreecom",
    image: project4,

    description:
      "E-commerce platform connecting local African businesses with customers. Front-end development during an internship, including responsive interfaces, interactive components and user-experience improvements.",

    descriptionFr:
      "Plateforme e-commerce reliant les entreprises locales africaines à leurs clients. Contribution au développement front-end durant un stage : interfaces responsive, composants interactifs et amélioration de l'expérience utilisateur.",

    technologies: [
      "HTML",
      "CSS",
      "Vue.js",
      "Express",
      "MySQL",
    ],

    link: "https://afreecom.net",
  },

  {
    title: "Webcraft Website",
    titleFr: "Site Webcraft",
    image: project6,

    description:
      "Website for an IT company created in 2023 in the Paris region, focused on developing digital projects and technology solutions.",

    descriptionFr:
      "Site d'une entreprise informatique créée en 2023 en région parisienne, spécialisée dans le développement de projets numériques et de solutions technologiques.",

    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "MongoDB",
    ],

    link: "https://w3bcraft.netlify.app/",
  },

  {
    title: "Ecommerce 'Jeund' Website",
    titleFr: "Site E-commerce « Jeund »",
    image: project7,

    description:
      "Responsive e-commerce application developed with React.js and Tailwind CSS, featuring AliExpress dropshipping integration, Stripe/PayPal payments and order management.",

    descriptionFr:
      "Application e-commerce responsive développée avec React.js et Tailwind CSS, intégrant le dropshipping AliExpress, les paiements Stripe/PayPal et la gestion des commandes.",

    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "MongoDB",
    ],

    link: "https://jeund.netlify.app/",
  },

  {
    title: "Carte Restaurant + QR Code",
    titleFr: "Carte Restaurant + QR Code",
    image: project8,

    description:
      "DjangoByMomCrêpe is a responsive online ordering platform for homemade crêpes, featuring customizable orders, order tracking, secure payments and an administration dashboard.",

    descriptionFr:
      "DjangoByMomCrêpe est une plateforme responsive de commande de crêpes proposant des commandes personnalisables, le suivi des commandes, des paiements sécurisés et un tableau de bord d'administration.",

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
    title: "WELI – Fashion & Accessories – In Progress",
    titleFr: "WELI – Mode & Accessoires – En cours",
    image: project9,

    description:
      "Fashion and accessories e-commerce platform featuring product search, dynamic shopping cart, secure authentication and seller-oriented features.",

    descriptionFr:
      "Plateforme e-commerce dédiée à la mode et aux accessoires, avec recherche de produits, panier dynamique, authentification sécurisée et fonctionnalités destinées aux vendeurs.",

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
      "Automated e-commerce platform featuring AliExpress product integration, JWT and Google OAuth authentication, product administration, Cloudinary media management and Stripe/PayPal payment integration.",

    descriptionFr:
      "Plateforme e-commerce automatisée intégrant les produits AliExpress, l'authentification JWT et Google OAuth, l'administration des produits, la gestion des médias Cloudinary et les paiements Stripe/PayPal.",

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

// ==========================================
// CYBERSECURITY SKILLS
// ==========================================

export const CYBERSECURITY_SKILLS = [
  {
    category: "Security Governance & Risk",
    categoryFr: "Gouvernance & Gestion des Risques",
    skills: [
      "Security Governance",
      "CSO Advisory",
      "Security Audit",
      "Risk Assessment",
      "NIST",
      "Security Reporting",
      "Remediation",
    ],
  },
  {
    category: "Cloud & Infrastructure Security",
    categoryFr: "Sécurité Cloud & Infrastructure",
    skills: [
      "AWS",
      "Cloud Security Assessment",
      "Linux Hardening",
      "Windows Server",
      "IAM",
      "RBAC",
      "Zero Trust",
      "Docker",
      "VMware",
      "Proxmox",
    ],
  },
  {
    category: "Security Operations",
    categoryFr: "Opérations de Sécurité",
    skills: [
      "SOC",
      "SIEM",
      "Splunk",
      "ELK",
      "Security Monitoring",
      "Log Analysis",
      "Vulnerability Assessment",
      "OpenVAS",
    ],
  },
  {
    category: "Network & Application Security",
    categoryFr: "Sécurité Réseau & Applicative",
    skills: [
      "Cisco IOS",
      "VLAN",
      "TCP/IP",
      "Stormshield",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "JWT",
      "API Security",
      "Secure Development",
    ],
  },
];

// ==========================================
// EDUCATION & CERTIFICATIONS
// ==========================================

export const EDUCATION = [
  {
    year: "2017",
    institution: "Université Paris 8",
    degree: "Master Cybersecurity and Data Science",
    degreeFr: "Master Cybersécurité et Data Science",
  },
  {
    year: "2024",
    institution: "Stormshield",
    degree: "Certified Stormshield Network Administrator (CSNA)",
    degreeFr: "Certification Stormshield Network Administrator (CSNA)",
  },
  {
    year: "2024",
    institution: "École 42",
    degree: "Intensive Programming Bootcamp (Piscine)",
    degreeFr: "Piscine 42 – Bootcamp intensif de programmation",
  },
  {
    year: "2015",
    institution: "Université de Versailles Saint-Quentin-en-Yvelines",
    degree: "Bachelor Systems & Network Administration – Cybersecurity",
    degreeFr: "Bachelor Administration Systèmes & Réseaux – Option Cybersécurité",
  },
  {
    year: "2013",
    institution: "WebForce 3",
    degree: "BAC+2 Web & Mobile Application Development",
    degreeFr: "BAC+2 Développement Web & Applications Mobiles",
  },
];

// ==========================================
// LANGUAGES
// ==========================================

export const LANGUAGES = [
  {
    language: "French",
    languageFr: "Français",
    level: "Fluent",
    levelFr: "Courant",
  },
  {
    language: "English",
    languageFr: "Anglais",
    level: "B1 (TOEIC)",
    levelFr: "B1 (TOEIC)",
  },
  {
    language: "Wolof",
    languageFr: "Wolof",
    level: "Fluent",
    levelFr: "Courant",
  },
  {
    language: "German",
    languageFr: "Allemand",
    level: "Basic",
    levelFr: "Notions",
  },
  {
    language: "Spanish",
    languageFr: "Espagnol",
    level: "Basic",
    levelFr: "Notions",
  },
];

// ==========================================
// CONTACT
// ==========================================

export const CONTACT = {
  address: "Paris, France",
  phoneNo: "+33 7 64 36 02 49",
  email: "alexandre.medor@gmail.com",
};

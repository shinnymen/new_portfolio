import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

import paris8Logo from "../assets/paris8-logo.png";
import uvsqLogo from "../assets/uvsq-logo.png";
import stormshieldLogo from "../assets/stormshield-logo.png";
import school42Logo from "../assets/42-logo.png";
import rootmeLogo from "../assets/rootme-logo.png";

import { useLanguage } from "../context/LanguageContext";

const EDUCATION = [
  {
    title: "Master’s Degree in Cybersecurity and Data Science",
    titleFr: "Master en Cybersécurité et Data Science",

    school: "Université Paris 8",
    date: "2024 – 2026",
    logo: paris8Logo,

    description:
      "Master’s degree focused on cybersecurity, data science, information systems security and modern data-driven technologies.",

    descriptionFr:
      "Master spécialisé en cybersécurité, data science, sécurité des systèmes d’information et technologies modernes basées sur les données.",
  },

  {
    title:
      "Bachelor’s Degree in Systems and Network Administration – Cybersecurity Option",

    titleFr:
      "Licence en Administration Systèmes et Réseaux – Option Cybersécurité",

    school: "Université de Versailles Saint-Quentin",
    date: "2023 – 2024",
    logo: uvsqLogo,

    description:
      "Specialized training in systems and network administration, infrastructure management, networking and cybersecurity.",

    descriptionFr:
      "Formation spécialisée en administration des systèmes et réseaux, gestion des infrastructures, réseaux informatiques et cybersécurité.",
  },

  {
    title: "Associate Degree (BAC+2) in Full Stack Web Development",

    titleFr:
      "Diplôme BAC+2 en Développement Web Full Stack",

    school: "WebForce3",
    date: "2021",

    description:
      "Professional degree in Full Stack Web Development covering front-end and back-end development, databases, APIs, responsive web applications and modern web development practices.",

    descriptionFr:
      "Formation professionnelle en développement Web Full Stack couvrant le développement front-end et back-end, les bases de données, les API, les applications web responsive et les pratiques modernes du développement web.",
  },

  {
    title:
      "BTS in Management of Commercial Units – Marketing Option",

    titleFr:
      "BTS Management des Unités Commerciales – Option Marketing",

    school: "EPSECO Périgueux",
    date: "2011 – 2013",

    description:
      "Higher technical diploma focused on business management, sales, customer relations and marketing.",

    descriptionFr:
      "Diplôme supérieur axé sur la gestion commerciale, la vente, la relation client et le marketing.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Certified StormShield Network Administrator (CSNA)",

    titleFr:
      "Administrateur Réseau Stormshield Certifié (CSNA)",

    organization: "Stormshield",
    date: "2024",
    logo: stormshieldLogo,

    description:
      "Professional certification in network security and administration using Stormshield security solutions.",

    descriptionFr:
      "Certification professionnelle en sécurité et administration réseau utilisant les solutions de sécurité Stormshield.",
  },

  {
    title: "Piscine – Intensive Programming Bootcamp",

    titleFr:
      "Piscine – Bootcamp Intensif de Programmation",

    organization: "École 42",
    date: "2024",
    logo: school42Logo,

    description:
      "Intensive programming bootcamp focused on C programming, algorithms, problem solving, Unix environments and peer-to-peer learning.",

    descriptionFr:
      "Bootcamp intensif de programmation axé sur le langage C, les algorithmes, la résolution de problèmes, les environnements Unix et l’apprentissage entre pairs.",
  },

  {
    title: "Cybersecurity Challenges",

    titleFr:
      "Challenges de Cybersécurité",

    organization: "Root-Me",
    date: "2022 – Present",
    dateFr: "2022 – Aujourd’hui",
    logo: rootmeLogo,

    description:
      "Hands-on cybersecurity training through practical security challenges covering web applications, networks, systems, cryptography and security vulnerabilities.",

    descriptionFr:
      "Entraînement pratique à la cybersécurité à travers des challenges couvrant les applications web, les réseaux, les systèmes, la cryptographie et l’exploitation de vulnérabilités.",

    details:
      "1,695 points • 106 challenges • Ranking: 7,646",

    detailsFr:
      "1 695 points • 106 challenges • Classement : 7 646",
  },
];

const Education = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      mainTitle: "Education & Certifications",
      education: "Education",
      certifications: "Certifications & Training",
    },

    fr: {
      mainTitle: "Formation & Certifications",
      education: "Formation",
      certifications: "Certifications & Formations",
    },
  };

  const t = labels[language];

  return (
    <div className="pb-4">

      {/* MAIN TITLE */}
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        className="my-20 text-center text-4xl"
      >
        {t.mainTitle}
      </motion.h2>

      {/* ================= EDUCATION ================= */}

      <div className="mb-20">

        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mb-10 flex items-center gap-4 lg:justify-center"
        >
          <FaGraduationCap className="text-4xl text-cyan-400" />

          <h3 className="text-2xl font-semibold">
            {t.education}
          </h3>
        </motion.div>

        <div>
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="
                mb-12
                flex
                flex-wrap
                items-center
                lg:justify-center
              "
            >

              {/* LEFT SIDE */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="w-full lg:w-1/4"
              >

                <div className="mb-5 lg:mb-0">

                  {item.logo ? (
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="
                        mb-4
                        flex
                        h-20
                        items-center
                        lg:justify-start
                      "
                    >
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="
                          max-h-16
                          max-w-[190px]
                          object-contain
                        "
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="
                        mb-4
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/5
                      "
                    >
                      <FaGraduationCap className="text-2xl text-cyan-400" />
                    </motion.div>
                  )}

                  <p className="text-sm text-stone-400">
                    {language === "fr"
                      ? item.dateFr || item.date
                      : item.date}
                  </p>

                </div>

              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-800
                  bg-neutral-900/30
                  p-6
                  backdrop-blur-sm
                  transition-shadow
                  hover:shadow-xl
                  lg:w-3/4
                "
              >

                {/* GLOW */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <motion.h3
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      mb-2
                      text-xl
                      font-semibold
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    {language === "fr"
                      ? item.titleFr || item.title
                      : item.title}
                  </motion.h3>

                  <p className="mb-3 text-sm font-medium text-cyan-400">
                    {item.school}
                  </p>

                  <p className="leading-relaxed text-stone-400">
                    {language === "fr"
                      ? item.descriptionFr || item.description
                      : item.description}
                  </p>

                </div>

              </motion.div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= CERTIFICATIONS ================= */}

      <div>

        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mb-10 flex items-center gap-4 lg:justify-center"
        >
          <FaCertificate className="text-4xl text-yellow-400" />

          <h3 className="text-2xl font-semibold">
            {t.certifications}
          </h3>
        </motion.div>

        <div>
          {CERTIFICATIONS.map((item, index) => (
            <div
              key={index}
              className="
                mb-12
                flex
                flex-wrap
                items-center
                lg:justify-center
              "
            >

              {/* LEFT SIDE */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="w-full lg:w-1/4"
              >

                <div className="mb-5 lg:mb-0">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="
                      mb-4
                      flex
                      h-20
                      items-center
                      lg:justify-start
                    "
                  >
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="
                        max-h-20
                        max-w-[190px]
                        object-contain
                      "
                    />
                  </motion.div>

                  <p className="text-sm text-stone-400">
                    {language === "fr"
                      ? item.dateFr || item.date
                      : item.date}
                  </p>

                </div>

              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-800
                  bg-neutral-900/30
                  p-6
                  backdrop-blur-sm
                  transition-shadow
                  hover:shadow-xl
                  lg:w-3/4
                "
              >

                {/* GLOW */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-yellow-400/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <motion.h3
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      mb-2
                      text-xl
                      font-semibold
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    {language === "fr"
                      ? item.titleFr || item.title
                      : item.title}
                  </motion.h3>

                  <p className="mb-3 text-sm font-medium text-yellow-400">
                    {item.organization}
                  </p>

                  <p className="leading-relaxed text-stone-400">
                    {language === "fr"
                      ? item.descriptionFr || item.description
                      : item.description}
                  </p>

                  {item.details && (
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        x: 3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="
                        mt-5
                        inline-block
                        rounded-lg
                        border
                        border-neutral-800
                        bg-neutral-950/60
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-stone-300
                      "
                    >
                      {language === "fr"
                        ? item.detailsFr || item.details
                        : item.details}
                    </motion.div>
                  )}

                </div>

              </motion.div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Education;
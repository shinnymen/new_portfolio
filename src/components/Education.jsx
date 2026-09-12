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

const EDUCATION = [
  {
    title: "Master’s Degree in Cybersecurity and Data Science",
    school: "Université Paris 8",
    date: "2024 – 2026",
    logo: paris8Logo,
    description:
      "Master’s degree focused on cybersecurity, data science, information systems security and modern data-driven technologies.",
  },
  {
    title:
      "Bachelor’s Degree in Systems and Network Administration – Cybersecurity Option",
    school: "Université de Versailles Saint-Quentin",
    date: "2023 – 2024",
    logo: uvsqLogo,
    description:
      "Specialized training in systems and network administration, infrastructure management, networking and cybersecurity.",
  },
  {
    title: "Associate Degree (BAC+2) in Full Stack Web Development",
    school: "WebForce3",
    date: "2021",
    description:
      "Professional degree in Full Stack Web Development covering front-end and back-end development, databases, APIs, responsive web applications and modern web development practices.",
  },
  {
    title: "BTS in Management of Commercial Units – Marketing Option",
    school: "EPSECO Périgueux",
    date: "2011 – 2013",
    description:
      "Higher technical diploma focused on business management, sales, customer relations and marketing.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Certified StormShield Network Administrator (CSNA)",
    organization: "Stormshield",
    date: "2024",
    logo: stormshieldLogo,
    description:
      "Professional certification in network security and administration using Stormshield security solutions.",
  },
  {
    title: "Piscine – Intensive Programming Bootcamp",
    organization: "École 42",
    date: "2024",
    logo: school42Logo,
    description:
      "Intensive programming bootcamp focused on C programming, algorithms, problem solving, Unix environments and peer-to-peer learning.",
  },
  {
    title: "Cybersecurity Challenges",
    organization: "Root-Me",
    date: "2022 – Present",
    logo: rootmeLogo,
    description:
      "Hands-on cybersecurity training through practical security challenges covering web applications, networks, systems, cryptography and security vulnerabilities.",
    details: "1,695 points • 106 challenges • Ranking: 7,646",
  },
];

const Education = () => {
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
        Education & Certifications
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
            Education
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
                    {item.date}
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
                    {item.title}
                  </motion.h3>

                  <p className="mb-3 text-sm font-medium text-cyan-400">
                    {item.school}
                  </p>

                  <p className="leading-relaxed text-stone-400">
                    {item.description}
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
            Certifications & Training
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
                    {item.date}
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
                    {item.title}
                  </motion.h3>

                  <p className="mb-3 text-sm font-medium text-yellow-400">
                    {item.organization}
                  </p>

                  <p className="leading-relaxed text-stone-400">
                    {item.description}
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
                      {item.details}
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
import React from "react";
import profilePic from "../assets/WhatsApp Image 2025-01-26 at 14.02.59.jpeg";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      intro: "Full Stack • Cybersecurity • Data",
      title1: "Cybersecurity & Data Engineer",
      title2: "Full Stack Developer",
      rootme: "Root-Me • 1,695 pts • 106 challenges",
      description:
        "I am a Full Stack Developer and IT Engineer with 5 years of experience building modern web, mobile, and real-time applications. I work across the entire development stack, from front-end interfaces with React, Next.js, and React Native to scalable back-end systems using Node.js, Express, TypeScript, MongoDB, PostgreSQL, and REST APIs. I have designed and developed complete platforms involving real-time communication, geolocation, secure payments, authentication, cloud services, and automated systems. Alongside software development, I hold a degree in Systems and Network Administration, giving me a strong understanding of infrastructure, Linux environments, networking, virtualization, and system security. I also have practical experience in cybersecurity, including vulnerability analysis, security auditing, secure application design, and technologies based on NIST principles. My recent projects include a complete ride-hailing platform, a digital art marketplace, and an automated cryptocurrency trading system using real-time market data. I enjoy solving complex technical problems and building secure, scalable, and reliable products from concept to production.",
      downloadResume: "Download Resume",
      viewProjects: "View Projects →",
    },

    fr: {
      intro: "Full Stack • Cybersécurité • Data",
      title1: "Ingénieur Cybersécurité & Data",
      title2: "Développeur Full Stack",
      rootme: "Root-Me • 1 695 pts • 106 challenges",
      description:
        "Je suis développeur Full Stack et ingénieur informatique avec 5 ans d’expérience dans la création d’applications web, mobiles et temps réel. J’interviens sur l’ensemble de la stack, des interfaces front-end avec React, Next.js et React Native aux systèmes back-end avec Node.js, Express, TypeScript, MongoDB, PostgreSQL et les API REST. J’ai conçu et développé des plateformes complètes intégrant communication temps réel, géolocalisation, paiements sécurisés, authentification, services cloud et systèmes automatisés. En parallèle du développement logiciel, je suis diplômé en administration systèmes et réseaux, avec de solides compétences en infrastructure, environnements Linux, réseaux, virtualisation et sécurité des systèmes. J’ai également une expérience pratique en cybersécurité, notamment en analyse de vulnérabilités, audit de sécurité et conception d’applications sécurisées. Mes projets récents comprennent une plateforme VTC complète, une plateforme dédiée à l’art numérique ainsi qu’un système automatisé de trading de cryptomonnaies utilisant des données de marché en temps réel. J’apprécie particulièrement résoudre des problématiques techniques complexes et concevoir des produits sécurisés, évolutifs et fiables.",
      downloadResume: "Télécharger mon CV",
      viewProjects: "Voir mes projets →",
    },
  };

  const t = content[language];

  return (
    <div className="pb-10 lg:mb-28">
      <div className="flex flex-wrap items-center lg:flex-row-reverse">

        {/* ================= PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:p-8">
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-neutral-800
                bg-neutral-900/30
                p-2
                backdrop-blur-sm
                transition-shadow
                hover:shadow-2xl
              "
            >
              {/* GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              <motion.img
                src={profilePic}
                alt="Alexandre Medor"
                width={350}
                height={350}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="
                  relative
                  z-10
                  h-[350px]
                  w-[350px]
                  rounded-3xl
                  object-cover
                "
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className="w-full lg:w-1/2"
        >
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              lg:items-start
            "
          >

            {/* SMALL INTRO */}
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              viewport={{
                once: false,
              }}
              className="
                mb-4
                rounded-full
                border
                border-neutral-800
                bg-neutral-900/50
                px-4
                py-2
                text-sm
                font-medium
                tracking-wide
                text-stone-300
              "
            >
              {t.intro}
            </motion.span>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              viewport={{
                once: false,
              }}
              className="
                pb-3
                text-center
                text-5xl
                font-semibold
                tracking-tighter
                lg:text-left
                lg:text-7xl
                xl:text-8xl
              "
            >
              Alexandre Medor
            </motion.h1>

            {/* JOB TITLES */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              viewport={{
                once: false,
              }}
              className="
                mb-6
                bg-gradient-to-r
                from-stone-200
                via-cyan-300
                to-stone-500
                bg-clip-text
                text-center
                text-2xl
                font-medium
                tracking-tight
                text-transparent
                lg:text-left
                lg:text-3xl
              "
            >
              <p>{t.title1}</p>
              <p>{t.title2}</p>
            </motion.div>

            {/* ROOT-ME BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              viewport={{
                once: false,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              className="
                mb-6
                rounded-xl
                border
                border-neutral-800
                bg-neutral-900/60
                px-4
                py-3
                text-sm
                font-medium
                text-stone-300
              "
            >
              {t.rootme}
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              viewport={{
                once: false,
              }}
              className="
                my-2
                max-w-xl
                py-4
                text-center
                text-lg
                leading-relaxed
                text-stone-400
                lg:text-left
              "
            >
              {t.description}
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              viewport={{
                once: false,
              }}
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                lg:justify-start
              "
            >

              {/* CV BUTTON */}
              <motion.a
                href="/CV-2025-v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-stone-900
                  transition-shadow
                  hover:shadow-xl
                "
              >
                {t.downloadResume}
              </motion.a>

              {/* SECONDARY BUTTON */}
              <motion.a
                href="#projects"
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  rounded-full
                  border
                  border-neutral-700
                  bg-neutral-900/40
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-stone-300
                  transition-colors
                  hover:border-neutral-500
                  hover:text-white
                "
              >
                {t.viewProjects}
              </motion.a>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
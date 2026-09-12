import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      title: "Projects",
      viewProject: "View project",
    },
    fr: {
      title: "Projets",
      viewProject: "Voir le projet",
    },
  };

  const t = labels[language];

  return (
    <div id="projects" className="pb-4">

      {/* TITLE */}
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
        {t.title}
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => {
          const title =
            language === "fr"
              ? project.titleFr || project.title
              : project.title;

          const description =
            language === "fr"
              ? project.descriptionFr || project.description
              : project.description;

          return (
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

              {/* ================= IMAGE - LEFT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="w-full lg:w-1/4"
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mb-6
                    w-fit
                    overflow-hidden
                    rounded-xl
                    border
                    border-neutral-800
                    lg:mb-0
                  "
                >
                  <motion.img
                    src={project.image}
                    alt={title}
                    width={250}
                    height={250}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      h-[220px]
                      w-[250px]
                      object-cover
                    "
                  />
                </motion.div>
              </motion.div>

              {/* ================= CONTENT - RIGHT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -5,
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

                {/* BACKGROUND GLOW */}
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

                  {/* PROJECT TITLE */}
                  <motion.h3
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      mb-3
                      text-2xl
                      font-semibold
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    {title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mb-5
                      leading-relaxed
                      text-stone-400
                    "
                  >
                    {description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="
                          rounded
                          border
                          border-neutral-800
                          bg-stone-900
                          px-3
                          py-2
                          text-sm
                          font-medium
                          text-stone-300
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* PROJECT LINK */}
                  {project.link && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.3,
                      }}
                      className="mt-6"
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          x: 6,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          font-medium
                          text-blue-500
                          transition-colors
                          hover:text-blue-400
                        "
                      >
                        {t.viewProject}

                        <motion.span
                          whileHover={{
                            x: 3,
                          }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    </motion.div>
                  )}

                </div>
              </motion.div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Projects;
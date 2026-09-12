import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  const sectionTitle =
    language === "fr" ? "Expériences" : "Experiences";

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {sectionTitle}
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => {
          const role =
            language === "fr"
              ? experience.roleFr || experience.role
              : experience.role;

          const description =
            language === "fr"
              ? experience.descriptionFr || experience.description
              : experience.description;

          return (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              {/* YEAR */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-stone-400">
                  {experience.year}
                </p>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold">
                  {role}{" "}
                  <span className="text-sm text-stone-500">
                    {experience.company}
                  </span>
                </h3>

                <p className="mb-4 text-stone-400">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
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
                        bg-stone-900
                        px-2
                        py-1
                        text-sm
                        font-medium
                        text-stone-300
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
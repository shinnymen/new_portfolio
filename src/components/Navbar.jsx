import React from "react";
import logo from "../assets/logo_am1.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={33}
            alt="Logo"
          />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4">
        {/* Language selector */}
        <div className="flex items-center gap-2 rounded-full border border-stone-700 px-3 py-1 text-sm">
          <button
            type="button"
            onClick={() => setLanguage("fr")}
            className={`transition ${
              language === "fr"
                ? "font-semibold text-cyan-400"
                : "text-stone-400 hover:text-white"
            }`}
            aria-label="Passer en français"
          >
            FR
          </button>

          <span className="text-stone-600">|</span>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`transition ${
              language === "en"
                ? "font-semibold text-cyan-400"
                : "text-stone-400 hover:text-white"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alexandre-m-295b00b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl transition hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shinnymen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-2xl transition hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
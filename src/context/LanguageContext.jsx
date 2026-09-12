import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage) {
      return savedLanguage;
    }

    return navigator.language.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);

    // Change également la langue déclarée du document
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
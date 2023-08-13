import { createContext, useContext, useState } from "react";

const LangContext = createContext("en");

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang: () => setLang(lang === "en" ? "ar" : "en"),
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
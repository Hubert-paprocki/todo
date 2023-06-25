import React, { createContext, useState } from "react";
import AppRoutes from "./components/Routes";
import pl from "./languages/pl.json";
import en from "./languages/en.json";

const browserPolLangCheck = /pl/i.test(navigator.language);
export const LanguageContext = createContext({
  language: browserPolLangCheck ? "pl" : "en",
  handleLanguageSwitch: () => {},
  selectedLanguage: browserPolLangCheck ? pl : en,
});

function App(): JSX.Element {
  const [language, setLanguage] = useState(browserPolLangCheck ? "pl" : "en");

  const handleLanguageSwitch = () => {
    if (language === "pl") {
      setLanguage("en");
    } else {
      setLanguage("pl");
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageSwitch,
        selectedLanguage: language === "pl" ? pl : en,
      }}
    >
      <AppRoutes />
    </LanguageContext.Provider>
  );
}

export default App;

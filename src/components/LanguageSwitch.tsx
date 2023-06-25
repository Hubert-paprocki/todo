import React, { useState, createContext } from "react";
import polandFlag from "../images/polandFlag.svg";
import usaFlag from "../images/usaFlag.svg";
import Button from "./Button";

const LanguageContext = createContext<{
  language: "pl" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"pl" | "en">>;
}>({
  language: "en",
  setLanguage: () => {},
});

const LanguageSwitch: React.FC = () => {
  const browserPolLangCheck = /pl/i.test(navigator.language);

  const [language, setLanguage] = useState<"pl" | "en">(
    browserPolLangCheck ? "pl" : "en"
  );

  const handleLanguageSwitch = () => {
    if (language === "pl") {
      setLanguage("en");
    } else {
      setLanguage("pl");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Button type={"button"} onClick={handleLanguageSwitch} Switch>
        {language === "pl" ? (
          <img src={polandFlag} alt="polish flag" draggable="false" />
        ) : (
          <img
            src={usaFlag}
            alt="usa flag"
            className="rotate-[360deg] - object-cover"
            draggable="false"
          />
        )}
      </Button>
    </LanguageContext.Provider>
  );
};

export default LanguageSwitch;

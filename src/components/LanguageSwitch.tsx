import polandFlag from "../images/polandFlag.svg";
import usaFlag from "../images/usaFlag.svg";
import Button from "./Button";
import React, { useContext } from "react";
import { LanguageContext } from "../App";
const LanguageSwitch: React.FC = () => {
  const { language, handleLanguageSwitch } = useContext(LanguageContext);

  return (
    <Button type="button" onClick={handleLanguageSwitch} Switch>
      {language === "pl" ? (
        <img src={usaFlag} alt="usa flag" draggable="false" />
      ) : (
        <img
          src={polandFlag}
          alt="polish flag"
          className="rotate-[360deg] object-cover"
          draggable="false"
        />
      )}
    </Button>
  );
};

export default LanguageSwitch;

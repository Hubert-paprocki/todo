import React, { useContext } from "react";
import { LanguageContext } from "../App";

interface WelcomeProps {
  readonly username?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  const context = useContext(LanguageContext);
  return (
    <h1 className="text-center p-2 font-work text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl dark:text-white uppercase tracking-wide z-10 leading-tight xs:leading-snug md:leading-normal">
      {context.selectedLanguage.banner[0]}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400">
        {" "}
        {username}{" "}
      </span>
      {context.selectedLanguage.banner[1]}
    </h1>
  );
};

export default Welcome;

import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ThemeSwitch from "../components/ThemeSwitch";
import LanguageSwitch from "../components/LanguageSwitch";
import React, { useContext } from "react";
import { LanguageContext } from "../App";
const LoginPage: React.FC = () => {
  const context = useContext(LanguageContext);

  return (
    <>
      <main className="bg-gray-300 dark:bg-gray-900 bg-gradient-to-br from-pink-400/50 dark:from-pink-900/30 via-gray-300 dark:via-gray-900 to-indigo-100 dark:to-indigo-900/10 h-screen overflow-hidden text-gray-800 dark:text-slate-300 p-3 font-roboto text:lg md:text-xl flex flex-col justify-center items-center relative scroll-smooth gap-2">
        <div className="bg-gray-200 dark:bg-gray-800  sm:m-4 py-3 px-6 md:py-6 md:px-12 rounded-2xl max-w-3xl shadow-xl relative  duration-150">
          <div className="gap-5 sm:gap-8  text-center">
            <div className="flex justify-between md:items-center pb-6">
              <LanguageSwitch />
              <h1 className="font-bold capitalize text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400 tracking-wider">
                {context.selectedLanguage.loginPage.welcome}
              </h1>
              <ThemeSwitch />
            </div>
            <p className="border-b-2 mb-5 sm:mb-8 md:mb-10 pb-4 border-gray-400 dark:border-slate-600">
              {context.selectedLanguage.loginPage.logInInstructions}
            </p>
          </div>
          <LoginForm />
        </div>

        <ScrollDownButton />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

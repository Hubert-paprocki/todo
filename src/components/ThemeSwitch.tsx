import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import React from "react";

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      const el = document.documentElement.classList;
      if (theme === "dark") {
        el.add("dark");
        el.add("dark-scheme");
      } else {
        el.remove("dark");
        el.remove("dark-scheme");
      }
      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleThemeSwitch = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <Button
      type={"button"}
      onClick={handleThemeSwitch}
      Switch
      ariaLabel="theme switch"
    >
      {theme === "light" ? (
        <BsSun className="m-2.5" />
      ) : (
        <BsMoon className="rotate-[222deg] -translate-x-[1.75px] m-2.5" />
      )}
    </Button>
  );
};

export default ThemeSwitch;

import { MdOutlineWbSunny, MdOutlineNightlight} from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "./Button";


function ThemeSwitch(): JSX.Element {
  const [theme, setTheme] = useState< "dark" | "light" | null>(null);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light')
  }, [])

  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <Button onClick={handleThemeSwitch} themeSwitch login>{theme === "dark" ? <MdOutlineWbSunny /> : <div className="rotate-[184deg] translate-x-px -translate-y-[0.5px]"><MdOutlineNightlight/></div>}</Button>

  );
}

export default ThemeSwitch;

import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { useState, useEffect, useCallback } from "react";
import Button from "./Button";

function ThemeSwitch(): JSX.Element {
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
			} else {
				el.remove("dark");
			}
			sessionStorage.setItem("theme", theme);
		}
	}, [theme]);

	const handleThemeSwitch = useCallback(() => {
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	}, []);

	return (
		<Button type={"button"} onClick={handleThemeSwitch} themeSwitch>
			{theme === "light" ? (
				<MdOutlineWbSunny />
			) : (
				<MdOutlineNightlight className="rotate-[188deg]" />
			)}
		</Button>
	);
}

export default ThemeSwitch;

import { HiOutlineChevronDown } from "react-icons/hi";
import Button from "./Button";

function ThemeSwitch(): JSX.Element {
	const handleScrollDown = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	};
	return (
		<Button type={"button"} onClick={handleScrollDown} downBtn>
			<HiOutlineChevronDown />
		</Button>
	);
}

export default ThemeSwitch;

import { HiOutlineChevronDown } from "react-icons/hi";
import Button from "./Button";
import React from "react";

const ScrollDownButton: React.FC = () => {
	const handleScrollDown = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	};
	return (
		<Button type={"button"} onClick={handleScrollDown} downBtn>
			<HiOutlineChevronDown />
		</Button>
	);
};

export default ScrollDownButton;

import { InputHTMLAttributes } from "react";
import React from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	refs?: React.RefObject<HTMLInputElement>;
	date?: boolean;
	placeholder?: string;
	invalid?: boolean;
	errorMessage?: string;
	names?: string;
}

const Input: React.FC<InputProps> = ({
	type,
	refs,
	date,
	placeholder,
	invalid,
	errorMessage,
	names,
}) => {
	let borderStyle =
		"p-0.5 rounded-lg max-w-sm bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-violet-500 dark:to-cyan-500 self-center flex items-center justify-center w-full ";

	let classes =
		"text-center border-none h-7 md:h-10 rounded-[6px] bg-gray-200 dark:bg-slate-800 outline-none duration-200 w-full ";

	if (date) {
		classes += " w-8 sm:w-auto cursor-pointer outline-none";
	}
	if (invalid) {
		classes += "placeholder:text-red-500 dark:placeholder:text-red-400";
	}
	if (invalid) {
		borderStyle =
			"p-0.5 rounded-lg max-w-sm bg-red-500 self-center flex items-center justify-center w-full ";
	}

	return (
		<div className={borderStyle}>
			<input
				className={classes}
				type={type}
				ref={refs}
				placeholder={invalid && errorMessage ? errorMessage : placeholder}
				defaultValue={
					date ? new Date().toISOString().substring(0, 10) : undefined
				}
				name={names}
			/>
		</div>
	);
};

export default Input;

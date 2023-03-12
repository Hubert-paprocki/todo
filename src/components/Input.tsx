import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	refs?: React.RefObject<HTMLInputElement>;
	date?: boolean;
	placeholder?: string;
	invalid?: boolean;
	errorMessage?: string;
}

function Input({
	type,
	refs,
	date,
	placeholder,
	invalid,
	errorMessage,
}: InputProps) {
	let classes =
		"text-center border-none h-7 md:h-10 rounded-[6px] bg-gray-200 dark:bg-slate-800 outline-none duration-200 w-full ";
	if (date) {
		classes += " w-8 sm:w-auto cursor-pointer outline-none";
	}
	if (invalid) {
		classes += "placeholder:text-red-500 dark:placeholder:text-red-400";
	}

	return (
		<div className="p-0.5 rounded-lg max-w-sm bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-violet-500 dark:to-cyan-500 self-center flex items-center justify-center w-full">
			<input
				className={classes}
				type={type}
				ref={refs}
				placeholder={invalid && errorMessage ? errorMessage : placeholder}
				defaultValue={
					date ? new Date().toISOString().substring(0, 10) : undefined
				}
			/>
		</div>
	);
}

export default Input;

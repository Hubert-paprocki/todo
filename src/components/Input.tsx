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
	required,
	date,
	placeholder,
	invalid,
	errorMessage,
}: InputProps) {
	let classes =
		"text-center border-none h-7 md:h-10 px-2 py-1 rounded-[6px] bg-gray-200 dark:bg-slate-800 outline-none  duration-200 flex-1 w-full ";
	if (date) {
		classes += " w-8 xs:w-auto cursor-pointer outline-none";
	}

	return (
		<div className="">
			<div className="p-0.5 rounded-lg max-w-sm bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-violet-500 dark:to-cyan-500 self-center">
				<input
					className={`${classes} ${invalid ? "border-red-500" : ""}`}
					type={type}
					ref={refs}
					placeholder={placeholder}
					defaultValue={
						date ? new Date().toISOString().substring(0, 10) : undefined
					}
				/>
			</div>
			{invalid && errorMessage && (
				<p className="text-sm text-red-600 pt-3">{errorMessage}</p>
			)}
		</div>
	);
}

export default Input;

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    refs?: React.RefObject<HTMLInputElement>
	date?: boolean
	placeholder?: string
}

function Input({type,refs,required,date,placeholder}:InputProps) {
	
	let classes = "border-2 h-10 px-2 py-1 rounded-full bg-transparent border-violet-800 outline-none focus:border-violet-600 duration-200"
	if (date) {
		classes += " cursor-pointer outline-none hover:scale-105 "
	}
	const currentDate = new Date()
	const formattedCurrentDate = currentDate.toISOString().substring(0, 10)

	return (
<input className={classes} type={type} ref={refs} required placeholder={placeholder} defaultValue={date ? formattedCurrentDate : undefined} />
	);
}

export default Input;



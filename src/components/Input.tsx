import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    refs?: React.RefObject<HTMLInputElement>
	date?: boolean
	placeholder?: string
}

function Input({type,refs,required,date,placeholder}:InputProps) {
	
	let classes = "text-center border-none h-10 px-2 py-1 rounded-full bg-slate-800 outline-none  duration-200 flex-1 w-full"
	if (date) {
		classes += " cursor-pointer outline-none"
	}
	const currentDate = new Date()
	const formattedCurrentDate = currentDate.toISOString().substring(0, 10)

	return (
<div className=" p-0.5 rounded-3xl max-w-sm bg-gradient-to-r from-violet-600 to-cyan-600 w-1/3"><input className={classes} type={type} ref={refs} required placeholder={placeholder} defaultValue={date ? formattedCurrentDate : undefined} /></div>
	);
}

export default Input;



import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    refs?: React.RefObject<HTMLInputElement>
	date?: boolean
	placeholder?: string
}

function Input({type,refs,required,date,placeholder}:InputProps) {
	
	let classes = "text-center border-none h-7 md:h-10 px-2 py-1 rounded-full bg-gray-200 dark:bg-slate-800 outline-none  duration-200 flex-1 w-full "
	if (date) {
		classes += " w-8 xs:w-auto cursor-pointer outline-none"
	}
	const currentDate = new Date()
	const formattedCurrentDate = currentDate.toISOString().substring(0, 10)

	return (
<div className=" p-0.5 rounded-3xl max-w-sm bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-violet-500 dark:to-cyan-500 self-center"><input className={classes} type={type} ref={refs} required placeholder={placeholder} defaultValue={date ? formattedCurrentDate : undefined} /></div>
	);
}

export default Input;



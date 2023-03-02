import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    refs?: React.RefObject<HTMLInputElement>

}

function Input({type,refs,required}:InputProps) {
	
	let classes = "border-2 px-2 py-1 rounded "
	return (
<input className={classes} type={type} ref={refs} required/>
	);
}

export default Input;



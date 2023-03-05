interface ButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
	type?:"button" | "submit" | "reset" | undefined
	primary?: boolean;
    done?: boolean;
	deletes?: boolean;
	reload?: boolean;
}

function Button({ children,type, onClick,primary,done,deletes,reload}: ButtonProps) {
	
	let classes = "px-4 py-2 rounded hover:scale-105 duration-200 uppercase";
	if (primary) {
		classes += " font-semibold text-slate-200 bg-gradient-to-r from-violet-600 to-cyan-600 ";
	} else if (done) {
		classes = "flex text-[1.6251rem] hover:scale-110 duration-200 text-black font-bold rounded-full bg-emerald-500/70 hover:bg-emerald-700 p-[4px] text-slate-200";
	} else if (deletes) {
		classes = "flex  text-3xl hover:scale-110 duration-200 text-black font-bold rounded-full bg-rose-500/70 hover:bg-rose-700 text-slate-200 p-[2px]";
	} 
	else if (reload) {
		classes = "flex  text-2xl hover:scale-110 duration-200 text-black font-bold rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 p-[4.98px]";
	} 
	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;



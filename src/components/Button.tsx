interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?:"button" | "submit" | "reset" | undefined
	primary?: boolean;
    create?: boolean;
    deletes?: boolean;
}

function Button({ children,type, onClick,primary,create,deletes}: ButtonProps) {
	
	let classes = "border-2 px-2 py-1 rounded border-black";
	if (primary) {
		classes += "";
	} else if (create) {
		classes += "";
	} else if (deletes) {
		classes += "";
	} 
	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;



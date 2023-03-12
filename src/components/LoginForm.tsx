import { useRef, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import ThemeSwitch from "../components/ThemeSwitch";

function LoginForm() {
	const [isInputValid, setInputValid] = useState(true);
	const userNameRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userNameRef.current?.value.length === 0) {
			setInputValid(false); // set input validity to false if the input field is empty
		} else {
			navigate(`/todos?user=${userNameRef.current?.value}`);
		}
	};

	return (
		<div className="bg-gray-200 dark:bg-gray-800  sm:m-4 py-3 px-6 md:py-6 md:px-12 rounded-2xl max-w-3xl shadow-xl relative  duration-150">
			<div className="absolute top-2 right-2 sm:top-5 sm:right-5">
				<ThemeSwitch />
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-5 sm:gap-8 md:gap-10 text-center items-center"
			>
				<p className="font-bold capitalize text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400 tracking-wider ">
					Hi there!
				</p>
				<p className="border-b-2 pb-4 border-gray-400 dark:border-slate-600">
					To get started, we&apos;d like to create a user account for you so
					that we can remember your tasks across sessions. Please provide us
					with your name or nickname in the reply to this message. Once we have
					this information, we can create your user account in our database.
					Thank you!
				</p>
				<Input
					placeholder={"Type your username"}
					refs={userNameRef}
					// add the invalid prop and error message if the input is invalid
					invalid={!isInputValid}
					errorMessage={"Please enter a valid username"}
				/>
				<Button type={"submit"} primary>
					LogIn
				</Button>
			</form>
		</div>
	);
}

export default LoginForm;

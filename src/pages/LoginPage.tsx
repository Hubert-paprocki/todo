import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import ScrollDownButton from "../components/ScrollDownButton";

function LoginPage(): JSX.Element {
	return (
		<>
			<div className="bg-gray-300 dark:bg-gray-900 bg-gradient-to-br from-pink-400/50 dark:from-pink-900/30 via-gray-300 dark:via-gray-900 to-indigo-100 dark:to-indigo-900/10 h-screen overflow-hidden text-gray-800 dark:text-slate-300 p-3 font-roboto text:lg md:text-xl flex flex-col justify-center items-center relative scroll-smooth gap-2">
				<LoginForm />
				<ScrollDownButton />
			</div>
			<Footer />
		</>
	);
}

export default LoginPage;

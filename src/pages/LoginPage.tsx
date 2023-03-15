import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import ScrollDownButton from "../components/ScrollDownButton";
import ThemeSwitch from "../components/ThemeSwitch";

function LoginPage(): JSX.Element {
	return (
		<>
			<div className="bg-gray-300 dark:bg-gray-900 bg-gradient-to-br from-pink-400/50 dark:from-pink-900/30 via-gray-300 dark:via-gray-900 to-indigo-100 dark:to-indigo-900/10 h-screen overflow-hidden text-gray-800 dark:text-slate-300 p-3 font-roboto text:lg md:text-xl flex flex-col justify-center items-center relative scroll-smooth gap-2">
				<div className="bg-gray-200 dark:bg-gray-800  sm:m-4 py-3 px-6 md:py-6 md:px-12 rounded-2xl max-w-3xl shadow-xl relative  duration-150">
					<div className="absolute top-2 right-2 sm:top-5 sm:right-5">
						<ThemeSwitch />
					</div>
					<div className="gap-5 sm:gap-8 md:gap-10 text-center">
						<h1 className="font-bold capitalize text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400 tracking-wider pb-8">
							Hi there!
						</h1>
						<p className="border-b-2 mb-5 sm:mb-8 md:mb-10 pb-4 border-gray-400 dark:border-slate-600">
							To get started, we&apos;d like to create a user account for you so
							that we can remember your tasks across sessions. Please provide us
							with your name or nickname in the reply to this message. Once we
							have this information, we can create your user account in our
							database. Thank you!
						</p>
					</div>
					<LoginForm />
				</div>

				<ScrollDownButton />
			</div>
			<Footer />
		</>
	);
}

export default LoginPage;

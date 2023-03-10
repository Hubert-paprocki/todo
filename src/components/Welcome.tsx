interface WelcomeProps {
	username?: string;
}

function Welcome({ username }: WelcomeProps) {
	return (
		<div className="text-center p-2 font-work text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl dark:text-white uppercase tracking-wide z-10 leading-tight xs:leading-snug md:leading-normal">
			<h2>
				Welcome
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-400 dark:to-cyan-400 mx-1.5 md:mx-2 lg:mx-2.5 xl:mx-3">
					{username}
				</span>
				what have you planed for today?
			</h2>
		</div>
	);
}

export default Welcome;
